import React from "react";
import { PiChatCircleDotsLight, PiBellSimpleLight } from "react-icons/pi"; // Using react-icons for consistent styling

const Header = () => {
  return (
    <header className="flex justify-end items-center p-4 bg-gray-800 border-b border-[#3A3A47] rounded-tr-lg shadow-lg pr-8">
      <div className="flex items-center space-x-6">
        <button className="text-gray-400 hover:text-white">
          <PiChatCircleDotsLight className="h-6 w-6" />
        </button>
        <button className="text-gray-400 hover:text-white">
          <PiBellSimpleLight className="h-6 w-6" />
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-600">
          {" "}
          <img
            src="/avatar.png"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
