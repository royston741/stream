import "./MobileView.css";
import Menu from "./Menu/Menu";
import SearchAndUser from "./SearchAndUser";

function MobileView(props) {

  return (
    <div className={props.collapse?props.collapse:'mobile_view'}>
      <Menu />
      <SearchAndUser />
    </div>
  );
}

export default MobileView;
