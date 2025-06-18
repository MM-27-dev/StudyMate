import React from "react";
import {
  HiOutlineLightningBolt,
  HiOutlineNewspaper,
  HiOutlineUserGroup,
  HiOutlineRefresh,
  HiOutlineAdjustments,
  HiOutlineRss,
} from "react-icons/hi";

const features = [
  {
    icon: <HiOutlineLightningBolt className="text-[#A78BFA] text-3xl" />,
    title: "Effortless Content AI",
    desc: "Let our AI-powered service take the hard work out of content creation. Get started today with AI.",
  },
  {
    icon: <HiOutlineNewspaper className="text-[#A78BFA] text-3xl" />,
    title: "Real Time Web References",
    desc: "Access up-to-date information on any topic during your conversations with AI-Con.",
  },
  {
    icon: <HiOutlineAdjustments className="text-[#A78BFA] text-3xl" />,
    title: "Emotional Intelligence",
    desc: "Enhances the empathetic aspect of your interactions, making your conversations more meaningful.",
  },
  {
    icon: <HiOutlineUserGroup className="text-[#A78BFA] text-3xl" />,
    title: "Multiple Personalities",
    desc: "Ai-Con offers a variety of personalities for your AI companion, such as Explorer, Sage and more.",
  },
  {
    icon: <HiOutlineRefresh className="text-[#A78BFA] text-3xl" />,
    title: "Dynamic Suggestions",
    desc: "Ai-Con provides dynamic topic suggestions based on your interests and previous conversations.",
  },
  {
    icon: <HiOutlineRss className="text-[#A78BFA] text-3xl" />,
    title: "Personalized Responses",
    desc: "Personalization makes your interactions more engaging and tailored to your unique needs.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
          Instant Content Generation with AI
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg mb-14">
          Provide Descriptions, Get Instant AI Generated Content
        </p>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#0C0C0C] border border-[#A78BFA33] rounded-2xl p-6 shadow-[0px_20px_50px_#A78BFA33] hover:shadow-[0px_25px_60px_#A78BFA55] transition-all duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-white text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
