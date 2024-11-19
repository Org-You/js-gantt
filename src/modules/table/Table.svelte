<script context="module">
    export const type = 'table';
</script>

<script lang="ts">
    import { createEventDispatcher, onMount, getContext } from 'svelte';

    const dispatch = createEventDispatcher();

    import TableRow from './TableRow.svelte';
    import type { GanttDataStore } from '../../core/store';
    import type { TableHeader } from './tableHeader';
    import type { SvelteRow } from '../../core/row';
    import { SvelteTask, TaskFactory } from '../../core/task';
    import { type GanttContext, GanttContextDimensions, GanttContextOptions, SvelteGanttComponent } from '../../gantt';
    import { Readable } from 'svelte/store';
    import { reflected } from '../../entities';

    export let tableWidth;
    export let paddingTop;
    export let paddingBottom;
    export let rowContainerHeight;
    export let visibleRows: SvelteRow[];
    // list of columns used in the table
    // title: label to display in the header
    // property: property of row to display in the cell
    // width: width of column
    export let tableHeaders: TableHeader[] = [{ title: 'Name', property: 'label', width: 100 }];

    const { from, to, width, visibleWidth, headerHeight } : GanttContextDimensions= getContext('dimensions');
    const { rowPadding, rowHeight } : GanttContextOptions = getContext('options');
    const { rowStore, taskStore } = getContext('dataStore') as GanttDataStore;
    const { scrollables } : GanttContext = getContext('gantt');
    const { taskFactory } : SvelteGanttComponent = getContext('component');


    onMount(() => {
        dispatch('init', { module: this });
    });

    let headerContainer;
    function scrollListener(node) {
        scrollables.push({ node, orientation: 'vertical' });

        function onScroll(event) {
            const { scrollTop, scrollLeft } = node;

            scrollables.forEach(scrollable => {
                if (scrollable.orientation === 'horizontal') {
                    scrollable.node.scrollLeft = scrollLeft;
                } else {
                    scrollable.node.scrollTop = scrollTop;
                }
            });
        }
        node.addEventListener('scroll', onScroll);

        return {
            destroy() {
                node.removeEventListener('scroll', onScroll);
            }
        };
    }

    let scrollWidth;
    $: {
        let sum = 0;
        tableHeaders.forEach(header => {
            sum += header.width;
        });
        scrollWidth = sum;
    }

    function onRowExpanded(event) {
        const row = event.detail.row;
        row.expanded = true;
        row.model.expanded = true;
        if (row.children) show(row.children);
        updateYPositions();

        window.gantt.updateAllTasks();
    }

    function onRowCollapsed(event) {
        const row = event.detail.row;
        row.expanded = false;
        row.model.expanded = false;
        if (row.children) hide(row.children);
        updateYPositions();

        window.gantt.updateAllTasks();
    }

     function updateYPositions() {
        let y = 0;
        $rowStore.ids.forEach(id => {
            const row = $rowStore.entities[id];
            if (!row.hidden) {
                $rowStore.entities[id].y = y;
                y += $rowHeight;
            }
        });
    }

    async function updateAllTasks(mainRow) {
        let rowHeight = singleRowHeight(mainRow);
        $taskStore.ids.forEach(id => {
            const task = $taskStore.entities[id];
            const row = $rowStore.entities[task.model.resourceId];
            if (row.expanded) {
                if (!row.hidden) {
                    $taskStore.entities[id].top = row.y + $rowPadding;

                    if (task.reflected) {
                        $taskStore.entities[id].height = singleRowHeight(row);
                    } else {
                        $taskStore.entities[id].height = getTaskHeight(task.model, row);
                    }
                }
            } else {
                if (!row.hidden) {
                    $taskStore.entities[id].top = row.y + $rowPadding;
                    $taskStore.entities[id].height = rowHeight;//singleRowHeight(row);
                }
            }
        });
    }

    function updateTasks(tasks: Readable<SvelteTask[]>) {
        return tasks.map(task => updateTask(task));
    }
    function updateTask(task: SvelteTask) {
        task.height = getHeight(task.model);
        task.top = getPosY(task.model);
        task.y = task.top;
        return task;
    }

    function getHeight(model){
        let row = this.row(model.resourceId);
        if (!row) {
            return 0;
        }

        return getTaskHeight(model, row);
    }
    function getPosY(model) {
        let row = $rowStore.entities[model.resourceId];
        if (!row) {
            return 0;
        }
        return row.y + this.rowPadding;
    }

    function getTaskHeight(model, row){
        if (!row) {
            return 0;
        }

        if (model.extendMultiRow && !model.reflected) {
            if (model.reflectInSibling) {
                return (row.height * (siblingRowCount(model.resourceId) + 1)) - (2 * $rowPadding);
            } else if (row.model.expanded) {
                return (row.height * (childRowCount(model.resourceId) + 1)) - (2 * $rowPadding);
            } else {
                return row.height - 2 * $rowPadding;
            }
        } else {
            return row.height - 2 * $rowPadding;
        }
    }

    function singleRowHeight(row){
        return row.height - 2 * $rowPadding;
    }

    function childRowCount(resourceId) {
        let childCount = 0;
        let row = $rowStore.entities[resourceId];
        if (row.expanded) {
            childCount += rowCount(row);
        }
        return childCount;
    }

    function siblingRowCount(resourceId) {
        let originalRow = $rowStore.entities[resourceId];
        let parentRow = originalRow.parent;
        let childCount = 0;
        let children = parentRow ? parentRow.children : originalRow.children;

        if (children && children.length > 0) {
            let start = false;
            for (let i = 0; i < children.length; i++) {
                let row = children[i];

                if (row.model.id == originalRow.model.id) {
                    start = true;
                }

                if (start ) {
                    if (row.expanded) {
                        childCount += siblingChildRowCount(row);
                    } else {
                        childCount += 1;
                    }
                }
            }
        }

        // if (parentRow.expanded) {
        //     childCount += rowCount(parentRow);
        // }
        return childCount;
    }

    function siblingChildRowCount(row) {
        let childCount = 1;
        let children = row.children;

        if (children && children.length > 0) {
            if (!children.hidden) {
                childCount += children.length;

                for (let i = 0; i < children.length; i++) {
                    let row = children[i];
                    childCount += rowCount(row);
                }
            }
        }

        return childCount;
    }

    function rowCount(row) {
        let childCount = 0;
        let children = row.children;

        if (children && children.length > 0) {
            if (!children.hidden) {
                childCount += children.length;

                for (let i = 0; i < children.length; i++) {
                    let row = children[i];
                    childCount += rowCount(row);
                }
            }
        }

        return childCount;
    }

    function hide(children) {
        children.forEach(row => {
            if (row.children) hide(row.children);
            row.hidden = true;
            let row1 = $rowStore.entities[row.model.id];
            if (row1) {
                row1.hidden = true;
            }
        });
    }

    function show(children, hidden = false) {
        children.forEach(row => {
            if (row.children) show(row.children, !row.model.expanded);
            row.hidden = hidden;
            let row1 = $rowStore.entities[row.model.id];
            if (row1) {
                row1.hidden = hidden;
            }
        });
    }

    // if gantt displays a bottom scrollbar and table does not, we need to pad out the table
    let bottomScrollbarVisible;
    $: {
        bottomScrollbarVisible = $width > $visibleWidth && scrollWidth <= tableWidth;
    }
