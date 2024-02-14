<script lang="ts">
    import type {SvelteRow} from '../../core/row';

    import {createEventDispatcher, getContext} from "svelte";
    import {GanttContextOptions, SvelteGanttOptions} from "../../gantt";

    const {expandIconDown, expandIconRight} : GanttContextOptions = getContext('options');

    export let row: SvelteRow;

    const dispatch = createEventDispatcher();

    function onExpandToggle() {
        if (row.model.expanded || row.model.expanded == null) {
            dispatch('rowCollapsed', { row });
        } else {
            dispatch('rowExpanded', { row });
        }
    }
</script>

<div class="sg-cell-inner" style="padding-left: {row.childLevel*3}em">
    {#if !row.expanderRight}
        {#if row.children}
            <div class="sg-tree-expander" on:click="{onExpandToggle}">
                {#if row.model.expanded}
                    {@html expandIconDown}
                {:else}
                    {@html expandIconRight}
                {/if}
            </div>
        {/if}
        <slot></slot>
        {#if row.extraHeaderHtml}
            {@html row.extraHeaderHtml}
        {/if}
    {:else}
        <slot></slot>
        {#if row.children}
            <div class="sg-tree-expander" on:click="{onExpandToggle}">
                {#if row.model.expanded}
                    {@html expandIconDown}
                {:else}
                    {@html expandIconRight}
                {/if}
            </div>
        {/if}
        {#if row.extraHeaderHtml}
            {@html row.extraHeaderHtml}
        {/if}
    {/if}

</div>

<style>
    .sg-tree-expander {
        cursor: pointer;
        min-width: 1.4em;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sg-cell-inner {
        display: flex;
        align-items: center;
    }
</style>
