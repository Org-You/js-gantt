<script>
    import { SvelteGantt, SvelteGanttDependencies, SvelteGanttExternal, SvelteGanttTable, MomentSvelteGanttDateAdapter } from 'svelte-gantt';
    import { onMount, getContext } from 'svelte';
    import { time } from '../utils';
    import moment from 'moment';
    import GanttOptions from '../components/GanttOptions.svelte';

    //const currentStart = time('06:00');
    //const currentEnd = time('18:00');
	const currentStart = new Date('2023-05-01').getTime();
	const currentEnd = new Date('2023-12-31').getTime();
	const colors = ['blue', 'green', 'orange'];

    export const data = {
        rows: [{
            id: 1,
            label: "Accounting",
        }, {
            id: 2,
            label: "Business Development",
        }, {
            id: 3,
            label: "Ida Flewan",
            children: []
        }, {
            id: 4,
            label: "Lauréna Shrigley",
            expanderRight: false,
            children: []
        }, {
            id: 5,
            label: "Ange Kembry",
            headerHtml: '<div>Lars</div>',
            extraHeaderHtml:'<div>B.</div>',
            expanderRight: true,
            children: []
        }],
        tasks: [{
            id: 3,
            resourceId: 1,
            label: "PET-CT",
            from: time("00:00"),
            to: time("23:00"),
            classes: "orange",
            moveRow: false,
        }, {
            id: 4,
            resourceId: 1,
            label: "Auditing",
            from: time("9:30"),
            to: time("11:30"),
            classes: "orange",
            moveRow: false,
        }, {
            id: 5,
            resourceId: 2,
            label: "Security Clearance",
            from: time("15:15"),
            to: time("16:00"),
            classes: "green",
            moveRow: false,
        }, {
            id: 6,
            resourceId: 2,
            label: "Policy Analysis",
            from: time("14:00"),
            to: time("17:00"),
            classes: "blue",
            moveRow: false,
        }, {
            id: 7,
            resourceId: 2,
            label: "Xbox 360",
            from: time("13:00"),
            to: time("14:00"),
            classes: "blue",
            moveRow: false,
        }, {
            id: 8,
            resourceId: 3,
            label: "GNU/Linux",
            from: time("14:00"),
            to: time("15:30"),
            classes: "blue",
            moveRow: false,
        }, {
            id: 9,
            resourceId: 4,
            label: "Electronic Trading",
            from: time("15:00"),
            to: time("17:00"),
            classes: "green",
            moveRow: false,
        }, {
            id: 10,
            resourceId: 5,
            label: "Alternative Medicine",
            from: time("14:30"),
            to: time("15:30"),
            classes: "orange",
            moveRow: false,
        }],
        dependencies: []
    }

	var event = new Date('2023-10-03 00:00:00');
	var event11 = new Date('2023-10-03 00:00:00');
	event11.setDate(event11.getDate() + 1);
	var event2 = new Date('2023-10-31 00:00:00');
	var event21 = new Date('2023-10-31 00:00:00');
     event21.setDate(event21.getDate() + 1);
	const holiday = [
		{
			id: 0,
			from: event.getTime(),
			to: event11.getTime(),
			classes: 'test-class',
            hoverTitle: 'testTitle'
		},
		{
			id: 1,
			from: event2.getTime(),
			to: event21.getTime(),
			classes: null
		},
	];

    let options = {
		dateAdapter: new MomentSvelteGanttDateAdapter(moment),
		from: currentStart,
		to: currentEnd,
		rows: data.rows,
		tasks: data.tasks,
		dependencies: [],
		timeRanges: holiday,
		reflectOnParentRows: false,
		reflectOnChildRows: false,
		highlightWeekends: true,
		highlightColor: 'rgba(255, 210, 99, 0.40)',
		highlightClass: 'weekend-class',
        highlightedDurations: {unit: 'day', fractions: [0,6]},
		zoomLevels: [],
		columnUnit: 'day',
		columnOffset: 1,
		magnetUnit: 'day',
		magnetOffset: 1,
		rowHeight: 30,
		rowPadding: 1,
		fitWidth: true,
		minWidth: 8000,
		tableWidth: 250,
		tableHeaders: [
            {
                title: "<span>asdfdsa</span>",
                property: "label",
                width: 140,
                type: "tree"
            }

		],
		headers: [{unit: "month", format: "MMM YYYY"},
			{unit: "week", format: "w"},
			{unit: "day", format: "dd"},
			{unit: "day", format: "DD"}],
		ganttTableModules: [SvelteGanttTable],
		ganttBodyModules: [SvelteGanttDependencies],
        minimumSpaceLeft: 250,
        minimumSpaceRight: 250,
        expandIconDown: '<i class="fas fa-angle-down"></i>',
        taskElementHook: (node, task) => {
            let popup;
            function onHover() {
                console.log('[task] hover', task);
                popup = createPopup(task, node);
            }

            function onLeave() {
                console.log('[task] hover', task);
                if(popup) {
                    popup.remove();
                }
            }

            node.addEventListener('mouseenter', onHover);
            node.addEventListener('mouseleave', onLeave);

            return {
                destroy() {
                    console.log('[task] destroy');
                    node.removeEventListener('mouseenter', onHover);
                    node.removeEventListener('mouseleave', onLeave);
                }
            }
        },
        // taskContent: (task) => `${task.label} ${task.from.format('HH:mm')}`
    }

    let gantt;
    onMount(() => {
        window.gantt = gantt = new SvelteGantt({ target: document.getElementById('example-gantt-events'), props: options });

        gantt.api.tasks.on.move((task) => console.log('Listener: task move', task));
        //gantt.api.tasks.on.switchRow((task, row, previousRow) => console.log('Listener: task switched row', task));
        gantt.api.tasks.on.select((task) => console.log('Listener: task selected', task));
        //gantt.api.tasks.on.moveEnd((task) => console.log('Listener: task move end', task));
        gantt.api.tasks.on.change(([data]) => console.log('Listener: task change', data));
        gantt.api.tasks.on.changed((task) => console.log('Listener: task changed', task));
        gantt.api.tasks.on.dblclicked((task) => console.log('Listener: task double clicked', task));
    });

    function createPopup(task, node) {
        const rect = node.getBoundingClientRect();
        const div = document.createElement('div');
        div.className = 'sg-popup';
        div.innerHTML = `
            <div class="sg-popup-title">${task.label}</div>
            <div class="sg-popup-item">
                <div class="sg-popup-item-label">From:</div>
                <div class="sg-popup-item-value">${new Date(task.from).toLocaleTimeString()}</div>
            </div>
            <div class="sg-popup-item">
                <div class="sg-popup-item-label">To:</div>
                <div class="sg-popup-item-value">${new Date(task.to).toLocaleTimeString()}</div>
            </div>
        `;
        div.style.position = 'absolute';
        div.style.top = `${rect.bottom}px`;
        div.style.left = `${rect.left + rect.width / 2}px`;
        document.body.appendChild(div);
        return div;
    }

    function onChangeOptions(event) {
        const opts = event.detail;
        Object.assign(options, opts);
        gantt.$set(options);
    }
</script>

<style>
    .sg-time-range.test-class {
        background-image: linear-gradient(-45deg, rgba(0, 0, 0, 0) 46%, #000000 49%, #000000 51%, rgba(0, 0, 0, 0) 55%);
    }
    .test-class .sg-time-range-handle-left {
        display: none;
    }
    .test-class .sg-time-range-handle-right {
        display: none;
    }
    #example-gantt-events {
        flex-grow: 1;
        overflow: auto;
    }

    .container {
        display: flex;
        overflow: auto;
        flex: 1;
    }

    #example-gantt-events :global(.sg-hover) {
        background-color: #00000008;
    }

    #example-gantt-events :global(.sg-hover .sg-table-body-cell) {
        background-color: #00000008;
    }
</style>

<div class="container">
    <div id="example-gantt-events"></div>
    <GanttOptions options={options} on:change={onChangeOptions}/>
</div>
