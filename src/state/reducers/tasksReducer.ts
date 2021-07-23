import { TaskActionType } from "../action-types"
import { TaskAction } from "../actions"

interface IState {
    id: number,
    tableID: number,
    task: string,
    completed: boolean
}

const initialState: IState[] = []

const reducer = (state = initialState, action: TaskAction) => {
    switch(action.type) {
        case TaskActionType.ADD_TASK:
            return [
                ...state,
                action.payload
            ]
        case TaskActionType.REMOVE_TASK:
            let filtered: object[] = state.filter(task => task.id !== action.payload )
            return [...filtered]

        case TaskActionType.GET_TASKS:
            return action.payload

        case TaskActionType.REMOVE_TASKS_WITH_TABLE:
            let filteredData: object[] = state.filter(task => task.tableID !== action.payload) 
            return [...filteredData]

        case TaskActionType.COMPLETED_TASK:
            let completedTask = state.find(t => t.id === action.payload)
            const index = state.findIndex(e => e.id === completedTask!.id)
            
            if(completedTask) {
                completedTask.completed = !completedTask.completed
            }

            let newState: Object[] = state.filter(task => task.id !== action.payload)
            newState.splice(index, 0, completedTask!)
            return newState
        default: 
            return state
    }
}

export default reducer