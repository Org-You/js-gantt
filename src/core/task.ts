import type { SvelteRow } from './row';
import type { ColumnService } from './column';
import {Readable} from "svelte/store";


export interface TaskModel {
    id: number; // | string;
    resourceId: number; // | string
    from: any; // date
    to: any; // date

    amountDone?: number;
    classes?: string | string[];
    label?: string;
    html?: string;
    showButton?: boolean;
    buttonClasses?: string | string[];
    buttonHtml?: string;
    enableDragging?: boolean;
    moveRow?: boolean; // false prevents moving to another row
    extendMultiRow?: boolean;
}

export interface SvelteTask {
    model: TaskModel;

    left: number;
    top: number;
    width: number;

    height: number;
    reflections?: string[];

    //Only for EntityType
    hidden?: boolean;
    y: number;
}

export class TaskFactory {
    columnService: ColumnService;

    rowPadding: number;
    rowEntities: {[key:number]: SvelteRow}

    constructor(columnService: ColumnService) {
		this.columnService = columnService;
    }

    createTask(model: TaskModel): SvelteTask {

        // id of task, every task needs to have a unique one
        //task.id = task.id || undefined;
        // completion %, indicated on task
        model.amountDone = model.amountDone || 0;
        // css classes
        model.classes = model.classes || '';
        // date task starts on
        model.from = model.from || null;
        // date task ends on
        model.to = model.to || null;
        // label of task
        model.label = model.label || undefined;
        // html content of task, will override label
        model.html = model.html || undefined;
        // show button bar
        model.showButton = model.showButton || false
        // button classes, useful for fontawesome icons
        model.buttonClasses = model.buttonClasses || ''
        // html content of button
        model.buttonHtml = model.buttonHtml || ''
        // enable dragging of task
        model.enableDragging = model.enableDragging === undefined ? true : model.enableDragging;
        model.moveRow = model.moveRow === undefined ? true : model.moveRow;
        model.extendMultiRow = model.extendMultiRow === undefined ? false : model.extendMultiRow;

        const left = this.columnService.getPositionByDate(model.from) | 0;
        const right = this.columnService.getPositionByDate(model.to) | 0;

        return {
            model,
            left: left,
            width: right-left,
            height: this.getHeight(model),
            top: this.getPosY(model),
            reflections: [],
            y: this.getPosY(model),
        }
    }

    createTasks(tasks: TaskModel[]) {
        return tasks.map(task => this.createTask(task));
    }


    updateTasks(tasks: Readable<SvelteTask[]>) {
        return tasks.map(task => this.updateTask(task));
    }
    updateTask(task: SvelteTask) {
        task.height = this.getHeight(task.model);
        task.top = this.getPosY(task.model);
        return task;
    }

    row(resourceId): SvelteRow{
        return this.rowEntities[resourceId];
    }

    childRowCount(resourceId) {
        let childCount = 0;
        let row = this.row(resourceId);
        childCount += this.rowCount(row);
        return childCount;
    }
    rowCount(row) {
        let childCount = 0;
        let children = row.children;

        if (children && children.length > 0) {
            childCount += children.length;

            for (let i = 0; i < children.length; i++) {
                let row = children[i];
                childCount += this.rowCount(row);
            }
        }

        return childCount;
    }

    getHeight(model){
        let row = this.row(model.resourceId);
        if (model.extendMultiRow && row.expanded) {
            return (row.height * (this.childRowCount(model.resourceId) + 1)) - (2 * this.rowPadding);
        } else {
            return row.height - 2 * this.rowPadding;
        }
    }

    getPosY(model){
        return this.row(model.resourceId).y + this.rowPadding;
    }
}

function overlap(one: SvelteTask, other: SvelteTask){
    return !(one.left + one.width <= other.left || one.left >= other.left + other.width);
}

export function reflectTask(task: SvelteTask, row: SvelteRow, options: { rowPadding: number }) {
    const reflectedId = `reflected-task-${task.model.id}-${row.model.id}`;

    const model = {
        ...task.model,
        resourceId: row.model.id,
        id: reflectedId,
        enableDragging: false
    };

    return {
        ...task,
        model,
        top: row.y + options.rowPadding,
        reflected: true,
        reflectedOnParent: false,
        reflectedOnChild: true,
        originalId: task.model.id
    };
}
