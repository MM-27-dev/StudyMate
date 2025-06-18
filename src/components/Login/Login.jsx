import React, { useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { checkValidData } from "../../utils/validate";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/register");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    const validationMessage = checkValidData("", enteredEmail, enteredPassword);

    if (validationMessage) {
      setErrorMessage(validationMessage);
      return;
    }

    signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // Navigate to the desired page after successful login
        navigate("/dashbord"); // Replace with your desired route
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMsg = error.message;
        setErrorMessage(`${errorCode}: ${errorMsg}`);
      });
  };

  return (
    <div className="min-h-screen bg-[#1E1F24] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-[#1E1F24] flex flex-col md:flex-row rounded-2xl shadow-xl overflow-hidden">
        {/* Left Form Section */}
        <div className="w-full md:w-1/2 px-6 sm:px-10 py-10">
          {/* Logo */}
          <div className="mb-8 flex items-center space-x-2">
            <div className="bg-[#7F5AF0] rounded-full p-2">
              <span role="img" aria-label="bot">
                🤖
              </span>
            </div>
            <h1 className="text-2xl font-bold text-white">BotBuzz</h1>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-semibold text-white mb-2">Login</h2>
          <p className="text-sm text-[#B0B0B0] mb-6">
            Add your credentials to log in
          </p>

          {/* Form */}
          <form className="space-y-5 text-sm" onSubmit={handleLogin}>
            <div>
              <label className="text-[#B0B0B0]">Your email*</label>
              <input
                type="email"
                ref={email}
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-2 bg-transparent border border-[#3C3C3C] text-white placeholder-[#8B8B8B] rounded-md focus:outline-none focus:ring-1 focus:ring-[#7F5AF0]"
              />
            </div>
            <div>
              <label className="text-[#B0B0B0]">Password*</label>
              <div className="relative">
                <input
                  ref={password}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full mt-1 px-4 py-2 bg-transparent border border-[#3C3C3C] text-white placeholder-[#8B8B8B] rounded-md focus:outline-none focus:ring-1 focus:ring-[#7F5AF0]"
                />
                {/* <Eye
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 cursor-pointer w-5 h-5"
                /> */}

                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-400 cursor-pointer w-5 h-5"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center text-[#B0B0B0] text-sm">
              <input
                type="checkbox"
                className="accent-[#7F5AF0] w-4 h-4 mr-2"
              />
              <label>I agree to terms & conditions</label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#A78BFA] hover:bg-[#9F80F6] text-black font-semibold py-2 rounded-md"
            >
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-[#3C3C3C]" />
              <span className="text-[#B0B0B0] text-sm">Or</span>
              <div className="h-px flex-1 bg-[#3C3C3C]" />
            </div>

            {/* Google Login */}
            <button
              type="button"
              className="w-full flex items-center justify-center space-x-3 bg-black border border-[#2C2C2C] py-2 rounded-md hover:bg-[#111]"
            >
              <FcGoogle className="text-xl" />
              <span className="text-white">Register with Google</span>
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-sm text-[#B0B0B0] text-center">
            Don’t have an Account?{" "}
            <a
              href="#"
              className="text-[#A78BFA] hover:underline"
              onClick={handleSignUp}
            >
              Sign up
            </a>
          </p>
        </div>

        {/* Right Image */}
        <div className="hidden md:block w-full md:w-1/2">
          <img
            src="/login.svg"
            alt="VR User"
            className="h-full w-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
