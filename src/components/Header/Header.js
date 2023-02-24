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
          <img src="lupadlypoiska.png" alt="" className={hs.Searchicon} />
        </form>

        <div className={hs.Container2}></div>
        <button type="button" className={hs.Percentage}>
          <img src="percentage.png" alt="" className={hs.Percentageicon} />
          <span>{countDone}/{goal}</span>
        </button>

        <NavLink to={"/done"}>
          <button type="button" className={hs.Question}>
            <img src="galochka.png" alt="" className={hs.Questionicon} />
          </button>
        </NavLink>

        <button
          type="button"
          className={hs.Account}
          onClick={() => setModalActive(true)}
        >
          <img src="account.png" alt="" className={hs.Accounticon} />
        </button>

        <Modal active={modalActive} setActive={setModalActive} goal={goal} setGoal={setGoal}/>
      </div>
    </div>
  );
}

export default Header;
