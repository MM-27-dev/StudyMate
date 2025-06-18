import React from "react";
import { PiPaperclip, PiMicrophone, PiPaperPlaneTilt } from "react-icons/pi";

const ChatAI = () => {
  const Card = ({ icon, title }) => (
    <div className="bg-[#2E2E3A] p-4 rounded-xl  flex flex-col items-start justify-start  cursor-pointer hover:bg-[#3A3A47] transition duration-200">
      <div className="mb-10  ">{icon} </div>
      <h3 className="text-gray-300 font-medium text-sm text-align leading-tight">
        {title}
      </h3>
    </div>
  );

  return (
    <div className="flex-1 flex flex-col bg-gray-900 rounded-br-lg">
      <div className="flex-1 flex flex-col items-center justify-center  ">
        <img alt="logo-image" src="/chat-logo.svg" className="w-11 h-10" />

        <h2 className="text-white text-2xl font-bold mb-8">
          Your Daily AI Assistant
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3  max-w-2xl ">
          <Card
            icon={<img alt="vector1" src="/vector1.svg" className="w-5 h-5 " />}
            title="Create a crossword puzzle for me"
            description=""
          />
          <Card
            icon={<img alt="vector2" src="/Vector2.svg" className="w-5 h-5" />}
            title="Plan a budget for my vacation"
            description=""
          />
          <Card
            icon={<img alt="vector3" src="/Vector3.svg" className="w-5 h-5" />}
            title="Ethical implications of AI"
            description=""
          />
          <Card
            icon={<img alt="vector4" src="/vector4.svg" className="w-5 h-5" />}
            title="Calendar for the whole month"
            description=""
          />
        </div>
      </div>

      {/* Chat Input */}
      <div className="p-5 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-2 bg-gray-800 border border-gray-700 rounded-xl p-2">
            <input
              type="text"
              placeholder="Enter a prompt here"
              className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="text-gray-400 hover:text-white p-1">
              <PiPaperclip className="h-5 w-5" />
            </button>
            <button className="text-gray-400 hover:text-white p-1">
              <PiMicrophone className="h-5 w-5" />
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg transition duration-200">
              <PiPaperPlaneTilt className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatAI;
