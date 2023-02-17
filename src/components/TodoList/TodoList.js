import ts from "./TodoList.module.css";
import AddTodo from "./AddTodo/AddToDo";
import {useState} from "react";

function TodoList({ todo, setTodo , items, priorities}) {

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

    function handleKeyUp(e, id) {
        if (e.key === "Enter"){
            saveTodo(id)
        }
    }

    return (
        <div className={ts.TodoList}>
            <div className={ts.container}>
                <div className={ts.toDoList}>
                    {
                        todo.map(item => (
                            <div className={ts.toDoBlock} key={item.id}>
                                <div className={ts.toDoBlockContent}>
                                {
                                    edit === item.id ?
                                        <div className={ts.toDoBlockContentEditInput}>
                                            <input onChange={ (e) => setValue(e.target.value)} onKeyUp={(e)=>handleKeyUp(e, item.id)} value={value}/>
                                        </div>
                                        :
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                 fill="currentColor" className="bi bi-app" viewBox="0 0 16 16" onClick={ () => deleteToDo(item.id)} color={item.priority.color}>
                                                <path
                                                    d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"/>
                                            </svg>
                                        </div>
                                }
                                {
                                    edit === item.id ?
                                        <div className={ts.toDoBlockContentEditButton}>
                                            <button onClick={ () => saveTodo(item.id)} onKeyUp={ () => handleKeyUp()}>Сохранить</button>
                                        </div>
                                        :
                                        <div>
                                            <div className={ts.toDoBlockContentTitleAndTag}>
                                                <div className={ts.toDoBlockContentTitle}>
                                                    {item.title}
                                                </div>
                                                {
                                                    item.tag !== null ?
                                                    <div className={ts.toDoBlockContentTag}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                                             fill="currentColor" className="bi bi-tag-fill"
                                                             viewBox="0 0 16 16" color={item.tag.color}>
                                                            <path
                                                                d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                                        </svg>

                                                        <span style={{color: item.tag.color}}>{item.tag.title}</span>
                                                    </div>
                                                        :
                                                        <div className={ts.toDoBlockContentTag}>
                                                        </div>
                                                }
                                            </div>
                                            {/*<button onClick={ () => {deleteToDo(item.id)}}>Удалить</button>*/}
                                            <div className={ts.toDoBlockContentEdit}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                     fill="currentColor" className="bi bi-pencil-square"
                                                     viewBox="0 0 16 16" onClick={ () => {editTodo(item.id, item.title)}}>
                                                    <path
                                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                    <path fill-rule="evenodd"
                                                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                                </svg>
                                            </div>
                                            {/*<button onClick={ () => {editTodo(item.id, item.title)}}>Edit</button>*/}
                                        </div>
                                }
                                </div>
                                <hr/>
                            </div>
                        ))
                    }

                </div>
                <div className={ts.AddTodo}>
                    <AddTodo todo={todo} setTodo={setTodo} items={items} priorities={priorities}/>
                </div>
            </div>
        </div>
    )
}

export default TodoList;