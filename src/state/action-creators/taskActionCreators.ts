import {Dispatch} from 'redux'
import { TaskActionType } from '../action-types'

export const getTasks = () => {
    return (dispatch: Dispatch) => {
        const serializedData = localStorage.getItem('tasks')
        if(serializedData) {
            let data = JSON.parse(serializedData)
            dispatch({
                type: TaskActionType.GET_TASKS,
                payload: data
            })
        } else {
            return undefined
        }
    }
}


export const addTask = (task: object) => {
    return (dispatch: Dispatch) => {
        const serializedData = localStorage.getItem('tasks')
        if(!serializedData) {
            localStorage.setItem('tasks', JSON.stringify([task]))
        } else {
            let data = JSON.parse(serializedData)
            data = [...data, task]
            localStorage.setItem('tasks', JSON.stringify(data))
        }
        dispatch({
            type: TaskActionType.ADD_TASK,
            payload: task
        })
    }
}
export const removeTask = (id: number) => {
    const serializedData = localStorage.getItem('tasks')
    if(serializedData) {
        let data = JSON.parse(serializedData)
        data = data.filter((task: {id: number}) => task.id !== id)
        localStorage.setItem('tasks', JSON.stringify(data))
    } else {
        return undefined
    }
    return (dispatch: Dispatch) => {
        dispatch({
            type: TaskActionType.REMOVE_TASK,
            payload: id
        })
    }
}


export const taskCompleted = (id: number) => {
    const serializedData = localStorage.getItem('tasks')
    if(serializedData) {
        const data = JSON.parse(serializedData)
        let task = data.filter((task: {id: number}) => task.id === id)
        task[0].completed = !task[0].completed
        const index = data.indexOf(task)
        data.splice(index, 0, task)
        localStorage.setItem('tasks', JSON.stringify(data))
    }

    return (dispatch: Dispatch) => {
        dispatch({
            type: TaskActionType.COMPLETED_TASK,
            payload: id
        })
    }
}