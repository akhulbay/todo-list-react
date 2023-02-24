import ms from "./Menu.module.css";
import "./Menu.module.css";
import uuid from "react-uuid";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "../Modal/Modal";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
import AddTodo from "../TodoList/AddTodo/AddToDo";

function MenuBar({ items, setItems, setTitle }) {
  const [modalActive, setModalActive] = useState(false);
  const [value, setValue] = useState("");
  const [tageActive, setTageActive] = useState(false);
  const [tageColorActive, setTageColorActive] = useState(false);
  const [color, setColor] = useState("gray");
  const [tageMenuActive, setTageMenuActive] = useState(false);
  const MenuItems = ms.MenuItems;
  const MenuItemsActive = ms.MenuItemsActive;
  const AddTagsMenu = ms.AddTagsMenu;
  const AddTagsMenuActive = ms.AddTagsMenuActive;

  const colors = [
    {
      id: 1,
      color: "#2a79d4",
      name: "blue",
    },
    {
      id: 2,
      color: "#f7ef52",
      name: "yellow",
    },
    {
      id: 3,
      color: "#2f9c21",
      name: "green" ,
    },
    {
      id: 4,
      color: "orangered",
      name: "red",
    },
  ];

  function handleKeyUp(e) {
    if (e.key === "Enter") addTag();
  }

  function addTag() {
    setItems([
      ...items,
      {
        id: uuid(),
        title: value,
        color: color,
      },
    ]);
    setValue("");
    setColor("gray");
  }

  const filterItems = (tagItem) => {
    setTitle(tagItem);
  };
  return (
    <div className={ms.MenuBar}>
      <div className={tageMenuActive ? AddTagsMenuActive : AddTagsMenu}>
        <input
          className={ms.InputChange}
          placeholder={"Enter tag name"}
          value={value}
          onKeyUp={(e) => handleKeyUp(e)}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <div
          className={ms.TakeColorMenu}
          style={{ backgroundColor: color }}
          onClick={() => {
            setTageColorActive(!tageColorActive);
          }}
        >
          Color
        </div>
        <div className={tageColorActive ? MenuItemsActive : MenuItems}>
          {colors.map((color) => (
            <div
              className={ms.TakeColorMenu}
              style={{ backgroundColor: color.color }}
              onClick={() => {
                setColor(color.color);
                setTageColorActive(!tageColorActive);
              }}
            >
              {color.name}
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            addTag();
          }}
          className={ms.SaveButton}
        >
          Save Tag
        </button>
      </div>
      <div className={ms.TextBody}>
        <ul className={ms.ul}>
          <li
            onClick={() => {
              setTageActive(!tageActive);
            }}
            className={ms.TagOption}
          >
            <div className={ms.IconTag}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-tag"
                viewBox="0 0 16 16"
                className={ms.IconItems}
              >
                <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z" />
                <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z" />
              </svg>
            </div>
            <h className={ms.TextMenu}>Tags</h>
          </li>
          <div
            className={ms.SettingTags}
            onClick={() => {
              setTageMenuActive(!tageMenuActive);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="currentColor"
              class="bi bi-plus-circle"
              viewBox="0 0 16 16"
              className={ms.SettingTag}
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </div>
        </ul>
        <div className={tageActive ? MenuItemsActive : MenuItems}>
          <div
            className={ms.MenuItem}
            style={{ color: "white" }}
            onClick={() => filterItems("all")}
          >
            all
          </div>
          {items.map((item) => (
            <div
              className={ms.MenuItem}
              style={{ color: item.color }}
              onClick={() => filterItems(item.title)}
            >
              {item.title}
            </div>
          ))}
        </div>
        <div
          className={ms.CommonMenuComp}
          onClick={() => setModalActive(!modalActive)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
            className={ms.menuIconSetting2}
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
          <a className={ms.TextMenu}> Account</a>
        </div>
        <NavLink to={"/done"}>
          <div className={ms.CommonMenuComp}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-check-circle"
              viewBox="0 0 16 16"
              className={ms.menuIconSetting}
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
            </svg>
            <a className={ms.TextMenu}>&nbsp;Done List</a>
          </div>
        </NavLink>

        <Modal active={modalActive} setActive={setModalActive} />
      </div>
    </div>
  );
}

export default MenuBar;
