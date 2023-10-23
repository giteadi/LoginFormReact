import React from "react";
import Template from "../components/Template";
import signupImg from '../assets/signup.png'; // Import the signup image

const Signup = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      dec1="Build skills for today, tomorrow, and beyond."
      dec2="Education to future-proof your career"
      image={signupImg} // Pass the signup image as a prop
      formType="signup" // Change the formType to "signup"
      setLoggedIn={setIsLoggedIn} // Correct the prop name to "setLoggedIn"
    />
  );
}

export default Signup;
