import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({setLoggedIn}) => {

  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  }

 function submitHandler(event){
  event.preventDefault();
  setLoggedIn(true);
  toast.success("Logged in");
  navigate("/dashboard");
 }

  return (
    <form className="max-w-sm mx-auto mt-8" onSubmit={submitHandler} >
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Email Address <sub>*</sub>
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
        type="text"
        name="email"
        value={formData.email}
        onChange={changeHandler}
        placeholder="Enter email id"
      />

      <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">
        Password <sub>*</sub>
      </label>
      <div className="relative">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter your password"
        />
        <span
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>
      </div>
      <Link to="#" className="block text-sm text-blue-500 mt-2">
        Forgot Password
      </Link>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Sign in
      </button>
    </form>
  );
}

export default LoginForm;
