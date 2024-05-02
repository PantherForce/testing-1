import Image from "next/image";

import ContentContainer from "./ContentContainer";
const SectionOne = () => {
  return (
    <div className="relative h-screen md:h-screen text-white">
      <Image
        src="/img/hero-smart.svg"
        layout="fill"
        objectFit="contain"
        objectPosition="center"
        alt="Background"
      />

      <ContentContainer>
        <div className="absolute inset-0  bg-opacity-30" />
        <div className="absolute px-4 md:px-20 inset-0 w-full md:w-[800px] flex flex-col justify-center items-left p-4 text-left">
          <h1 className="md:text-5xl text-white text-lg text-left font-bold mb-4">
            Navigate Your Talent Search with Candidate Compass
          </h1>
          <p className="mb-6 text-lg text-white">
            Discover people, not just profiles, for a superior candidate
            experience
          </p>

          {/* <button className="bg-[#0CB865] items-start font-bold md:py-4 md:px-4 px-2 py-2 rounded  transition duration-300">
            Start Navigating Today
          </button> */}
        </div>
      </ContentContainer>
    </div>
  );
};

export default SectionOne;
