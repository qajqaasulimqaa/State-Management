import { useState } from 'react'
import { useTodos } from '../Contex/TodoContex'

export default function AddToDo() {
    const [text, setText] = useState(""); 
    const {dispatch} = useTodos(); 

    function handleAdd(){
        //Ignore empty input
        if(!text.trim()) return;
        dispatch({type: 'ADD', text});
        setText("");
    }
    return(
        <div>
            <input  value={text} onChange={e => setText(e.target.value)} placeholder="Add a new todo"/>
            <button onClick={handleAdd}>Add</button>
        </div>
    )   
}
