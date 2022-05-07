import "./AllList.css";
import { NavLink } from "react-router-dom";

function AllList(props) {
  const isActiveHandler=(allData)=>{
   return allData.isActive?'all_link_active':''
  }
  return (
    <ul className="all_list">
      <NavLink to="all/advrnture" className={isActiveHandler}>
        <li>Adventure</li>
      </NavLink>
      <NavLink to="all/action" className={isActiveHandler}>
        <li>Action</li>
      </NavLink>
      <NavLink to="all/animation" className={isActiveHandler}>
        <li>Animation</li>
      </NavLink>
      <NavLink to="all/horror" className={isActiveHandler}>
        <li>Horror</li>
      </NavLink>
      <NavLink to="all/comedy" className={isActiveHandler}>
        <li>Comedy</li>
      </NavLink>
      <NavLink to="all/sci-fi" className={isActiveHandler}>
        <li>Sci-Fi</li>
      </NavLink>
    </ul>
  );
}

export default AllList;
