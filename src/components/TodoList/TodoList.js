import ts from "./TodoList.module.css";
import AddTodo from "./AddTodo/AddToDo";
import {useState} from "react";
import uuid from "react-uuid";
import { createContext} from "react";
import ReactSwitch from "react-switch";
export const ThemeContext = createContext(null);
function TodoList({done, setDone, title, todo, setTodo, items, priorities}) {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };
    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState('');


    // function saveTodoLocalStorage() {
    //     localStorage.setItem('todo', JSON.stringify(todo));
    // }
    // function saveDoneLocalStorage() {
    //     localStorage.setItem('done', JSON.stringify(done));
    // }


    function deleteToDo(id) {
        let newToDo = [...todo].filter(item => item.id !== id);
        setTodo(newToDo);

    }

    function moveTodo(id) {
        let newDone;
        todo.map(item => {
            if (item.id === id) {
                newDone = item;
            }
        })
        setDone(
            [...done, {
                id: uuid(),
                title: newDone.title,
                status: true,
                priority: newDone.priority,
                tag: newDone.tag
            }]);
        console.log(newDone);
        console.log(done);
        deleteToDo(id);
    }

    function editTodo(id, title) {
        setEdit(id);
        setValue(title);
        // saveTodoLocalStorage();
    }

    function saveTodo(id) {
        let newTodo = [...todo].map(item => {
            if (item.id === id) {
                item.title = value;
            }
            return item;
        })
        setTodo(newTodo);
        setEdit(null);
    }

    function handleKeyUp(e, id) {
        if (e.key === "Enter") {
            saveTodo(id)
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={ts.TodoList} id={theme}>
            <div className={ts.container}>
                <div className="switch">
                    <label> {theme === "light" ? "Light" : "Dark"}</label>
                    <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
                </div>
                <div className={ts.toDoListTitle}>
                    <h2>
                        {
                            title
                        }
                    </h2>
                </div>
                <div className={ts.toDoList}>
                    {
                        todo.filter(item => {
                            if (title === "All" || title === "all") {
                                return true;
                            } else {
                                if (item.tag !== null && item.tag.title === title) {
                                    return true;
                                }
                            }
                        })
                            .sort((a, b) => a.priority.id > b.priority.id ? 1 : -1)
                            .map(item => (
                                <div className={ts.toDoBlock} key={item.id}>
                                    <div className={ts.toDoBlockContent}>
                                        {
                                            edit === item.id ?
                                                <div className={ts.toDoBlockContentEditInput}>
                                                    <input onChange={(e) => setValue(e.target.value)}
                                                           onKeyUp={(e) => handleKeyUp(e, item.id)} value={value}/>
                                                </div>
                                                :
                                                <div className={ts.toDoBlockContentDone}>
                                                    <button type={"button"} role={"checkbox"}
                                                            style={{borderColor: item.priority.color}}
                                                            onClick={() => moveTodo(item.id)}>
                                                        <div className={ts.toDoBlockContentDoneIconDiv}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                 height="16"
                                                                 fill="currentColor" className="bi bi-check"
                                                                 viewBox="0 0 16 16"
                                                                 style={{color: item.priority.color}}>
                                                                <path
                                                                    d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                                            </svg>
                                                        </div>
                                                    </button>
                                                </div>
                                        }
                                        {
                                            edit === item.id ?
                                                <div className={ts.toDoBlockContentEditButton}>
                                                    {/*<button onClick={ () => saveTodo(item.id)} onKeyUp={ () => handleKeyUp()}>Сохранить</button>*/}
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                         fill="currentColor" className="bi bi-check-square"
                                                         viewBox="0 0 16 16" onClick={() => saveTodo(item.id)}
                                                         onKeyUp={() => handleKeyUp()}>
                                                        <path
                                                            d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                                        <path
                                                            d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
                                                    </svg>
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
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="13"
                                                                         height="13"
                                                                         fill="currentColor" className="bi bi-tag-fill"
                                                                         viewBox="0 0 16 16" color={item.tag.color}>
                                                                        <path
                                                                            d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                                                    </svg>

                                                                    <span
                                                                        style={{color: item.tag.color}}>{item.tag.title}</span>
                                                                </div>
                                                                :
                                                                <div className={ts.toDoBlockContentTag}>
                                                                </div>
                                                        }
                                                    </div>
                                                    {/*<button onClick={ () => {deleteToDo(item.id)}}>Удалить</button>*/}
                                                    <div className={ts.toDoBlockContentDelete}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                             fill="currentColor" className="bi bi-x-circle"
                                                             viewBox="0 0 16 16" onClick={() => deleteToDo(item.id)}>
                                                            <path
                                                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                            <path
                                                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                                        </svg>
                                                    </div>
                                                    <div className={ts.toDoBlockContentEdit}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                             fill="currentColor" className="bi bi-pencil-square"
                                                             viewBox="0 0 16 16" onClick={() => {
                                                            editTodo(item.id, item.title)
                                                        }}>
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
        </ThemeContext.Provider>
    )
}

export default TodoList;