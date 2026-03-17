import { createContext, useContext, useReducer } from 'react'


//REDUCER-holding the state and the logic to update the state

const initialState = { todos: []}

export default function todoReducer(state, action){
    switch(action.type){
        case 'ADD':
            return{
                todos : [...state.todos, {id: Date.now(), text: action.text, done: false}]
            }
          case 'TOGGLE':
  return {
    todos: state.todos.map(todo =>
      todo.id === action.id ? { ...todo, done: !todo.done } : todo
    )   }
     case 'DELETE':
      return {
        todos: state.todos.filter(t => t.id !== action.id)
      }
    default:
      return state
  }
    }
    //PROVIDER 

    // 1. Create the context
export const TodoContext = createContext()

// 2. Create the Provider
export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  )
}

// 3. Custom hook - this is useTodos!
export function useTodos() {
  return useContext(TodoContext)
}