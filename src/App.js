import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import MenuBar from "./components/Menu/MenuBar";
import TodoList from "./components/TodoList/TodoList";
import { useEffect, useState } from "react";
import DoneList from "./components/DoneList/DoneList";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

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
      color: "#110f0f",
    },
  ];
  const [items, setItems] = useState(
      JSON.parse(localStorage.getItem('tags')) || [
    {
      id: 0,
      title: "work",
      color: "black",
    },
    {
      id: 1,
      title: "home",
      color: "darkred",
    },
    {
      id: 2,
      title: "personal",
      color: "darkblue",
    },
    {
      id: 3,
      title: "payment",
      color: "darkslategrey",
    },
  ]);

  const [title, setTitle] = useState("All");

  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todo")) || [
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
    ]
  );

  const [done, setDone] = useState(
    JSON.parse(localStorage.getItem("done")) || [
      {
        id: 1,
        title: "First done",
        status: true,
        priority: priorities.at(3),
        tag: items.at(1),
      },
    ]
  );

  const [goal, setGoal] = useState(
    JSON.parse(localStorage.getItem("goal")) || 5
  );

  const [countDone, setCountDone] = useState(
    JSON.parse(localStorage.getItem("count")) || 0
  );

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);
  useEffect(() => {
    localStorage.setItem("done", JSON.stringify(done));
  }, [done]);
  useEffect(() => {
    localStorage.setItem("goal", JSON.stringify(goal));
  }, [goal]);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(countDone));
  }, [countDone]);
  useEffect(() => {
    localStorage.setItem("tags", JSON.stringify(items));
  }, [items]);
  return (
    <BrowserRouter>
      <div className="App">
        <Header goal={goal} setGoal={setGoal} countDone={countDone} />

        <div className="AppBody">
          <MenuBar items={items} setItems={setItems} setTitle={setTitle} />
          <Routes>
            <Route
              path={""}
              element={
                <TodoList
                  done={done}
                  setDone={setDone}
                  title={title}
                  todo={todo}
                  setTodo={setTodo}
                  items={items}
                  priorities={priorities}
                  countDone={countDone}
                  setCountDone={setCountDone}
                  className="ToDoList"
                />
              }
            />
            <Route
              path={"/done"}
              element={<DoneList done={done} setDone={setDone}></DoneList>}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
