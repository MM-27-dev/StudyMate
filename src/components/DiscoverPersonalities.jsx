import React from "react";
import { CheckCircle } from "lucide-react";

const features = [
  "12 different personalities",
  "Personalized experiences",
  "Empathetic interactions",
];

const DiscoverPersonalities = () => {
  return (
    <section className="bg-black text-white  p-50 md:px-20 pb-2 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left Content */}
      <div className="max-w-2xl">
        <p className="text-[#C4B5FD] text-sm font-medium mb-3">AI Features</p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Discover Personalities
        </h2>
        <p className="text-[#A1A1AA] text-lg mb-6 leading-relaxed">
          Switch Between Various Personalities To Match Your Mood And Make
          Conversations More Engaging.
        </p>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <CheckCircle className="text-[#C4B5FD]" size={20} />
              <span className="text-base text-white">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content - Replace with actual images */}

      <div className="relative w-full max-w-lg ml-20">
        {/* Back Card */}
        <div className=" absolute -top-40  -left-12 w-[220px] h-[320px] bg-[#1F1F23] rounded-xl shadow-lg z-3 p-4 border border-[#2C2C31]">
          <div className="flex flex-col items-center">
            <img
              src="/discover-personalities.svg"
              alt="Sage"
              className="w-16 h-16 rounded-full object-cover mb-2"
            />
            <h3 className="text-white font-semibold text-lg">Sage</h3>
            <p className="text-sm text-gray-400 text-center mt-1">
              A wise and knowledgeable character for deep discussions and a
              trusted guide.
            </p>
          </div>
        </div>

        {/* Front Card */}
        <div className="relative z-10 flex bg-[#1F1F23] rounded-xl shadow-2xl border border-[#2C2C31] overflow-hidden">
          {/* Avatar & Name */}
          <div className="flex flex-col items-center justify-start bg-[#1F1F23] p-4 w-[200px]">
            <img
              src="/discover-personalities.svg"
              alt="Sage Avatar"
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <h3 className="text-white text-xl font-semibold mb-2">Sage</h3>
            <div className="w-full h-4 bg-[#2C2C31] rounded mb-2" />
            <div className="w-full h-4 bg-[#2C2C31] rounded" />
            <button className="mt-4 px-4 py-2 bg-[#A78BFA] text-white rounded-lg text-sm font-medium hover:bg-[#8B5CF6] transition">
              Chat Now
            </button>
          </div>

          {/* Character Details */}
          <div className="flex-1 p-6 space-y-4 text-white text-sm">
            <div>
              <p className="text-gray-400">Role</p>
              <div className="w-3/4 h-4 bg-[#2C2C31] rounded mt-1" />
            </div>
            <div>
              <p className="text-gray-400">Purpose</p>
              <div className="w-full h-4 bg-[#2C2C31] rounded mt-1" />
            </div>

            <div>
              <p className="text-white font-medium mt-4 mb-2">
                Character Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-24 h-6 bg-[#2C2C31] rounded" />
                ))}
              </div>
            </div>

            <div>
              <p className="text-white font-medium mt-4 mb-2">
                Interaction Style
              </p>
              <div className="flex gap-2">
                <div className="w-28 h-6 bg-[#2C2C31] rounded" />
                <div className="w-28 h-6 bg-[#2C2C31] rounded" />
                <div className="w-28 h-6 bg-[#2C2C31] rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverPersonalities;
