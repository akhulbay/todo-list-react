import hs from "./Header.module.css";
import { createContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "../Modal/Modal";
import ReactSwitch from "react-switch";
function Header({goal, setGoal, countDone}) {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className={hs.Header}>
      <div className={hs.Container}>
        <NavLink to={"/"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
               className={hs.Homepage} viewBox="0 0 16 16">
            <path
                d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
          </svg>
        </NavLink>
        <form id="form">
          <input
            type="search"
            id="query"
            name="q"
            placeholder="Search"
            className={hs.Search}
          />
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={hs.Searchicon}
               viewBox="0 0 16 16">
            <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </form>

        <div className={hs.Container2}></div>
        <button type="button" className={hs.Percentage}>
          <img src="percentage.png" className={hs.Percentageicon}/>
          <span>{countDone}/{goal}</span>
        </button>

        <NavLink to={"/done"}>
          <button type="button" className={hs.Question}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className={hs.Questionicon} viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path
                  d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
            </svg>
          </button>
        </NavLink>

        <button
          type="button"
          className={hs.Account}
          onClick={() => setModalActive(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
               className={hs.Accounticon} viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
          </svg>
        </button>

        <Modal active={modalActive} setActive={setModalActive} goal={goal} setGoal={setGoal}/>
      </div>
    </div>
  );
}

export default Header;
