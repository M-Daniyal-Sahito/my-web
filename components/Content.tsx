import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { RiDiscordLine } from "react-icons/ri";
import { FaSquareGithub } from "react-icons/fa6";

const Content = () => {
  return (
    <div className="sm:overflow-x-hidden flex flex-col items-center justify-between mx-auto border-8 border-[#00FFF6] rounded-br-[150px] p-6 h-auto w-[1120px]">
      {/* Profile Picture */}
      <div className=" w-[200px] h-[200px] md:w-[300px] md:h-[300px] border-[11px] border-[#00FFF6] rounded-full bg-cover bg-center bg-no-repeat shadow-[0_0_80px_rgba(0,255,246,0.8)] mb-6 md:mb-0"
        style={{ backgroundImage: "url('/heacker.jpg')" }}
      ></div>

      {/* Text Section */}
      <div className=" text-center bg-transparent justify-center flex flex-col items-center mt-2 ">
        <h1 className=" text-[35px] font-['Timmana'] bg-transparent">
          Hello! <span className="text-[#00FFF6] bg-transparent">I'm Daniyal,</span>
        </h1>
        <p className=" text-[30px] font-['Timmana'] mt-4 bg-transparent">
          I specialize in creating responsive and modern websites using HTML,
          CSS, JavaScript, Typescript, Tailwind css and Next.js. My focus is on clean code and
          user-friendly design. Explore my portfolio to see my latest work.
        </p>
      </div>

      {/* Social Media Icons */}
      <div className=" flex justify-center gap-4 mt-6 ">
        <a
          href="https://www.linkedin.com/in/muhammad-daniyal-29140a2b6/"
          target="_blank"
          className="text-white text-4xl  transition-colors duration-300 hover:text-[#00FFF6] hover:scale-125 hover:border-2 hover:border-[#00FFF6]"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://discord.com/channels/@me"
          target="_blank"
          className="text-white text-4xl transition-colors duration-300 hover:text-[#00FFF6] hover:scale-125 hover:border-2 hover:border-[#00FFF6]"
        >
          <RiDiscordLine />
        </a>
        <a
          href="https://github.com/M-Daniyal-Sahito"
          target="_blank"
          className="text-white text-4xl transition-colors duration-300 hover:text-[#00FFF6] hover:scale-125 hover:border-2 hover:border-[#00FFF6]"
        >
          <FaSquareGithub />
        </a>
      </div>
    </div>
  );
};

export default Content;
