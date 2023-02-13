import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import MenuBar from "./components/Menu/MenuBar";
import TodoList from "./components/TodoList/TodoList";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "First todo",
      status: true,
    },
    {
      id: 2,
      title: "Second todo",
      status: true,
    },
    {
      id: 3,
      title: "Third todo",
      status: true,
    },
  ]);

  return (
    <div className="App">
      <Header/>
      <div className="AppBody">
        <MenuBar/>
        <TodoList todo={todo} setTodo={setTodo} />
      </div>
    </div>
  );
}

export default App;
