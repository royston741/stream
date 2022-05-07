import { useState, useRef } from "react";
import "./EmailPhoneInputField.css";
import "./PasswordInputField.css";
import InputError from "./InputError";

function PasswordInputFiled(props) {
  // manage error state
  const [error, setError] = useState(false);

  // the input field is touch or not
  const [isTouched, setIsTouched] = useState(false);

  //   set password state to hide or show
  const [passwordVisible, setPasswordVissible] = useState(false);

  //working with input element
  const inputElement = useRef();

  // if the input losses focus
  const passwordInputFieldBlurHandler = () => {
    //if value of input field is not empty
    if (inputElement.current.value) {
      return;
    }

    setIsTouched(false);
    setError(true);
  };

  // on clicking the input field
  const passwordInputFieldClickHandler = () => {
    setIsTouched(true);
    inputElement.current.focus();
  };

  //   Password button to hide or show btn
  const passwordBtn = (event) => {
    event.preventDefault();
    setPasswordVissible((prevType) => !prevType);
  };

  const passwordInputHandler = (event) => {
    props.passwdValue(event.target.value)
    setError(false);
  };

  const ccomponentClass = error ||props.valid
    ? "input_container error_border"
    : "input_container";

  return (
    <>
      <div className={ccomponentClass} onClick={passwordInputFieldClickHandler}>
        <div>
          <label
            className={
              isTouched
                ? "input_container_label_touched"
                : "input_container_label_not_touched"
            }
          >
            {props.title}
          </label>
          <input
            ref={inputElement}
            onBlur={passwordInputFieldBlurHandler}
            onChange={passwordInputHandler}
            type={passwordVisible ? "text" : "password"}
          />
        </div>
        {isTouched && (
          <button className="password_btn" onClick={passwordBtn}>
            {passwordVisible ? "HIDE" : "SHOW"}
          </button>
        )}
      </div>
      {(error||props.valid) &&  (
        <InputError message="Your password must contain between 4 and 60 characters." />
      )}
    </>
  );
}

export default PasswordInputFiled;
