import dm from "./DropMenu.module.css";
import "./DropMenu.module.css";

function DropDownMenu() {
  return (
    <div className={dm.DropMenu}>
      <ul className={dm.ul}>
        <li>All</li>
        <li>University/Work</li>
        <li>Home</li>
        <li>Personal</li>
        <li>Payment</li>
      </ul>
    </div>
  );
}

export default DropDownMenu;
