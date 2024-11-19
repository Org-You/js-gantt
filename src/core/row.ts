export interface RowModel {
    id: number | string;
    label: string;
    classes?: string | string[];
    contentHtml?: string;
    enableDragging?: boolean;
    canAddMilestone?: boolean;
    height: number;
    /** Child rows in expandable tree */
    children?: RowModel[];
    /** Content of row header, html string */
    headerHtml?: string;
    /** Class of icon in row header */
    iconClass?: string;
    /** Url of image in row header */
    imageSrc?: string;
    expanded?: boolean;
    expanderRight?:boolean;
    extraHeaderHtml?: string;
    enableMoveRow?:boolean;
    moveRowIconClass: string;
    visibleReflactions?: boolean;
}

export interface SvelteRow {
    model: RowModel;

    y: number;
    height: number;
    hidden?: boolean;
    children?: SvelteRow[];
    allChildren?: SvelteRow[];
    parent?: SvelteRow;
    allParents?: SvelteRow[];
    expanded?: boolean;
    expanderRight?: boolean;
    childLevel?: number;
    entities?: any;
    extraHeaderHtml?: string;
    enableMoveRow?:boolean;
    moveRowIconClass: string;
}

export class RowFactory {
    rowHeight: number;

    constructor() {}

    createRow(row: RowModel, y: number): SvelteRow {
        // defaults
        // id of task, every task needs to have a unique one
        //row.id = row.id || undefined;
        // css classes
        row.classes = row.classes || '';
        // html content of row
        row.contentHtml = row.contentHtml || undefined;
        // enable dragging of tasks to and from this row
        row.enableDragging = row.enableDragging === undefined ? true : row.enableDragging;
        row.canAddMilestone = row.canAddMilestone === undefined ? true : row.canAddMilestone;
        row.expanded = row.expanded === undefined ? true : row.expanded;

        row.enableMoveRow = row.enableMoveRow === undefined ? false : row.enableMoveRow;
        row.moveRowIconClass = row.moveRowIconClass === undefined ? 'fa fa-ellipsis-v' : row.moveRowIconClass;
        row.visibleReflactions = row.visibleReflactions === undefined ? true : row.visibleReflactions;
        // height of row element
        const height = row.height || this.rowHeight;

        return {
            model: row,
            y,
            height,
            expanded: true,
            expanderRight: row.expanderRight === undefined ? false : row.expanderRight,
            extraHeaderHtml: row.extraHeaderHtml,
            moveRowIconClass: row.moveRowIconClass
        };
    }

    createRows(rows: RowModel[]) {
        const ctx = { y: 0, result: [] };
        this.createChildRows(rows, ctx);
        return ctx.result;
    }

    createChildRows(
        rowModels: RowModel[],
        ctx: { y: number; result: SvelteRow[] },
        parent: SvelteRow = null,
        level: number = 0,
        parents: SvelteRow[] = []
    ) {
        const rowsAtLevel = [];
        const allRows = [];

        if (parent) {
            parents = [...parents, parent];
        }

        rowModels.forEach(rowModel => {
            const row = this.createRow(rowModel, ctx.y);
            ctx.result.push(row);
            rowsAtLevel.push(row);
            allRows.push(row);

            row.childLevel = level;
            row.parent = parent;
            row.allParents = parents;
            if (parent) {
                row.hidden = !(parent.model.expanded || parent.model.expanded == null);
            }

            ctx.y += row.height;

            if (rowModel.children) {
                const nextLevel = this.createChildRows(
                    rowModel.children,
                    ctx,
                    row,
                    level + 1,
                    parents,
                );
                row.children = nextLevel.rows;
                row.allChildren = nextLevel.allRows;
                allRows.push(...nextLevel.allRows);
            }
        });
        return {
            rows: rowsAtLevel,
            allRows
        };
    }

    updateRows(rows:SvelteRow[]) {
        const ctx = { y: 0, result: [] };
        this.updateChildRows(rows, ctx);
        return ctx.result;
    }
    updateChildRows(rowModels: SvelteRow[], ctx: { y: number, result: SvelteRow[] }, parent: SvelteRow = null, level: number = 0, parents: SvelteRow[] = []) {
        const rowsAtLevel = [];
        const allRows = [];

        if(parent) {
            parents = [...parents, parent];
        }

        rowModels.forEach(rowModel => {
            rowModel.y = ctx.y;
            ctx.result.push(rowModel);
            rowsAtLevel.push(rowModel);
            allRows.push(rowModel);

            rowModel.childLevel = level;
            rowModel.parent = parent;
            rowModel.allParents = parents;

            ctx.y += rowModel.height;

            if(rowModel.children) {
                const nextLevel = this.updateChildRows(rowModel.children, ctx, rowModel, level+1, parents);
                rowModel.children = nextLevel.rows;
                rowModel.allChildren = nextLevel.allRows;
                allRows.push(...nextLevel.allRows);
            }
        });
        return {
            rows: rowsAtLevel,
            allRows
        };
    }
}
