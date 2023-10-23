import frameImage from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const Template = ({ title, dec1, dec2, image, formType, setLoggedIn }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Container */}
      <div className="max-w-xl w-full p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="mb-4">
          <span className="mr-2">{dec1}</span>
          <span>{dec2}</span>
        </p>
        {formType === "signup" ? <SignupForm setLoggedIn={setLoggedIn}/> : <LoginForm setLoggedIn={setLoggedIn} />}
        <div className="flex items-center justify-center my-4">
          <div className="w-1/4 h-px bg-gray-400"></div>
          <p className="mx-4 text-gray-600 font-semibold">OR</p>
          <div className="w-1/4 h-px bg-gray-400"></div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign in with Google
        </button>
      </div>

      {/* Image Container */}
      <div className="hidden md:flex md:flex-col">
        <img src={frameImage} alt="pattern" width={0} height={0} loading="lazy" />
        <img src={image} alt="Students" width={558} height={504} loading="lazy" />
      </div>
    </div>
  );
};

export default Template;
