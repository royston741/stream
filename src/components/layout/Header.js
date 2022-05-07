import Logo from "./Logo";
import "./Header.css";
import "./MobileView";
import MobileView from "./MobileView";
import HambergerBtn from "../ui/HambergerBtn";
import { useState } from "react";

function Header() {
  const [isCollapsed,setIsCollapsed]=useState(false)

  const collapseHandler=()=>{
    setIsCollapsed(prevState=>!prevState)
  }

  const collapseClass=isCollapsed?'menu_collapse':null

  return (
    <>
      <header>
        <Logo className="logo_size" />
        <MobileView collapse={collapseClass}/>
        <HambergerBtn onCollapse={collapseHandler}/>
      </header>
    </>
  );
}

export default Header;
