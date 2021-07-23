import { Dispatch } from "redux";
import { TableActionType, TaskActionType } from "../action-types";


export const getTables = () => {
    return (dispatch: Dispatch) => {
        let checkTables = localStorage.getItem('tables')
        if(checkTables) {
            let tables = JSON.parse(checkTables)
            dispatch({
                type: TableActionType.GET_TABLES,
                payload: tables
            })
        } else {
            return undefined
        }
    }
}
export const addTable = (table: object) => {
    return (dispatch: Dispatch) => {
        const tables = localStorage.getItem('tables')
        if(!tables) {
            localStorage.setItem('tables', JSON.stringify([table]))
        } else {
            let parsedTables = JSON.parse(tables)
            parsedTables = [...parsedTables, table]
            localStorage.setItem('tables', JSON.stringify(parsedTables))
        }
        dispatch({
            type: TableActionType.ADD_TABLE,
            payload: table
        })
    }
}

export const removeTable = (id: number) => {
    return (dispatch: Dispatch) => {
        const serializedData = localStorage.getItem('tables')
        if(serializedData) {
           let data: {id: number, title: string}[] = JSON.parse(serializedData)
           data = data.filter(table => table.id !== id)
           localStorage.setItem('tables', JSON.stringify(data))
        } else {
            return undefined
        }

        const serializedTasksData = localStorage.getItem('tasks')
        if(serializedTasksData) {
            let data: { tableID: number}[] = JSON.parse(serializedTasksData)
            data = data.filter(task => task.tableID !== id)
            localStorage.setItem('tasks', JSON.stringify(data))
        } else {
            return undefined
        }
        dispatch({
            type: TableActionType.REMOVE_TABLE,
            payload: id
        })
        dispatch({
            type: TaskActionType.REMOVE_TASKS_WITH_TABLE,
            payload: id
        })
    }
}

export const changeTableName = (id: number, title: string) => {
    return (dispatch: Dispatch) => {
    const serializedData = localStorage.getItem('tables')
    if(serializedData) {
       let tables: {id: number, title: string}[] = JSON.parse(serializedData)
       let table = tables.find(t => t.id === id)
        if(table) {
            table.title = title
            console.log(table)
            tables.filter(t => t.id === id && table)
            console.log(tables)
            localStorage.setItem('tables', JSON.stringify(tables))
        }
    }
        dispatch({
            type: TableActionType.CHANGE_NAME,
            payload: { id, title }
        })
    }
} 