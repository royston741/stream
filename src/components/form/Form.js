import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "../layout/Footer";
import Logo from "../layout/Logo";
import SignInForm from "./SigninForm";
import SignUpForm from "./SignupForm";
import "./Form.css";

function Form() {
  return (
    <div className="forms">
      <div className="logo_container">
        <Logo />
      </div>
      <div className="sign_form_container">
        <Routes>
          <Route path="/" element={<Navigate to="form/sign-in" />} />
          <Route path="form/sign-in" element={<SignInForm />} />
          <Route path="form/sign-up" element={<SignUpForm />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Form;
