import { combineReducers } from "redux";
import taskReducer from './tasksReducer'
import tableReducer from './tableReducer'

export const RootReducers = combineReducers({
    tasks: taskReducer,
    tables: tableReducer
})

export type RootState = ReturnType<typeof RootReducers>
