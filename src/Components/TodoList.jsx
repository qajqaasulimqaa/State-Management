import {useTodos} from '../Contex/TodoContex';

function TodoList() {
    const {state, dispatch} = useTodos();

    if(state.todos.length === 0){
        return <p>No todos yet!</p>
    }

    return(
        <ul>
            {state.todos.map(todo => (
                <li key={todo.id}>
                    <span
                    onClick={()=>dispatch({type: 'TOGGLE', id: todo.id})}
                    style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
                    >
                        {todo.text}
                    </span>
                    <button onClick={()=>dispatch({type: 'DELETE', id: todo.id})}>Delete</button>
                </li>
            ))}
        </ul>
    )
}
export default TodoList
