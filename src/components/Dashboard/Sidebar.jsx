// import React, { useState } from "react";
// import UpgradeCard from "./UpgradeCard";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { signOut } from "firebase/auth";
// import { auth } from "../../utils/firebase";

// // Sidebar Component
// const Sidebar = () => {
//   const [chatHistoryOpen, setChatHistoryOpen] = useState(false);
//   const [settingsOpen, setSettingsOpen] = useState(false);

//   const navigate = useNavigate();
//   // const dispatch = useDispatch();
//   const user = useSelector((store) => store.user);
//   const handleSignOut = () => {
//     signOut(auth)
//       .then(() => {
//         // Sign-out successful.
//         navigate("/");
//       })
//       // eslint-disable-next-line no-unused-vars
//       .catch((error) => {
//         // An error happened.
//         navigate("/error");
//       });
//     }

//   return (
//     <div className="w-64 bg-gray-800 text-gray-300 flex flex-col h-full rounded-l-lg shadow-lg">
//       {/* Top section of Sidebar */}
//       <div className="p-3 flex items-center justify-between border-b border-gray-700">
//         <div className="flex items-center space-x-3">
          
//             <img
//               alt="logo-image"
//               src="/dashbord-logo.svg"
//               className="w-10 h-10 "
//             />
         
//         </div>
//         <button className="text-gray-400 hover:text-white">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path
//               fillRule="evenodd"
//               d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Navigation Links */}
//       <nav className="flex-1 px-4 py-6 space-y-2">
//         <a
//           href="#"
//           className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition duration-200"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5zm11-4v2a2 2 0 002-2h-2zm-6 0h.01"
//             />
//           </svg>
//           <span>Chat</span>
//         </a>

//         {/* Chat History Dropdown */}
//         <div>
//           <button
//             onClick={() => setChatHistoryOpen(!chatHistoryOpen)}
//             className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-700 transition duration-200"
//           >
//             <div className="flex items-center space-x-3 text-sm">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253"
//                 />
//               </svg>
//               <span>Chat History</span>
//             </div>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className={`h-4 w-4 transform ${
//                 chatHistoryOpen ? "rotate-180" : ""
//               } transition-transform duration-200`}
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M19 9l-7 7-7-7"
//               />
//             </svg>
//           </button>
//           {chatHistoryOpen && (
//             <div className="pl-6 pt-2 space-y-1">
//               {/* Add chat history items here if needed */}
//               <a
//                 href="#"
//                 className="block p-2 rounded-lg hover:bg-gray-700 transition duration-200 text-sm"
//               >
//                 Today
//               </a>
//               <a
//                 href="#"
//                 className="block p-2 rounded-lg hover:bg-gray-700 transition duration-200 text-sm"
//               >
//                 Yesterday
//               </a>
//             </div>
//           )}
//         </div>

//         <a
//           href="#"
//           className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition duration-200"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//             />
//           </svg>
//           <span>AI Personalities</span>
//         </a>

//         {/* Settings Dropdown */}
//         <div>
//           <button
//             onClick={() => setSettingsOpen(!settingsOpen)}
//             className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-700 transition duration-200"
//           >
//             <div className="flex items-center space-x-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.585.353 1.282.633 2.009.835l.235.057z"
//                 />
//               </svg>
//               <span>Settings</span>
//             </div>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className={`h-4 w-4 transform ${
//                 settingsOpen ? "rotate-180" : ""
//               } transition-transform duration-200`}
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M19 9l-7 7-7-7"
//               />
//             </svg>
//           </button>
//           {settingsOpen && (
//             <div className="pl-6 pt-2 space-y-1">
//               <a
//                 href="#"
//                 className="block p-2 rounded-lg hover:bg-gray-700 transition duration-200 text-sm"
//               >
//                 Tone
//               </a>
//               <a
//                 href="#"
//                 className="block p-2 rounded-lg hover:bg-gray-700 transition duration-200 text-sm"
//               >
//                 Language
//               </a>
//               <a
//                 href="#"
//                 className="block p-2 rounded-lg hover:bg-gray-700 transition duration-200 text-sm"
//               >
//                 Formality Level
//               </a>
//             </div>
//           )}

