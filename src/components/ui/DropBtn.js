import "./DropBtn.css";
import { BsFillCaretDownFill } from "react-icons/bs";

function DropBtn(props) {
  return (
    <button className={`all_btn ${props.className}`} onClick={props.onShow}>
      {props.img && <img className="user_img" src={props.img} alt="" />}
      <p>{props.title}</p>
      <BsFillCaretDownFill size="0.8rem" />
    </button>
  );
}

export default DropBtn;
