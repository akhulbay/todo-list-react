import as from "./AddTodo.module.css";
import {useState} from "react";
import * as uuid from "uuid";

function AddTodo({todo, setTodo}) {

    const [value, setValue] = useState('');

    function handleKeyUp(e) {
        if (e.key === "Enter") saveTodo();
    }

    function saveTodo() {
        setTodo(
            [...todo, {
                id: uuid.v4,
                title: value,
                status: true
            }]
        )
        setValue('');
    }

    return (
        <div className={as.AddTodo}>
            <div className={as.container}>
                <input placeholder={"Enter task"} value={value} onChange={ (e) => setValue(e.target.value)} onKeyUp={(e)=>handleKeyUp(e)}/>
                <button onClick={saveTodo}>Add</button>
            </div>
        </div>
    )
}

export default AddTodo;