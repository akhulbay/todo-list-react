import ms from "./Menu.module.css";
import "./Menu.module.css";

function MenuBar() {
  return (
    <div className={ms.MenuBar}>
      <div className={ms.TextBody}>
        <ul className={ms.ul}>
          <li>Tags</li>
          <li>All</li>
          <li>University/Work</li>
          <li>Home</li>
          <li>Personal</li>
          <li>Payment</li>
        </ul>
      </div>
    </div>
  );
}

export default MenuBar;
