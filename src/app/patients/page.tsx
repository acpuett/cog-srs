'use client'
import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'
import Image from "next/image";
import Patient1 from "../../../public/Patient1.png"
import Patient2 from "../../../public/Patient2.png"
import Patient3 from "../../../public/Patient3.png"
import Patient4 from "../../../public/Patient4.png"
import PatientBrain from "../../../public/PatientBrain.png"

const Page = () => {
  const [activeSection, setActiveSection] = useState('basics');

  const sections = ['basics', 'imaging', 'mapping', 'sparing'];

  const handleNext = () => {
    const currentIndex = sections.indexOf(activeSection);
    const nextIndex = (currentIndex + 1) % sections.length;
    setActiveSection(sections[nextIndex]);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'basics':
        return (
          <div>
            <div className="float-right ml-8 mb-4">
              <Image src={PatientBrain} width={500} height={500} alt="PatientBrain" />
            </div>
            <p className="text-3xl">
              MRI (Magnetic Resonance Imaging) is a medical imaging technique that helps doctors visualize tumors in the brain. It works by using a strong magnetic field and radio waves to create detailed images of the brain’s internal structures.
            </p>
            <p className="text-3xl mt-4">
              Tumors in the brain have different characteristics than healthy brain tissue. Manipulating the magnetic field allows MRIs to generate images that show the differences between tumor tissue and surrounding healthy brain tissue.
            </p>
            <p className="text-3xl mt-4">
              The detailed and high-resolution images produced by MRI help doctors to plan treatments.
            </p>
          </div>
        );
      case 'imaging':
        return (
          <div>
            <div className="float-right ml-8 mb-4">
              <Image src={PatientBrain} width={500} height={500} alt="PatientBrain" />
            </div>
            <p className="text-3xl">
              Placeholder text for Imaging the Brain.
            </p>
          </div>
        );
      case 'mapping':
        return (
          <div>
            <div className="float-right ml-8 mb-4">
              <Image src={PatientBrain} width={500} height={500} alt="PatientBrain" />
            </div>
            <p className="text-3xl">
              Placeholder text for Mapping Brain Functions.
            </p>
          </div>
        );
      case 'sparing':
        return (
          <div>
            <div className="float-right ml-8 mb-4">
              <Image src={PatientBrain} width={500} height={500} alt="PatientBrain" />
            </div>
            <p className="text-3xl">
              Placeholder text for The Functional Sparing Approach.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row bg-black text-white h-screen p-8">
        <div className="flex flex-col md:w-2/5 space-y-8 pr-8">
          <div className="flex items-center space-x-4">
            <Image
              src={Patient1}
              width={200}
              height={200}
              alt="Patient1"
              onClick={() => setActiveSection('basics')}
              className="cursor-pointer"
            />
            <div className="bg-green-400 border border-white p-10 flex-grow cursor-pointer" onClick={() => setActiveSection('basics')}>
              <span className="text-4xl font-light">Basics of Brain Radiotherapy</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-green-500 border border-white p-12 flex-grow cursor-pointer" onClick={() => setActiveSection('imaging')}>
              <span className="text-4xl text-center font-light">Imaging the Brain</span>
            </div>
            <Image
              src={Patient2}
              width={200}
              height={200}
              alt="Patient2"
              onClick={() => setActiveSection('imaging')}
              className="cursor-pointer"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Image
              src={Patient3}
              width={200}
              height={200}
              alt="Patient3"
              onClick={() => setActiveSection('mapping')}
              className="cursor-pointer"
            />
            <div className="bg-teal-400 border border-white p-12 flex-grow cursor-pointer" onClick={() => setActiveSection('mapping')}>
              <span className="text-4xl font-light">Mapping Brain Functions</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-blue-400 border border-white p-8 flex-grow cursor-pointer" onClick={() => setActiveSection('sparing')}>
              <span className="text-4xl font-light">The Functional Sparing Approach</span>
            </div>
            <Image
              src={Patient4}
              width={200}
              height={200}
              alt="Patient4"
              onClick={() => setActiveSection('sparing')}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="md:w-3/5 p-8 flex flex-col space-y-8 relative">
          <div className="relative z-10 flex flex-col space-y-4">
            {renderContent()}
            <button onClick={handleNext} className="self-start bg-blue-500 text-white p-4 text-4xl mt-8">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
