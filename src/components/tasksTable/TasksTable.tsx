import React, { useState, useEffect } from 'react'
import { taskActionCreators } from '../../state'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ITasks } from '../../App'
import Task from '../task/Task'
import { Container, Header, Input, HeaderInput, TaskWrap } from './TasksTableStyles'
import edit from '../../icons/edit'
import trash from '../../icons/delete'

interface IProps {
    tableID: number,
    tasks: ITasks[],
    title: string,
    remove: (id: number) => void,
    changeName: (id: number, title: string) => void
}


const TasksTable: React.FC<IProps> = ({ tableID, tasks, title, remove, changeName }) => {
    // redux
    const dispatch = useDispatch()
    const { addTask, removeTask } = bindActionCreators(taskActionCreators, dispatch)

    // state 
    const [tableTasks, setTableTasks] = useState<ITasks[]>()
    const [taskName, setTaskName] = useState<string>('') 
    const [tableName, setTableName] = useState<string>('') 
    const [editing, setEditing] = useState<boolean>(false)
    
    useEffect(() => {
        setTableName(title)
    },[title])
    
    useEffect(() => {
        const filtered = tasks.filter(t => t.tableID === tableID)
        setTableTasks(filtered)
    }, [tasks, tableID])

    const handleAddTask = (e: React.FormEvent): void => {
        e.preventDefault()
        
        //dispatch
        if(taskName !== '') {
            addTask({
                id: Math.round(Math.random() * 10000000000000),
                tableID: tableID,
                task: taskName,
                completed: false
            })
        }
        setTaskName('')
    }
    const handleChangeTableTitle = (e: React.FormEvent): void => {
        e.preventDefault()
        changeName(tableID, tableName)
        setEditing(false)
    }


    const renderTasks = (): JSX.Element[] | undefined => {
        return tableTasks && tableTasks.map((t, i) => <Task key={i} data={t} remove={(id:number) => removeTask(id)}/>)
    }

    const renderTitleEdit = (): JSX.Element => {
        return editing ? 
            <form onSubmit={e => handleChangeTableTitle(e)}>
                <HeaderInput placeholder="New title" value={tableName} onChange={e => setTableName(e.target.value)} />
            </form>
            : 
            <h1>{ title }</h1>
    }   

    return (
        <Container>
            <Header>
                    { renderTitleEdit() }
                    <div>
                        <span onClick={() => setEditing(!editing)}>{ edit }</span> <span onClick={() => remove(tableID)}>{ trash }</span>
                    </div>
                <form onSubmit={e => handleAddTask(e)}>
                    <Input type="text" placeholder="Add task" value={taskName} onChange={e => setTaskName(e.target.value) }/>
                </form>
            </Header>


            <TaskWrap>
                { renderTasks() }
            </TaskWrap>
        </Container>
    )
}

export default TasksTable
