<script>
    import {createEventDispatcher, getContext} from 'svelte';

    const dispatch = createEventDispatcher();

    import { Draggable } from '../core/drag';
    import { setCursor } from '../utils/dom';

    const { visibleWidth } = getContext('dimensions');
    const { mainContainer } = getContext('gantt');

    export let x;
    export let min;
    export let max;
    export let container;

    let dragging = false;

    const dragOptions = {
        onDrag: event => {
            (x = event.x), (dragging = true);
            dispatch('resize', { left: x });
            setCursor('col-resize');
        },
        onDrop: event => {
            (x = event.x), (dragging = false);
            dispatch('resize', { left: x });
            setCursor('default');
        },
        dragAllowed: true,
        resizeAllowed: false,
        container: container,
        getX: () => x,
        getY: () => 0,
        getWidth: () => 0
    };

    $: dragOptions.container = container;

    function resizer(node) {
        const draggable = new Draggable(node, dragOptions, 'resizer');

        return { destroy: () => draggable.destroy() };
    }

    function minLeft(x) {
        if (min && min >= x) {
            return min;
        } else if (max && $visibleWidth <= max) {
            if (!container) {
                return x;
            }
            return container.clientWidth - max - 7;
        } else {
            return x;
        }
    }

</script>

<div class="sg-resize" style="left:{minLeft(x)}px" use:resizer></div>

<style>
    .sg-resize {
        z-index: 2;
        background: #e9eaeb;
        width: 5px;
        cursor: col-resize;
        position: absolute;
        height: 100%;

        transition:
            width 0.2s,
            transform 0.2s;
    }

    .sg-resize:hover {
        transform: translateX(-2px);
        width: 10px;
    }
</style>
