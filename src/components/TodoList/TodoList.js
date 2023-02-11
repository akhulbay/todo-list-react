import ts from "./TodoList.module.css";
import AddTodo from "./AddTodo/AddToDo";
import {useState} from "react";

function TodoList({ todo, setTodo }) {

    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState('')

    function deleteToDo(id) {
        let newToDo = [...todo].filter(item => item.id != id);
        setTodo(newToDo);
    }

    function editTodo(id, title) {
        setEdit(id);
        setValue(title);
    }

    function saveTodo(id) {
        let newTodo = [...todo].map(item => {
            if (item.id == id) {
                item.title = value;
            }
            return item ;
        })
        setTodo(newTodo);
        setEdit(null);
    }

    function handleKeyUp(e) {
        if (e.key === "Enter"){

        }
    }

    return (
        <div className={ts.TodoList}>
            <div className={ts.container}>
                <div className={ts.toDoList}>
                    {
                        todo.map(item => (
                            <div key={item.id}>
                                {
                                    edit === item.id ?
                                        <div>
                                            <input onChange={ (e) => setValue(e.target.value)} onKeyUp={(e)=>handleKeyUp(e)} value={value}/>
                                        </div>
                                        :
                                        <div>
                                            {item.title}
                                        </div>
                                }
                                {
                                    edit === item.id ?
                                        <div>
                                            <button onClick={ () => saveTodo(item.id)}>Сохранить</button>
                                        </div>
                                        :
                                        <div>
                                            <button onClick={ () => {deleteToDo(item.id)}}>Удалить</button>
                                            <button onClick={ () => {editTodo(item.id, item.title)}}>Edit</button>
                                        </div>
                                }
                            </div>
                        ))
                    }
                </div>
                <AddTodo todo={todo} setTodo={setTodo}/>
            </div>
        </div>
    )
}

export default TodoList;