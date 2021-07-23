import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ITasks } from '../../App'
import { taskActionCreators } from '../../state'
import { Container, Marker, TaskText } from './TaskStyles'
import trash from '../../icons/delete'

interface IProps {
    data: ITasks,
    remove: (id: number) => void 
}

const Task: React.FC<IProps> = ({ data, remove }) => {

    const dispatch = useDispatch()
    const { taskCompleted } = bindActionCreators(taskActionCreators, dispatch)

    return (
        <Container>
            <Marker completed={data.completed} onClick={() => taskCompleted(data.id)} />
            <TaskText completed={data.completed}>{ data.task }</TaskText>
            <span className="delete" onClick={() => remove(data.id)}>{trash}</span>
        </Container>
    )
}

export default Task
