import React from "react";

const JoinCommunity = () => {
  return (
    <section className="bg-black px-4 md:px-10 py-16">
      <div className="max-w-4xl mx-auto rounded-2xl border border-[#2D2D2D] bg-gradient-to-br from-[#121212] to-[#0D0D0D] text-center px-6 py-12 shadow-[2px_-9px_12px_rgba(255,255,255,0.15),_-3px_0px_4px_rgba(255,255,255,0.15),_2px_4px_5px_rgba(255,255,255,0.15)]">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
          Join Our Community
        </h2>
        <p className="text-[#87878e] text-sm md:text-base max-w-2xl mx-auto mb-6">
          At Bot Buzz, We Value Connection And Shared Experiences. Join Our
          Vibrant Community To Enhance Your Daily Interactions With AI, Share
          Stories, Exchange Tips, And Discover New Ways To Maximize Your AI-Con
          Experience.
        </p>
        <button className="border border-[#ccccda] text-[#b7b7be] text-xs px-6 py-2 rounded-full hover:bg-[#B5B5FF] hover:text-black transition-all">
          Join Community
        </button>
      </div>
    </section>
  );
};

export default JoinCommunity;
