import React from "react";
import Image from "next/image";
import img from "../public/img/lets.svg";

const Bottom = () => {
  return (
    <div id="about" className="md:mx-52 mt-6 mx-10 mb-4 md:mb-10">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2 w-full">
          <h1 className="md:text-5xl text-xl font-bold text-[#383A68]">
            Have questions or
            <br /> need assistance?
          </h1>
          {/* <div className="bg-[#1C1E53] flex-col gap-6 justify-center items-center w-[600px] h-[300px]">
            <h1 className="text-white font-bold text-2xl">Lets Talk!</h1>
            <p className="text-white font-medium">
              We are always open to discuss your requiremtns and giving you
              solution.,
            </p>
            <button className="bg-[#FCD980] px-3 py-3">Contact Us</button>
          </div> */}
        </div>
        <div className="md:w-1/2 w-full">
          <div className="flex flex-col md:gap-6">
            <h1 className="text-sm mt-4 md:mt-0 md:text-xl">
              SmartSightHR invites you to redefine the landscape of human
              resources. Join us in embracing the future with solutions that
              blend innovation with insight, tailoring your HR practices to be
              more agile, strategic, and responsive to the evolving workforce
              dynamics.
            </h1>
            <p className="text-lg">
              We are eager to explore how together we can take your HR functions
              to the pinnacle of industry standards. Reach out to us, and let’s
              initiate a partnership that transforms your HR landscape into a
              beacon of excellence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
