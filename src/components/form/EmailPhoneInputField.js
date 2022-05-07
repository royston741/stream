import { useState, useRef } from "react";

import InputError from "./InputError";
import "./EmailPhoneInputField.css";

function InputFiled(props) {
  // manage error state
  const [error, setError] = useState(false);

  // the input field is touch or not
  const [isTouched, setIsTouched] = useState(false);

  //working with input element
  const inputElement = useRef();

  // if the input losses focus
  const emailInputFieldBlurHandler = () => {
    //if value of input field is not empty
    if (inputElement.current.value) {
      return;
    }

    setIsTouched(false);
    setError(true);
  };

  // on clicking the input field
  const emailInputFieldClickHandler = () => {
    setIsTouched(true);
    inputElement.current.focus();
  };

  const emailInputHandler = (event) => {
    props.emailValue(event.target.value);
    setError(false);
  };

  const componentClass = error || props.valid
    ? "input_container error_border"
    : "input_container";

  return (
    <>
      <div className={componentClass} onClick={emailInputFieldClickHandler}>
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
          onBlur={emailInputFieldBlurHandler}
          onChange={emailInputHandler}
          type={props.type}
        />
      </div>
      {(error|| props.valid) && (
        <InputError message="Please enter a valid email address or phone number." />
      )}
    </>
  );
}

export default InputFiled;
