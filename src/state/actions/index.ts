import { TableActionType, TaskActionType } from "../action-types";

interface getTasks {
    type: TaskActionType.GET_TASKS,
    payload: object[]
}

interface addTaskAction {
    type: TaskActionType.ADD_TASK,
    payload: object
}

interface removeTaskAction {
    type: TaskActionType.REMOVE_TASK,
    payload: number
}

interface removeTasksWithTable {
    type: TaskActionType.REMOVE_TASKS_WITH_TABLE,
    payload: number
}

interface completedTask {
    type: TaskActionType.COMPLETED_TASK,
    payload: number
}

interface uncompleteTask {
    type: TaskActionType.UNCOMPLETE_TASK,
    payload: boolean
}

// tables
interface getTables {
    type: TableActionType.GET_TABLES,
    payload: object[]
}

interface addTableAction {
    type: TableActionType.ADD_TABLE,
    payload: object
}

interface removeTableAction {
    type: TableActionType.REMOVE_TABLE,
    payload: number
}

interface changeTableName {
    type: TableActionType.CHANGE_NAME,
    payload: { id: number, title: string}
}


export type TableAction = addTableAction | removeTableAction | getTables | changeTableName
export type TaskAction = addTaskAction | removeTaskAction | getTasks | removeTasksWithTable | completedTask