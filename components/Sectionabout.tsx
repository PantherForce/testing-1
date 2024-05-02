import React from "react";
import Image from "next/image";
import img from "../public/img/Picture.svg";

const Sectionabout = () => {
  return (
    <div id="about" className="md:mx-52 mt-4 md:mt-8 mx-10 mb-4 md:mb-10">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2 w-full">
          <Image
            className="rounded-3xl object-cover md:w-[400px] 2xl:w-[550px] h-[450px]"
            src={img}
            alt=""
          />
        </div>
        <div className="md:w-1/2 w-full">
          <div className="flex flex-col md:gap-12">
            <h1 className="text-xl mt-4 md:mt-0 md:text-3xl font-bold">
              About Us
            </h1>
            <p className="text-lg">
              At SmartSightHR, we are dedicated to revolutionizing the HR
              landscape by harnessing the power of technology to augment the
              human aspect of HR. Our platform is designed to equip HR
              professionals with the latest tools and trends, enabling them to
              streamline their processes, elevate the candidate experience, and
              focus on what truly matters – the people.  With SmartSightHR,
              unlock the full potential of your HR strategy and create
              meaningful connections that drive organizational success.
            </p>
            <p className="text-[#2405F2] text-xl">Contact us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectionabout;
