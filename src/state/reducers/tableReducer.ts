import { TableActionType } from "../action-types"
import { TableAction } from "../actions"

interface IState {
    id: number,
    title: string
}

const initialState: IState[] = []

const TableReducer = (state = initialState, action: TableAction ) => {
    switch(action.type) {
        case TableActionType.ADD_TABLE:
            return [...state, action.payload]
        
        case TableActionType.REMOVE_TABLE:
            return state.filter(table => table.id !== action.payload)
        
            case TableActionType.GET_TABLES:
            return action.payload
        
        case TableActionType.CHANGE_NAME:
            let tableToChange = state.find(table => table.id === action.payload.id)
            let index = state.findIndex(table => table.id === tableToChange!.id)

            if(tableToChange) {
                tableToChange.title = action.payload.title
            }
            let newState: Object[] = state.filter(table => table.id !== tableToChange!.id)
            newState.splice(index, 0, tableToChange!)
            return newState
        default:
            return state
    }
}

export default TableReducer