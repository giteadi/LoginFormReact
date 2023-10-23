import React from "react";
import Template from "../components/Template";
import loginImg from '../assets/login.png';

const Login = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Welcome Back"
      dec1="Build skills for today, tomorrow, and beyond."
      dec2="Education to future-proof your career"
      image={loginImg}
      formType="login"
      setLoggedIn={setIsLoggedIn}
    />
  );
}

export default Login;
