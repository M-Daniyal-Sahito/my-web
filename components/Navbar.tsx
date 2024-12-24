"use client";
import React, { useState } from "react";
import Image from "next/image";


interface NavbarProps {
  scrollToProject: () => void;
  scrollToContact: () => void;
  hideSections: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToProject, scrollToContact, hideSections }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:overflow-x-hidden h-[127px] w-[1000px] my-3 mx-auto flex items-center justify-between relative">
      {/* Logo on the Left */}
      <div className="flex items-center">
        <Image src="/logo.png"
        alt="logo"
        width={92}
        height={92}
        className="w-[92px] h-[92px] m-4 rounded-full" 
        ></Image>
        <span className="text-white text-[40px] font-bold italic font-cursive">
          Daniyals Web
        </span>
      </div>

      {/* Hamburger Icon on the Right */}
      <div
        className="hamburger flex flex-col gap-1 cursor-pointer md:hidden m-2 "
        onClick={toggleNavbar}
      >
        <span className="block w-8 h-1 bg-white"></span>
        <span className="block w-8 h-1 bg-white"></span>
        <span className="block w-8 h-1 bg-white"></span>
      </div>

      {/* Navbar Links */}
      <div
        className={`links md:flex md:items-center md:space-x-6 md:static  ${
          isOpen
            ? "absolute top-0 right-0 h-auto p-2 sm:bg-none flex flex-col items-center space-y-6 py-6 z-50"
            : "hidden"
        }`}
      >
        <ul className="list-none flex flex-col md:flex-row justify-center items-center md:space-y-0 space-y-6 text-white sm:text-[30px] gap-7">
          <li>
            <a
              href="#Home"
              className="text-[30px] font-sans relative transition-colors duration-500 hover:text-[#00FFF6] after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-[#00FFF6] after:bottom-[-6px] after:left-0 after:rounded-[15px] after:transition-all after:duration-500 hover:after:w-full"
              onClick={() => {
                hideSections();
                toggleNavbar();
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#my-project"
              className="text-[30px] font-sans relative transition-colors duration-500 hover:text-[#00FFF6] after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-[#00FFF6] after:bottom-[-6px] after:left-0 after:rounded-[15px] after:transition-all after:duration-500 hover:after:w-full"
              onClick={() => {
                scrollToProject();
                toggleNavbar();
              }}
            >
              Project
            </a>
          </li>
          <li>
            <a
              href="#contact-section"
              className="text-[30px] font-sans relative transition-colors duration-500 hover:text-[#00FFF6] after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-[#00FFF6] after:bottom-[-6px] after:left-0 after:rounded-[15px] after:transition-all after:duration-500 hover:after:w-full"
              onClick={() => {
                scrollToContact();
                toggleNavbar();
              }}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
