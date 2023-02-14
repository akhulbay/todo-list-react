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

  const items = [
    {
      id: 0,
      title: "All",
    },
    {
      id: 1,
      title: "University/Work",
    },
    {
      id: 2,
      title: "Home",
    },
    {
      id: 3,
      title: "Personal",
    },
    {
      id: 4,
      title: "Payment",
    },
  ];

  return (
    <div className="App">
      <Header />
      <div className="AppBody">
        <MenuBar items={items} />
        <TodoList todo={todo} setTodo={setTodo} />
      </div>
    </div>
  );
}

export default App;
