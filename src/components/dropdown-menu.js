import * as React from "react"
import Menu from "./menu";
import Icon from "../assets/menu.svg";

export default function DropdownMenu() {
  const [menuShown, setMenuShown] = React.useState(false);

  const toggleMenu = e => {
    setMenuShown(!menuShown);
  }


  const showMenu = menuShown ? "block" : "hidden";
  const dropdown = true;
  
  return (
    <>
      <button 
        onClick={toggleMenu}
        className="block mr-2 md:hidden button">
        <Icon />
      </button>
      <div className={showMenu} >
        <Menu dropdown={dropdown} />
      </div>
    </>
  );
}
