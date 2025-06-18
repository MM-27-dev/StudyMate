import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/login");
  };

  const goHomePage = () => {
    navigate("/")
  }

  return (
    <nav className="bg-black text-white px-6 md:px-12 py-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2" onClick={goHomePage}>
          <img alt="logo-image" src="/logo.svg" className="w-8 h-8" />
          <span className="text-xl font-semibold">BotBuzz</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12 border border-gray-700 rounded-full px-10 py-3 text-lg transition-all">
          <a
            href="#"
            className="hover:text-[#A78BFA] transition-colors duration-300"
          >
            FAQ
          </a>
          <a
            href="#"
            className="hover:text-[#A78BFA] transition-colors duration-300"
          >
            Pricing
          </a>
          <a
            href="#"
            className="hover:text-[#A78BFA] transition-colors duration-300"
            onClick={handleSignUp}
          >
            Sign In
          </a>
        </div>

        {/* Get Started Button */}
        <div className="hidden md:block">
          <button className="bg-[#A78BFA] text-black px-5 py-2 rounded-lg font-medium hover:bg-[#8B5CF6] transition-colors duration-300">
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-start space-y-4 text-lg border-t border-gray-700 pt-4">
          <a
            href="#"
            className="hover:text-[#A78BFA] transition-colors duration-300"
          >
            FAQ
          </a>
          <a
            href="#"
            className="hover:text-[#A78BFA] transition-colors duration-300"
          >
            Pricing
          </a>
          <a
            href="#"
            className="hover:text-[#A78BFA] transition-colors duration-300"
          >
            Sign In
          </a>
          <button className="mt-2 bg-[#A78BFA] text-black px-4 py-2 rounded-lg font-medium hover:bg-[#8B5CF6] transition-all duration-300">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
