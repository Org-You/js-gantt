<script>
    import { SvelteGantt, SvelteGanttDependencies, SvelteGanttExternal, SvelteGanttTable, MomentSvelteGanttDateAdapter } from 'svelte-gantt';
    import { onMount, getContext } from 'svelte';
    import { time } from '../utils';
    import moment from 'moment';
    import GanttOptions from '../components/GanttOptions.svelte';

    const currentStart = time('06:00');
    const currentEnd = time('18:00');

    const colors = ['blue', 'green', 'orange']

    let options2 = getContext('options');

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
            headerHtml: 'Ida <button data-add-row="3"><i class="fas fa-calculator"></i></button>'
        }, {
            id: 4,
            label: "Lauréna Shrigley"
        }, {
            id: 5,
            label: "Ange Kembry"
        }],
        tasks: [{
            id: 3,
            resourceId: 1,
            label: "PET-CT",
            from: time("13:30"),
            to: time("15:00"),
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
            "extendMultiRow": true
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

    let options = {
        dateAdapter: new MomentSvelteGanttDateAdapter(moment),
        rows: data.rows,
        tasks: data.tasks,
        dependencies: data.dependencies,
        timeRanges: [],
        columnOffset: 15,
        magnetOffset: 15,
        rowHeight: 52,
        rowPadding: 6,
        headers: [{ unit: 'day', format: 'MMMM Do' }, { unit: 'hour', format: 'H:mm' }],
        fitWidth: true,
        minWidth: 800,
        from: currentStart,
        to: currentEnd,
        tableHeaders: [{ title: 'Label', property: 'label', width: 140, type: 'tree' }],
        tableWidth: 240,
        ganttTableModules: [SvelteGanttTable],
        ganttBodyModules: [SvelteGanttDependencies],

        rowHeadElementHook: (node, row) => {
            function onClick(event) {
                let eventTarget = event.target;
                let addAttr = eventTarget.getAttribute('data-add-row');
                let deleteAttr = eventTarget.getAttribute('data-delete-row');
                let changeAttr = eventTarget.getAttribute('data-row-change-order');

                console.log('clicked Head on: ', node, row, eventTarget, addAttr, deleteAttr, changeAttr);

                if (addAttr && typeof addAttr !== 'undefined' && addAttr !== false) {
                    // Fügt Zeile hinzu, auch in der Datenbank und öffnet Popup zum ändern
                    console.log('OY - add Row');
                    event.stopPropagation();
                    let after = eventTarget.getAttribute('data-add-row');
                    const id = 5000 + Math.floor(Math.random() * 1000);

                    let newModel = {
                        id: `temp${id}`,
                        tempId: `temp${id}`,
                        subjectId: null,
                        label: `Task #${id}`,
                        headerHtml: `<span data-row-change-order="temp${id}">temp${id}</span>`
                    }

                    const promise1 = new Promise((resolve, reject) => {
                        gantt.insertChildRow(newModel, after, after);
                        resolve('Success!');
                    });

                    promise1.then(res => {
                        let getRow = gantt.getRow(`temp${id}`);

                        gantt.updateRow(getRow.model)
                    });

                } else if (deleteAttr && typeof deleteAttr !== 'undefined' && deleteAttr !== false) {

                    // Löscht Zeile, auch in der Datenbank
                    console.log('OY - delete Row');
                    let rowId = eventTarget.getAttribute('data-delete-row');
                    gantt.deleteRow(rowId);
                } else if (changeAttr && typeof changeAttr !== 'undefined' && changeAttr !== false) {

                    let getRow = gantt.getRow(changeAttr);
                    console.log('OY - change Row', row, getRow);
                }
            }

            node.addEventListener('click', onClick);

            return {
                destroy() {
                    node.removeEventListener('click', onClick);
                }
            }
        }
    }

    let gantt;
    onMount(() => {
        window.gantt = gantt = new SvelteGantt({ target: document.getElementById('example-gantt'), props: options });
        const external = new SvelteGanttExternal(document.getElementById('new-task'), {
            gantt,
            onsuccess: (row, date, gantt) => {
                console.log(row.model.id, new Date(date).toISOString())
                const id = 5000 + Math.floor(Math.random() * 1000);
                gantt.updateTask({
                    id,
                    label: `Task #${id}`,
                    from: date,
                    to: date + 3 * 60 * 60 * 1000,
                    classes: colors[(Math.random() * colors.length) | 0],
                    resourceId: row.model.id
                });
            },
            elementContent: () => {
                const element = document.createElement('div');
                element.innerHTML = 'New Task';
                element.className = 'sg-external-indicator';
                return element;
            }
        });
        const newBtn = document.getElementById('new-row');
        newBtn.addEventListener("click", function() {
            const id = 5000 + Math.floor(Math.random() * 1000);
            let newModel = {
                id: id,
                label: `Task #${id}`,
                headerHtml: '<input type="text">',
                // contentHtml: '<input type="text">'
            }
//            gantt.insertRow(newModel, 4);
            gantt.appendChildRow(newModel, 4);
            // gantt.insertChildRow(newModel, 4, 4);
        });

		// gantt.api.registerEvent('click', 'button[data-add-row]')
        // const addButton = document.querySelectorAll('button[data-add-row]');
        // addButton.forEach(button => {
        //     button.addEventListener("click", function() {
        //         let after = this.getAttribute('data-add-row');
        //         const id = 5000 + Math.floor(Math.random() * 1000);
        //         let newModel = {
        //             id: `temp${id}`,
        //             label: `Task #${id}`,
        //             //headerHtml: `<button class="btn" data-delete-row="temp${id}"><i class="bi bi-trash"></i></button>`,
        //         }
        //         console.log('click', this, newModel, parseInt(after));
        //
        //         gantt.insertChildRow(newModel, after, after);
        //
        //         // promise1.then(res => {
        //         //     addDeleteFunction();
        //         // });
        //
        //     });
        // });

        gantt.api.rows.on.dblclicked(function (row) {
            console.log('Listener: row dblclicked', row);
        });

        function addDeleteFunction() {
            const deleteButton = document.querySelectorAll('button[data-delete-row]');
            console.log(deleteButton);
            deleteButton.forEach(button => {
                console.log('button', button);
                 button.removeEventListener("click", deleteRow);
                button.addEventListener("click", deleteRow);
            });
        }
        function deleteRow() {
                let rowId = this.getAttribute('data-delete-row');

                console.log('delete', rowId);
                gantt.deleteRow(rowId);

        }



        // const externalRow = new SvelteGanttExternal(document.getElementById('new-row'), {
        //     gantt,
        //     onsuccess: (row, date, gantt) => {
        //         console.log(row.model.id, new Date(date).toISOString())
        //         // const id = 5000 + Math.floor(Math.random() * 1000);
        //         // gantt.updateTask({
        //         //     id,
        //         //     label: `Task #${id}`,
        //         //     from: date,
        //         //     to: date + 3 * 60 * 60 * 1000,
        //         //     classes: colors[(Math.random() * colors.length) | 0],
        //         //     resourceId: row.model.id
        //         // });
        //     },
        //     elementContent: () => {
        //         // const element = document.createElement('div');
        //         // element.innerHTML = 'New Task';
        //         // element.className = 'sg-external-indicator';
        //         // return element;
        //     }
        // });
    });

    function onChangeOptions(event) {
        const opts = event.detail;
        Object.assign(options, opts);
        gantt.$set(options);
    }
</script>

<style>
    #example-gantt {
        flex-grow: 1;
        overflow: auto;
    }

    .container {
        display: flex;
        overflow: auto;
        flex: 1;
    }

    #new-task {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 1;
        background-color: #ee6e73;
        color: white;
        padding: 1rem;
        margin: 0.5rem;
        cursor: grab;
    }
    #new-row {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 1;
        background-color: #ee6e73;
        color: white;
        padding: 1rem;
        margin: 0.5rem;
        margin-right: 10rem;
        cursor: grab;
    }
</style>

<div class="container">
    <div id="example-gantt"></div>
    <div id="new-task">Drag to gantt</div>
    <div id="new-row">Add Row</div>
    <GanttOptions options={options} on:change={onChangeOptions}/>
</div>
