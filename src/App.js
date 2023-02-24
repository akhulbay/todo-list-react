import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import MenuBar from "./components/Menu/MenuBar";
import TodoList from "./components/TodoList/TodoList";
import {useEffect, useState} from "react";
import DoneList from "./components/DoneList/DoneList";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";

function App() {

    const priorities = [
        {
            id: 1,
            title: "Priority 1",
            color: "#DC143C",
        },
        {
            id: 2,
            title: "Priority 2",
            color: "#FFD700",
        },
        {
            id: 3,
            title: "Priority 3",
            color: "#00008B",
        },
        {
            id: 4,
            title: "Priority 4",
            color: "#f5eded",
        },
    ];
    const [items, setItems] = useState([
        {
            id: 0,
            title: "work",
            color: "blue",
        },
        {
            id: 1,
            title: "home",
            color: "aqua",
        },
        {
            id: 2,
            title: "personal",
            color: "orange",
        },
        {
            id: 3,
            title: "payment",
            color: "red",
        },
    ]);

    const [title, setTitle] = useState("All");

    const [todo, setTodo] = useState(
        JSON.parse(localStorage.getItem('todo')) || [
        {
            id: 1,
            title: "First todo",
            status: true,
            priority: priorities.at(3),
            tag: null,
        },
        {
            id: 2,
            title: "Second todo",
            status: true,
            priority: priorities.at(3),
            tag: null,
        },
        {
            id: 3,
            title: "Third todo",
            status: true,
            priority: priorities.at(3),
            tag: null,
        },
    ]);

    const [done, setDone] = useState(
        JSON.parse(localStorage.getItem('done')) || [
        {
            id: 1,
            title: "First done",
            status: true,
            priority: priorities.at(3),
            tag: items.at(1),
        },
    ]);

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo))
    }, [todo]);
    useEffect(() => {
        localStorage.setItem('done', JSON.stringify(done))
    }, [done]);

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>

                <div className="AppBody">
                    <MenuBar items={items} setItems={setItems} setTitle={setTitle}/>
                    <Routes>
                            <Route path={""} element={<TodoList
                                done={done}
                                setDone={setDone}
                                title={title}
                                todo={todo}
                                setTodo={setTodo}
                                items={items}
                                priorities={priorities}
                                className="ToDoList"
                            />}/>
                            <Route path={"/done"} element={ <DoneList done={done} setDone={setDone}></DoneList>}/>
                        </Routes>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
