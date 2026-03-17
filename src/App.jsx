import  { TodoProvider } from './Contex/TodoContex'
import  AddToDo from './Components/AddToDo'
import TodoList from './Components/TodoList'


function App(){
  return (
    <TodoProvider>
      <h1>To do list</h1>
      <AddToDo />
      <TodoList />
    </TodoProvider>
  )
}
export default App