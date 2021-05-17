import * as React from "react"
import Menu from "./menu";
import Icon from "../assets/menu.svg";

export default function DropdownMenu({ url, langKey }) {
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
        className="block md:hidden button">
        <Icon />
      </button>
      <div className={showMenu} >
        <Menu dropdown={dropdown} url={url} langKey={langKey} />
      </div>
    </>
  );
}
