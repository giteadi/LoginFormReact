import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex justify-between mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Student
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Instructor
        </button>
      </div>

      <form>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600">
                First name <sup>*</sup>
              </label>
              <input
                className="w-full p-2 border rounded"
                required
                type="text"
                name="firstName"
                onChange={changeHandler}
                placeholder="Enter first name"
                value={formData.firstName}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">
                Last name <sup>*</sup>
              </label>
              <input
                className="w-full p-2 border rounded"
                required
                type="text"
                name="lastName"
                onChange={changeHandler}
                placeholder="Enter last name"
                value={formData.lastName}
              />
            </div>
          </div>

          <label className="block text-sm text-gray-600">
            Email Address <sup>*</sup>
          </label>
          <input
            className="w-full p-2 border rounded"
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter email Address"
            value={formData.email}
          />

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600">
                Create Password <sup>*</sup>
              </label>
              <div className="relative">
                <input
                  className="w-full p-2 border rounded"
                  required
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={changeHandler}
                  placeholder="Enter Password"
                  value={formData.password}
                />
                <span
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600">
                Confirm Password <sup>*</sup>
              </label>
              <div className="relative">
                <input
                  className="w-full p-2 border rounded"
                  required
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  onChange={changeHandler}
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                />
                <span
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
