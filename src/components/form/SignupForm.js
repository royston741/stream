import { useNavigate } from "react-router-dom";
import PasswordInputFiled from "./PasswordInputField";
import InputFiled from "./EmailPhoneInputField";
import FormBtn from "./FormBtn";
import "./SigninForm.css";
import { useState } from "react";
import validator from "validator";
import UsersContext from "../../store/user-store";
import useHttp from "../../hooks/use-http";

function SignUpForm() {
  const path = useNavigate();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const datafunc = (data) => {
    if(data){
      alert('done')
    }
  };

  const { isloading, sendRequest } = useHttp(datafunc);

  const navigateHandler = () => {
    path("/form/sign-in");
  };

  const emailValueHandler = (value) => {
    setEmailValue((prevState) => {
      return { ...prevState, value: value };
    });
  };

  const passwordValueHandler = (value) => {
    setPasswordValue((prevState) => {
      return { ...prevState, value: value };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (emailValue.value === undefined && passwordValue.value === undefined) {
      setEmailValue((prevState) => {
        return { ...prevState, notValid: true };
      });

      setPasswordValue((prevState) => {
        return { ...prevState, notValid: true };
      });
    } else {
      if (emailValue.value === undefined) {
        setEmailValue((prevState) => {
          return { ...prevState, notValid: true };
        });
      } else {
        const emailOrPhone =
          validator.isEmail(emailValue.value) ||
          validator.isMobilePhone(emailValue.value);

        if (emailOrPhone) {
          setEmailValue((prevState) => {
            return { ...prevState, notValid: false };
          });
        } else if (!emailOrPhone) {
          setEmailValue((prevState) => {
            return { ...prevState, notValid: true };
          });
        }
      }

      if (passwordValue.value === undefined) {
        setPasswordValue((prevState) => {
          return { ...prevState, notValid: true };
        });
      } else {
        if (passwordValue.value.length > 4) {
          setPasswordValue((prevState) => {
            return { ...prevState, notValid: false };
          });
        } else if (passwordValue.value.length < 4) {
          setPasswordValue((prevState) => {
            return { ...prevState, notValid: true };
          });
        }
      }
    }

    if (!emailValue.notValid && !passwordValue.notValid) {
      const user = {
        userId: emailValue.value.slice(0, 3) + passwordValue.value.slice(0, 3),
        account: emailValue.value,
        password: passwordValue.value,
      };

      sendRequest({
        url: "https://setx-58ad3-default-rtdb.firebaseio.com/user.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: user,
      });
    }
  };

  return (
    <UsersContext.Provider value={{ users: "rpo" }}>
      <form action="" className="sign_form">
        <h1>Sign Up</h1>
        <InputFiled
          title="Email or phone number"
          type="text"
          valid={emailValue.notValid}
          emailValue={emailValueHandler}
        />
        <PasswordInputFiled
          title="Password"
          type="password"
          valid={passwordValue.notValid}
          passwdValue={passwordValueHandler}
        />
        <FormBtn onSubmit={formSubmitHandler}>
          {isloading ? "Loading.." : "Sign Up"}
        </FormBtn>
        <div className="change_form">
          Already hava a account?
          <div onClick={navigateHandler}>Sign in.</div>
        </div>
      </form>
    </UsersContext.Provider>
  );
}

export default SignUpForm;
