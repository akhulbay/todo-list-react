import ms from "./Menu.module.css";
import "./Menu.module.css";
import DropDownMenu from "./DropMenu/DropDownMenu";

function MenuBar() {
  return (
    <div className={ms.MenuBar}>
      <div className={ms.TextBody}>
        <ul className={ms.ul}>
          <li>Tags</li>
          <DropDownMenu />
        </ul>
      </div>
    </div>
  );
}

export default MenuBar;
