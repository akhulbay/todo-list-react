import hs from "./Header.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "../Modal/Modal";
function Header() {
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
          <img src="lupadlypoiska.png" alt="" className={hs.Searchicon} />
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

        <button
          type="button"
          className={hs.Account}
          onClick={() => setModalActive(true)}
        >
          <img src="account.png" alt="" className={hs.Accounticon} />
        </button>

        <Modal active={modalActive} setActive={setModalActive} />
      </div>
    </div>
  );
}

export default Header;