</script>

<div class="sg-table sg-view" style="width:{tableWidth}px;">
    <div class="sg-table-header" style="height:{$headerHeight}px" bind:this={headerContainer}>
        {#each tableHeaders as header}
            <div class="sg-table-header-cell sg-table-cell" style="width:{header.width}px">
                {#if header.titleHtml}
                    {@html header.titleHtml}
                {:else}
                    {header.title}
                {/if}
            </div>
        {/each}
    </div>

    <div class="sg-table-body" class:bottom-scrollbar-visible={bottomScrollbarVisible}>
        <div class="sg-table-scroller" use:scrollListener>
            <div
                class="sg-table-rows"
                style="padding-top:{paddingTop}px;padding-bottom:{paddingBottom}px;height:{rowContainerHeight}px;"
            >
                {#each visibleRows as row}
                    <TableRow
                        {row}
                        headers={tableHeaders}
                        on:rowExpanded={onRowExpanded}
                        on:rowCollapsed={onRowCollapsed}
                    />
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    /* This class should take into account varying widths of the scroll bar */
    .bottom-scrollbar-visible {
        padding-bottom: 17px;
    }

    .sg-table {
        overflow-x: auto;
        display: flex;
        flex-direction: column;
    }

    .sg-table-scroller {
        width: 100%;
        border-bottom: 1px solid #efefef;
        overflow-y: scroll;
    }

    .sg-table-header {
        display: flex;
        align-items: stretch;
        overflow: hidden;
        border-bottom: #efefef 1px solid;
        background-color: #fbfbfb;
    }

    .sg-table-rows {
    }

    .sg-table-body {
        display: flex;
        flex: 1 1 0;
        width: 100%;
        overflow-y: hidden;
    }

    .sg-table-header-cell {
        font-size: 14px;
        font-weight: 400;
    }

    :global(.sg-table-cell) {
        white-space: nowrap;
        overflow: hidden;

        display: flex;
        align-items: center;
        flex-shrink: 0;

        padding: 0 0.5em;
        height: 100%;
    }

    :global(.sg-table-cell:last-child) {
        flex-grow: 1;
    }
</style>
