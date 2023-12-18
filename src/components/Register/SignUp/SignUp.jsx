import { useFormik } from "formik";
import { DivSingUp } from "./SignUp.styled";
import { NavLink } from "react-router-dom";
import { SignupSchema } from "../../../utils/validationSchemas";
import { saveSignUpForm } from "../../../redux/Auth/auth-slice";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { useState } from "react";


export const SignUp = ({ onNext }) => {
  const dispatch = useDispatch();
  const { userName, userEmail, userPassword } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const {
    values,
    errors,
    touched,
    isValid,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: userName || "",
      email: userEmail || "",
      password: userPassword || "",
    },

    validationSchema: SignupSchema,


    onSubmit: (values) => {
      dispatch(saveSignUpForm(values));
      onNext();
    },

  });


  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };


  const getInputClass = (fieldName) => {
    return !values[fieldName]
      ? ""
      : touched && errors[fieldName]
      ? "ErrorInput"
      : "SuccessInput";
  };


  const getInputAlert = (fieldName) => {
    return !values[fieldName] ? (
      ""
    ) : touched && errors[fieldName] ? (
      <>
        <p className="ErrorText">{errors[fieldName]}</p>
        <div className="ImgError" />
      </>
    ) : (
      <>
        <p className="SuccessText">{`${fieldName} is correct`}</p>
        <div className="ImgCorrect" />
      </>
    );
  };


  const getHidePassword = () => {
    return (
      <div
        className={showPassword ? "HidePassword" : "ShowPassword"}
        onClick={handleTogglePassword}
      />
    );
  };

  
  return (
    <DivSingUp>
      <div className="ImageContainet">
        <span className="ImgSingUp" />
      </div>
      <div>
        <div className="TitleContainer">
          <h2 className="H2">Sign up</h2>
          <p className="TitleText">You need to register to use the service</p>
        </div>
        <form className="Form" onSubmit={handleSubmit}>
          <div className="DivInput">
            <input
              className={getInputClass("name")}
              id="name"
              name="name"
              placeholder="Name"
              type="text"
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur}
            />
            {getInputAlert("name")}
          </div>
          <div className="DivInput">
            <input
              className={getInputClass("email")}
              id="email"
              name="email"
              placeholder="E-mail"
              type="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />
            {getInputAlert("email")}
          </div>
          <div className="DivInput" id="password">
            <input
              className={getInputClass("password")}
              id="password"
              name="password"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              onKeyDown={handleChange}
            />
            {getInputAlert("password")}
            {getHidePassword()}
          </div>

          <button
            className="ButtonNext"
            type="submit"
            disabled={!touched.name || !isValid}
          >
            Next
          </button>
        </form>

        <div className="DivContainerSingIn">
          <p className="SingInText">Do you already have an account?</p>
          <div className="LinkToSingIn">
            <NavLink to="/signin">Sign in</NavLink>
          </div>
        </div>
      </div>
    </DivSingUp>
  );
};