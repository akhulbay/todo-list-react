import ms from "./Menu.module.css";
import "./Menu.module.css";
import { useState } from "react";

function MenuBar({ items }) {
  const [tageActive, setTageActive] = useState(false);
  const MenuItems = ms.MenuItems;
  const MenuItemsActive = ms.MenuItemsActive;
  const c = "blue";

  return (
    <div className={ms.MenuBar}>
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
        </ul>
        <div className={tageActive ? MenuItemsActive : MenuItems}>
          {items.map((item) => (
            <div className={ms.MenuItem} style={{ color: item.color }}>
              {item.title}
            </div>
          ))}
        </div>
        <ul className={ms.ul}>
          <li>
            <h className={ms.TextMenu}>Example</h>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuBar;
