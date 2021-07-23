import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RootState } from './state/reducers';
import { tableActionCreators, taskActionCreators } from './state';
import TasksTable from './components/tasksTable/TasksTable'
import { Container, TableWrap } from './AppStyles'

interface ITables {
  id: number,
  title: string
}

export interface ITasks {
  id: number,
  tableID : number,
  task: string,
  completed: boolean
}

const App: React.FC = () => {
  //redux
  const tables: ITables[] = useSelector((state: RootState) => state.tables)
  const tasks: ITasks[] = useSelector((state: RootState) => state.tasks)
  const dispatch = useDispatch()
  const { getTables, addTable, removeTable, changeTableName } = bindActionCreators(tableActionCreators, dispatch)
  const { getTasks } = bindActionCreators(taskActionCreators, dispatch)
  //state
  const [tableName, setTableName] = useState<string>('')

  useEffect(() => {
    getTables()
    getTasks()
  },[])
 
  const handleAddTable = (e: React.FormEvent) : void => {
    e.preventDefault()
    addTable({
      id: Math.floor(Math.random() * 1000000000000),
      title: tableName
    })
    setTableName('')
  }

  const handleRemoveTable = (id: number): void => {
    let con = window.confirm('Do you really want to remove this list?')
    if(con) {
      removeTable(id)
    }
  }

  const renderTables = (): JSX.Element[] | undefined => {
    return tables && tables.map((table, i) => <TasksTable key={i} changeName={(id: number, title:string) => changeTableName(id, title)} remove={(id: number) => handleRemoveTable(id)} tableID={table.id} title={table.title} tasks={tasks}/>)
  }

  return (
    <Container>
      <form className="addTable" onSubmit={e => handleAddTable(e)}>
        <input type="text" placeholder="New table name" value={tableName} onChange={e => setTableName(e.target.value)} />
      </form>
      <TableWrap>
        { renderTables() }
      </TableWrap>
    </Container>
  );
}

export default App;
