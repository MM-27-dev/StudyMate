import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-24 pt-20 pb-10">
      <div className="flex flex-col md:flex-row justify-between gap-12 border-b border-gray-700 pb-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="bg-[#B5B5FF] w-10 h-10 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-2xl">🤖</span>
            </div>
            <p className="text-white text-xl font-semibold">BotBuzz</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-[#A1A1AA]">
              <li>
                <a href="#">Updates</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Pricing</h3>
            <ul className="space-y-2 text-[#A1A1AA]">
              <li>
                <a href="#">Basic Pricing Plan</a>
              </li>
              <li>
                <a href="#">Plus Pricing Plan</a>
              </li>
              <li>
                <a href="#">Teams Pricing Plan</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-2 text-[#A1A1AA]">
              <li>
                <a href="#">AI Personalities</a>
              </li>
              <li>
                <a href="#">Bot Buzz AI</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-[#A1A1AA]">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Others</h3>
            <ul className="space-y-2 text-[#A1A1AA]">
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-[#E4E4E7]">
        <p className="mb-4 md:mb-0">Copyright © 2025 . All rights reserved</p>
        <div className="flex gap-2">
          <button className="border border-[#3F3F46] text-white rounded-md px-3 py-1 text-xs">
            Socials
          </button>
          <button className="border border-[#3F3F46] text-white rounded-md px-3 py-1 text-xs">
            Botbuzz Community
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
