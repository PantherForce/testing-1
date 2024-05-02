import type { NextPage } from "next";
import Head from "next/head";

// Define the competency data type
type Competency = {
  title: string;
  description: string;
  contactText: string;
};

// Sample data for competencies
const competencies: Competency[] = [
  {
    title: "Advanced HR Technology Integratio",
    description:
      "Stay ahead of the curve with our cutting-edge technology solutions tailored specifically for HR professionals. From AI-powered recruitment tools to data analytics platforms, we provide a comprehensive suite of tools designed to enhance every aspect of the HR lifecycle.",
    contactText: "Contact us",
  },
  {
    title: "Candidate-Centric Approach",
    description:
      "Put the human back in HR with our candidate-centric approach. Behind every resume is a unique individual with their aspirations and ambitions. Our platform enables to create personalized experiences for candidates, from the application process to onboarding, fostering stronger connections and improving retention rates.",
    contactText: "Contact us",
  },
  {
    title: "Seamless Collaboration and Communication",
    description:
      "Break down silos and facilitate collaboration across organizations with our intuitive communication tools. From integrated messaging systems to collaborative project management platforms, we help you streamline communication and foster a culture of transparency and teamwork.",
    contactText: "Contact us",
  },
  {
    title: "Continuous Learning and Development",
    description:
      "Keep your HR teams ahead of the curve with our extensive library of resources and training materials. From webinars on the latest HR trends to online courses on emerging technologies, we provide the tools and knowledge your team needs to stay competitive in today's ever-evolving landscape.",
    contactText: "Contact us",
  },
];

const Competencies: NextPage = () => {
  return (
    <div id="services" className="px-4 py-8">
      <div className="mx-2 md:mx-52">
        <h1 className="text-3xl text-center mt-6  flex justify-center items-center font-bold mb-6 md:mb-12">
          Embracing HR Innovation with SmartSightHR
        </h1>
        <h1 className="text-xl text-center mt-6  flex justify-center items-center mb-6 md:mb-8">
          Navigate the complexities of modern HR with confidence, focusing on
          building meaningful connections and driving organizational success.
        </h1>
        <div className="grid shadow-lg  grid-cols-1 md:grid-cols-2 gap-6">
          {competencies.map((comp, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#282938] shadow-md rounded-lg p-6"
            >
              <h2 className="text-lg md:text-2xl font-semibold text-[#282938]">
                {comp.title}
              </h2>
              <p className="mt-4 text-gray-600">{comp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Competencies;
