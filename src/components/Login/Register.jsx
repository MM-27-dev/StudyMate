import React, { useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff } from "lucide-react"; // Or use your icon library
import { checkValidData } from "../../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { USER_AVATAR } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";

const Register = () => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCreateAccount = () => {
    const enteredName = name.current.value;
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const validationMessage = checkValidData(
      enteredName,
      enteredEmail,
      enteredPassword
    );
    if (validationMessage) {
      setErrorMessage(validationMessage);
      return;
    }

    if (!agreeTerms) {
      setErrorMessage("Please agree to the Terms of Service.");
      return;
    }

    createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
      .then(async (userCredential) => {
        try {
          const user = userCredential.user;

          await updateProfile(user, {
            displayName: enteredName,
            photoURL: USER_AVATAR,
          });

          const {
            uid,
            email: userEmail,
            displayName,
            photoURL,
          } = auth.currentUser;

          dispatch(
            addUser({
              uid,
              email: userEmail,
              displayName,
              photoURL,
            })
          );
          console.log("navigate")
          // ✅ Navigate only after user added to Redux
          window.location.href = "/";
          
        } catch (error) {
          setErrorMessage(error.message);
        }
      })
      .catch((error) => {
        setErrorMessage(`${error.code} - ${error.message}`);
      });
  };

  const handleConfirmPasswordBlur = () => {
    const enteredPassword = password.current.value;
    const enteredConfirmPassword = confirmPassword.current.value;

    if (
      enteredPassword &&
      enteredConfirmPassword &&
      enteredPassword !== enteredConfirmPassword
    ) {
      setErrorMessage("Passwords do not match.");
    } else {
      setErrorMessage(null);
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E1F24] px-4 py-10">
      <div className="w-full max-w-6xl flex flex-col md:flex-row bg-[#1E1F24] rounded-2xl overflow-hidden shadow-xl">
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

          <h2 className="text-3xl font-semibold text-white mb-2">
            Create an Account
          </h2>
          <p className="text-sm text-[#B0B0B0] mb-6">
            Kindly fill in your details to create an account
          </p>

          {/* Form */}
          <form
            className="space-y-5 text-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="text-[#B0B0B0]">Your fullname*</label>
              <input
                type="text"
                placeholder="Enter your name"
                ref={name}
                className="w-full mt-1 px-4 py-2 bg-transparent border border-[#3C3C3C] text-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#7F5AF0]"
              />
            </div>
            <div>
              <label className="text-[#B0B0B0]">Your email*</label>
              <input
                type="email"
                placeholder="Enter your email"
                ref={email}
                className="w-full mt-1 px-4 py-2 bg-transparent border border-[#3C3C3C] text-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#7F5AF0]"
              />
            </div>
            <div>
              <label className="text-[#B0B0B0]">Password*</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  ref={password}
                  className="w-full mt-1 px-4 py-2 bg-transparent border border-[#3C3C3C] text-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#7F5AF0]"
                />
                {/* <Eye className="absolute right-3 top-3 text-gray-400 cursor-pointer w-5 h-5" /> */}
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-3 text-gray-400 cursor-pointer w-5 h-5"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-[#B0B0B0]">Confirm Password*</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  ref={confirmPassword}
                  onBlur={handleConfirmPasswordBlur}
                  className="w-full mt-1 px-4 py-2 bg-transparent border border-[#3C3C3C] text-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#7F5AF0]"
                />

                {/* <Lock
                className="absolute left-3 top-2.5 text-gray-400"
                size={16}
              /> */}
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-3 top-3 text-gray-400 cursor-pointer w-5 h-5"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </button>
              </div>
            </div>

            {/* Terms checkbox */}
            <div className="flex items-center space-x-2 text-[#B0B0B0]">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="accent-[#7F5AF0] w-4 h-4"
              />
              <label>I agree to terms & conditions</label>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <p className="text-red-500 text-xs mb-3 text-center">
                {errorMessage}
              </p>
            )}

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-[#A78BFA] hover:bg-[#9F80F6] text-black font-semibold py-2 rounded-md"
              onClick={handleCreateAccount}
            >
              Sign up
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-[#3C3C3C]" />
              <span className="text-[#B0B0B0] text-sm">Or</span>
              <div className="h-px flex-1 bg-[#3C3C3C]" />
            </div>

            {/* Google Register */}
            <button
              type="button"
              className="w-full flex items-center justify-center space-x-3 bg-[#0E0E0E] border border-[#2C2C2C] py-2 rounded-md hover:bg-[#1A1A1A]"
            >
              <FcGoogle className="text-xl" />
              <span className="text-white">Register with Google</span>
            </button>
          </form>

          {/* Footer login link */}
          <p className="mt-6 text-sm text-[#B0B0B0] text-center">
            Already have an Account?{" "}
            <a
              href="#"
              className="text-[#A78BFA] underline hover:text-[#cdb4fa]"
              onClick={handleLogin}
            >
              Login
            </a>
          </p>
        </div>

        {/* Right Image Section */}
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

export default Register;
