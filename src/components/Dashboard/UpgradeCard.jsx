import React from "react";
import { PiStarFour, PiArrowRight } from "react-icons/pi";

const UpgradeCard = () => {
  return (
    <div className="bg-gradient-to-br from-purple-700 to-purple-800 p-4 rounded-xl text-white text-center shadow-lg">
      <div className="flex items-center justify-center mb-2">
        <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
          <PiStarFour className="h-5 w-5" /> {/* Increased icon size */}
        </div>
      </div>
      <h3 className="font-semibold text-lg mb-1">Upgrade to Pro</h3>{" "}
      <p className="text-xs text-purple-200 mb-3 leading-tight">
        Unlock powerful features with our pro upgrade today!
      </p>
      <button className="bg-white text-purple-700 px-5 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition duration-200 font-medium text-sm w-full">
        <span>Upgrade now</span>
        <PiArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default UpgradeCard;