//           {user && (
//             <div className="flex items-center gap-2">
//               <img
//                 className="w-10 h-10 rounded-full"
//                 alt="usericon"
//                 src={user.photoURL}
//               />
//               <button onClick={handleSignOut} className="font-bold text-white">
//                 Sign Out
//               </button>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Upgrade Card */}
//       <div className="p-4 mt-auto">
//         <UpgradeCard />
//       </div>
//     </div>
//   );

// };

// export default Sidebar

import React, { useState } from "react";
import UpgradeCard from "./UpgradeCard"; // Assuming UpgradeCard is in the same directory
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { CiChat1 } from "react-icons/ci";
import { RiFileHistoryLine } from "react-icons/ri";
import { BsPersonGear } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";

// Sidebar Component
const Sidebar = () => {
  const [chatHistoryOpen, setChatHistoryOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const navigate = useNavigate();
  const user = useSelector((store) => store.user); // Added a default value for user in case it's null/undefined
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error)
        navigate("/error");
      });
  };

  return (
    <div className="w-64 bg-gray-800 text-gray-300 flex flex-col h-full rounded-l-lg shadow-lg">
      {/* Top section of Sidebar */}
      <div className="p-3 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <img
            alt="logo-image"
            src="/dashbord-logo.svg"
            className="w-10 h-10 "
          />
        </div>
        <button className="text-gray-400 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-3 py-3 space-y-2">
        <a
          href="#"
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition duration-200 bg-gray-700 text-white" // Added active state styles
        >
          <CiChat1 className="h-5 w-5 white" />
          <span>Chat</span>
        </a>

        {/* Chat History Dropdown */}
        <div>
          <button
            onClick={() => setChatHistoryOpen(!chatHistoryOpen)}
            className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-700 transition duration-200"
          >
            <div className="flex items-center space-x-3 text-sm">
              <RiFileHistoryLine className="h-5 w-5" />
              <span>Chat History</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 transform ${
                chatHistoryOpen ? "rotate-180" : ""
              } transition-transform duration-200`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {chatHistoryOpen && (
            <div className="pl-6 pt-2 space-y-1">
              {/* Add chat history items here if needed */}
              <a
                href="#"
                className="block p-2 rounded-lg hover:bg-gray-700 transition duration-200 text-sm"
              >
                Today
              </a>
              <a
                href="#"
                className="block p-2 rounded-lg hover:bg-gray-700 transition duration-200 text-sm"
              >
                Yesterday
              </a>
            </div>
          )}
        </div>

        <a
          href="#"
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition duration-200"
        >
          <BsPersonGear className="h-5 w-5 white" />
          <span>AI Personalities</span>
        </a>

        {/* Settings Dropdown */}
        <div>
          <button
            onClick={() => setSettingsOpen(!settingsOpen)}
            className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-700 transition duration-200"
          >
            <div className="flex items-center space-x-3">
              <IoIosSettings  className="h-5 w-5"/>
              <span>Settings</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 transform ${
                settingsOpen ? "rotate-180" : ""
              } transition-transform duration-200`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {settingsOpen && (
            <div className="pl-6 pt-2 space-y-1">
              <a
                href="#"
                className="block p-2 rounded-lg hover:bg-gray-700 transition duration-200 text-sm"
              >
                Tone
              </a>
              <a
                href="#"
                className="block p-2 rounded-lg hover:bg-gray-700 transition duration-200 text-sm"
              >
                Language
              </a>
              <a
                href="#"
                className="block p-2 rounded-lg hover:bg-gray-700 transition duration-200 text-sm"
              >
                Formality Level
              </a>
            </div>
          )}

          {user && (
            <div className="flex items-center gap-2">
              <img
                className="w-10 h-10 rounded-full"
                alt="usericon"
                src={user.photoURL || "default-user-icon.png"} // Added a default image
              />
              <button onClick={handleSignOut} className="font-bold text-white">
                Sign Out
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Upgrade Card */}
      <div className="p-4 mt-auto">
        <UpgradeCard />
      </div>
    </div>
  );
};

export default Sidebar;
