<script lang="ts">
    import type { SvelteRow } from '../core/row';
    import { getContext } from 'svelte';
    import {
        GanttContext,
        GanttContextOptions,
        GanttContextServices
    } from "../gantt";

    export let row: SvelteRow;
    const { rowHeight, rowElementHook } : GanttContextOptions = getContext('options');
    const { hoveredRow, selectedRow } : GanttContext = getContext('gantt');
    const { api } : GanttContextServices = getContext('services');

    function rowElement(node, model) {
        if(node && node.getBoundingClientRect().x == 0 && node.getBoundingClientRect().width == 0){
            node = <HTMLElement> document.querySelector('[data-row-id="'+node.dataset.taskId+'"]')
            console.log('NODE AFTER', node, node.getBoundingClientRect())
        }
        if(rowElementHook) {
            return rowElementHook(node, model);
        }
    }

</script>

<div class="sg-row {row.model.classes}"
     data-row-id="{row.model.id}"
     on:dblclick={() => {api.rows.raise.dblclicked(row.model)}}
     on:keypress={()=>{}}
     use:rowElement={row}
     class:sg-hover={$hoveredRow == row.model.id}
     class:sg-selected={$selectedRow == row.model.id}
     style="height:{$rowHeight}px">
    {#if row.model.contentHtml}
        {@html row.model.contentHtml}
    {/if}
</div>
<style>
    .sg-row {
        position: relative;
        width: 100%;
        box-sizing: border-box;
    }
</style>
