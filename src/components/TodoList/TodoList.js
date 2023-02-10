import ts from "./TodoList.module.css";
import AddTodo from "./AddTodo/AddToDo";

function TodoList({ todo, setTodo }) {

    function deleteToDo(id) {
        let newToDo = [...todo].filter(item => item.id != id);
        setTodo(newToDo);
    }
    return (
        <div className={ts.TodoList}>
            <div className={ts.container}>
                <div className={ts.toDoList}>
                    {
                        todo.map(item => (
                            <div key={item.id}>
                                <div>{item.title}</div>
                                <button onClick={ () => {deleteToDo(item.id)}}>Удалить</button>
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