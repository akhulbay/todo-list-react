import hs from "./Header.module.css";
import { createContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "../Modal/Modal";
import ReactSwitch from "react-switch";
function Header() {
  const [dailyGoal, setDailyGoal] = useState(5);
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className={hs.Header}>
      <div className={hs.Container}>
        <NavLink to={"/"}>
          <img src="homepage.png" alt="" className={hs.Homepage} />
        </NavLink>
        <form id="form">
          <input
            type="search"
            id="query"
            name="q"
            placeholder="Search"
            className={hs.Search}
          />
        </form>
        <div className={hs.Container2}></div>
        <button type="button" className={hs.Percentage}>
          <img src="percentage.png" alt="" className={hs.Percentageicon} />
        </button>

        <div className={hs.dailyGoalCSS}>0/{dailyGoal}</div>

        <NavLink to={"/done"}>
          <button type="button" className={hs.Question}>
            <img src="galochka.png" alt="" className={hs.Questionicon} />
          </button>
        </NavLink>

        <Modal active={modalActive} setActive={setModalActive} />
      </div>
    </div>
  );
}

export default Header;
