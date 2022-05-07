import { useState } from "react";
import { NavLink } from "react-router-dom";
import AllList from "./AllList";

import DropBtn from "../../ui/DropBtn";
import "./Menu.css";

function Menu() {
  const [showAll, setShowAll] = useState(false);

  const showAllHandler = () => {
    setShowAll((prevState) => !prevState);
  };

  const isActiveHandler = (navData) => {
    return navData.isActive ? "menu_link_active" : "";
  };
  return (
    <ul className="menu">
      <NavLink to="/home" className={isActiveHandler}>
        <li className="menu_link">Home</li>
      </NavLink>
      <NavLink to="/tv-shows" className={isActiveHandler}>
        <li className="menu_link">TV Shows</li>
      </NavLink>
      <NavLink to="/movies" className={isActiveHandler}>
        <li className="menu_link">Movies</li>
      </NavLink>
      <NavLink to="/my-list" className={isActiveHandler}>
        <li className="menu_link">My list</li>
      </NavLink>
      <li>
        <DropBtn title="All" className="menu_btn" onShow={showAllHandler} />
        {showAll && <AllList/>}
      </li>
    </ul>
  );
}

export default Menu;
