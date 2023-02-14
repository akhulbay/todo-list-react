import ms from "./Menu.module.css";
import "./Menu.module.css";
import DropDownMenu from "./DropMenu/DropDownMenu";
import { useState } from "react";

function MenuBar({ items }) {
  const [tageActive, setTageActive] = useState(false);
  const MenuItems = ms.MenuItems;
  const MenuItemsActive = ms.MenuItemsActive;

  return (
    <div className={ms.MenuBar}>
      <div className={ms.TextBody}>
        <ul className={ms.ul}>
          <li
            onClick={() => {
              setTageActive(!tageActive);
            }}
          >
            Tags
          </li>
        </ul>
        <div className={tageActive ? MenuItemsActive : MenuItems}>
          {items.map((item) => (
            <div className={ms.MenuItem}>{item.title}</div>
          ))}
        </div>
        <ul className={ms.ul}>
          <li>Example</li>
        </ul>
      </div>
    </div>
  );
}

export default MenuBar;
