import React from "react";
import Video from "next-video";
import card from "@/videos/card.mp4";
import BallAnimation from "@/videos/BallAnimation.mp4";
 import Calculator from "@/videos/Calculator.mp4";
 import CurrencyConverter from "@/videos/CurrencyConverter.mp4";
 import navigate from "@/videos/navigate.mp4";
 import PetrolMeasuringTool from "@/videos/PetrolMeasuringTool.mp4";
const Project = () => {
  return (
    <>
      <div className="w-[1120px]  my-5 mx-auto  text-center ">
        <h1 className="border-[#00fff6] border-2 inline p-2 rounded-lg text-[20px] font-bold cursor-pointer hover:bg-[#00fff6] hover:text-black hover:text-[30px] transition duration-500">This is my Projects</h1>
      </div>
      <div className="w-[1120px] sm:overflow-x-hidden p-4 text-center text-[30px] border-[9px] border-[#00fff6] my-[10px] mx-auto grid lg:grid-cols-3 sm:grid-cols-1">
        <div className="m-3"> 
        <Video className="sm:w-full p-3 mx-auto cursor-pointer hover:border-2 hover:rounded-lg hover:border-[#00FFF6]"
          src={BallAnimation}/>
          <br />
          <p>
            Hi! This is my projct that is called Ball Animaton.In this project
            Iam using these laguages <br />
          </p >
            <button className="">HTML</button> <br />
            <button className="">CSS</button> <br />
          <a className="bg-[#00fff6] m-2 rounded-lg text-black p-2 font-extrabold" href="https://www.linkedin.com/posts/muhammad-daniyal-29140a2b6_hi-guys-iam-daniyal-iam-make-this-animation-activity-7232985659743911936-d1WY?utm_source=share&utm_medium=member_desktop" target="blank" > Read more </a>
        </div> 
        <div className="m-2">
        <Video className="sm:w-full p-3 mx-auto cursor-pointer hover:border-2 hover:rounded-lg hover:border-[#00FFF6]"
          src={Calculator}/>
          <br />
          <p>
            Hi! This is my projct that is called Fully Fuctional Calculator.In this project
            Iam using these laguages <br />
          </p >
            <button className="">HTML</button> <br />
            <button className="">CSS</button> <br />
            <button className="">Javascript</button> <br />
          <a className="bg-[#00fff6] m-2 rounded-lg text-black p-2 font-extrabold" href="https://www.linkedin.com/posts/muhammad-daniyal-29140a2b6_hi-iam-daniyal-i-make-this-calculator-app-activity-7237783407252901889-wfuP?utm_source=share&utm_medium=member_desktop" target="blank" > Read more </a>
        </div>
        <div className="m-2">
        <Video className="sm:w-full p-3 mx-auto cursor-pointer hover:border-2 hover:rounded-lg hover:border-[#00FFF6]"
          src={CurrencyConverter}/>
          <br />
          <p>
            Hi! This is my projct that is called Fully Fuctional Currency Convertor.In this project
            Iam using these laguages <br />
          </p >
            <button className="">HTML</button> <br />
            <button className="">CSS</button> <br />
            <button className="    ">Javascript</button> <br />
          <a className="bg-[#00fff6] m-2 rounded-lg text-black p-2 font-extrabold" href="https://www.linkedin.com/posts/muhammad-daniyal-29140a2b6_hi-iam-daniyal-i-make-this-currency-convertor-activity-7237483299357556737-Q7eJ?utm_source=share&utm_medium=member_desktop" target="blank" > Read more </a>
        </div>
        <div className="m-2">
        <Video className="sm:w-full p-3 mx-auto cursor-pointer hover:border-2 hover:rounded-lg hover:border-[#00FFF6]"
          src={PetrolMeasuringTool}/>
          <br />
          <p>
          🚗 Revolutionize Your Fuel Planning with My Petrol Measuring Tool! ⛽
            Hi! This is my projct that is called Fully Fuctional Petrol Measuring Tool!.In this project
            Iam using these laguages <br />    
          </p >
            <button className="">HTML</button> <br />
            <button className="">CSS</button> <br/>
            <button className="">Javascript</button> <br />
          <a className="bg-[#00fff6] m-2 rounded-lg text-black p-2 font-extrabold" href="https://www.linkedin.com/posts/muhammad-daniyal-29140a2b6_fuelsmart-techforimpact-fuelmanagement-activity-7242037665414426624-D2x1?utm_source=share&utm_medium=member_desktop" target="blank" > Read more </a>
        </div>
        <div className="m-2">
         <Video className="sm:w-full p-3 mx-auto cursor-pointer hover:border-2 hover:rounded-lg hover:border-[#00FFF6]"
          src={card}/>
          <br />
          <p>
          Student ID Card Component I successfully completed an engaging assignment in Next.js, where I built a dynamic Student ID Card component for three students.In this project
            Iam using these laguages <br />
          </p >
            <button className="">React & Next.js Components</button>
            <button className="">Props for dynamic data handling</button> <br/>
            <button className="">Tailwind CSS for beautiful and responsive design</button> <br />
          <a className="bg-[#00fff6] m-2 rounded-lg text-black p-2 font-extrabold" href="https://www.linkedin.com/posts/muhammad-daniyal-29140a2b6_nextjs-tailwindcss-webdevelopment-activity-7246930473887629312-M8IP?utm_source=share&utm_medium=member_desktop" target="blank" > Read more </a>
        </div>
        <div className="m-2">
        <Video className="sm:w-full p-3 mx-auto cursor-pointer hover:border-2 hover:rounded-lg hover:border-[#00FFF6]"
          src={navigate}/>
          <br />
          <p>
          For this Project, I built a multi-page website that includes:  Homepage, About Page, Contact Page and Footer Page.In this projec Iam using these laguages <br />
          </p >
            <button className="">Next.js</button>
             <br/>
            <button className="">Tailwind CSS for beautiful and responsive design</button> <br />
          <a className="bg-[#00fff6] m-2 rounded-lg text-black p-2 font-extrabold" href="https://www.linkedin.com/posts/muhammad-daniyal-29140a2b6_nextjs-react-webdevelopment-activity-7244718569844871168-mNU7?utm_source=share&utm_medium=member_desktop" target="blank" > Read more </a>
        </div>
      </div>
    </>
  );
};

export default Project;
