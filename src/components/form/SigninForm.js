import { useNavigate } from "react-router-dom";
import PasswordInputFiled from "./PasswordInputField";
import InputFiled from "./EmailPhoneInputField";
import FormBtn from "./FormBtn";
import "./SigninForm.css";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import useHttp from "../../hooks/use-http";

let usersList = [];
function SignInForm() {
  const path = useNavigate();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [formIsValid, setFormIsValid] = useState({});

  const dataFunc = (usersObj) => {
    setFormIsValid({ error: false });
    usersList = [];

    for (const userKey in usersObj) {
      usersList.push(usersObj[userKey]);
    }

    const item = usersList.find((user) => {
      let account;
      if (user.account === emailValue) {
        account = user;
      }
      return account;
    });

    if (item === undefined) {
      setFormIsValid({
        error: true,
        message:
          "Sorry, we can't find an account with this email address. Please try again or create a new account.",
      });
    } else if (item) {
      if (item.account === emailValue) {
        console.log(item.account);
        if (item.password === passwordValue) {
          console.log(item.password);
        } else {
          setFormIsValid({
            error: true,
            message:
              "Incorrect password. Please try again or you can reset your password.",
          });
        }
      } else {
        setFormIsValid({
          error: true,
          message:
            "Sorry, we can't find an account with this email address. Please try again or create a new account.",
        });
      }
    }
    
  };

  const { isloading, sendRequest } = useHttp(dataFunc);

  const navigateHandler = () => {
    path("/form/sign-up");
  };

  const emailValueHandler = (value) => {
    setEmailValue(value);
  };

  const passwordValueHandler = (value) => {
    setPasswordValue(value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (emailValue === "" || passwordValue === "") {
      return;
    }

    sendRequest({
      url: "https://setx-58ad3-default-rtdb.firebaseio.com/user.json",
    });
  };

  return (
    <form action="" className="sign_form">
      <h1>Sign In</h1>
      {formIsValid.error && <ErrorMessage message={formIsValid.message} />}
      <InputFiled
        title="Email or phone number"
        type="text"
        emailValue={emailValueHandler}
      />
      <PasswordInputFiled
        title="Password"
        type="password"
        passwdValue={passwordValueHandler}
      />
      <FormBtn onSubmit={formSubmitHandler}>
        {isloading ? "Loading.." : "Sign Ip"}
      </FormBtn>

      <div className="change_form">
        New to Stream?
        <div onClick={navigateHandler}>Sign up now.</div>
      </div>
    </form>
  );
}

export default SignInForm;
