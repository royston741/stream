import "./HambergerBtn.css";

function HambergerBtn(props) {
  return (
    <div className="hamberger_container">
      <button className="hamberger_btn" onClick={props.onCollapse}>
        <div></div>
        <div></div>
        <div></div>
      </button>
    </div>
  );
}

export default HambergerBtn;
