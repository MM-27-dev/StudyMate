import React from "react";

export const HeroSection = () => {
  return (
    <section className=" bg-black text-white overflow-hidden h-fit">
      <div
        className="
       flex flex-col items-center justify-center text-center px-4 py-20 pb-0"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Unlock The Power Of{" "}
          <span className="bg-gradient-to-r from-[#A78BFA] to-[#6366F1] bg-clip-text text-transparent">
            BotBuzz AI
          </span>
          <br />
          With Smartest AI
        </h1>

        <p className="text-gray-300 text-lg mt-6 max-w-xl">
          Your Personal AI, Tailored for Every Conversation, Anytime, Anywhere
        </p>

        <button className="mt-8 bg-[#A78BFA] hover:bg-[#8B5CF6] text-black px-8 py-3 rounded-xl font-semibold shadow-lg transition-colors">
          Start Conversation for free
        </button>

        <div className="flex items-center mt-4 space-x-2 text-sm text-gray-200">
          <img src="/Visa-icon.svg" alt="Visa Icon" className="w-5 h-5" />
          <span>No credit card required</span>
        </div>
        <div className="">
          <img
            src="/bots-ai-bg.svg" // Replace with your updated PNG path
            alt="Bots and Infinity"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
