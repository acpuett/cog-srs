'use client'
import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'
import Image from "next/image";
import Patient2 from "../../../public/Patient2.png"
import Patient3 from "../../../public/Patient3.png"
import Patient4 from "../../../public/Patient4.png"
import PatientBrain from "../../../public/PatientBrain.png"

const Page = () => {
  const [activeSection, setActiveSection] = useState('basics');

  const sections = ['basics', 'imaging', 'mapping'];

  const handleNext = () => {
    const currentIndex = sections.indexOf(activeSection);
    const nextIndex = (currentIndex + 1) % sections.length;
    setActiveSection(sections[nextIndex]);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'basics':
        return (
          <div className="space-y-10">
            
            <p className="text-5xl italic mt-4 text-bold text-teal-200">
             What is Cognitive-Sparing SRS?
            </p>
            <p className="text-3xl mt-4">
              Stereotactic radiosurgery (SRS) is a precise form of radiation that treats brain tumors in one to a few sessions. 
              Cognitive-sparing SRS adds extra planning steps to lower radiation to areas important for memory, 
              language, movement, and thinking – when it’s safe to do so.
            </p>

            <p className="text-5xl mt-4 italic text-bold text-teal-200">
              Why it matters
            </p>
            <p className="text-3xl mt-4">
            Memory, language, movement, and thinking depend on brain networks. By carefully
            shaping the radiation dose, we aim to protect these networks while still treating the tumor.
            </p>


          </div>
        );
      case 'imaging':
        return (
          <div className="space-y-5">

     <p className="text-4xl text-blue-300 text-bold italic">
              Before  </p>
          
            <p className="text-2xl">
            Planning scans: You’ll have an MRI and a planning CT so we can map your brain networks and the
            tumor precisely. </p>
            <p className="text-2xl"> Mask fitting: A custom mask helps you stay still during treatment.</p>
             <p className="text-2xl"> Discussion: We’ll explain the plan during a consultation visit, including how we try to protect important
            areas of the brain. </p>


      <p className="text-4xl text-bold text-blue-400 italic">
              During </p> 
            
            <p className="text-2xl"> Setup: We use 3D imaging to ensure accurate positioning and treatment. </p>
            <p className="text-2xl"> Treatment: Typically lasts on the order of minutes. You will not feel the radiation, 
            and you are not radioactive after treatment.</p>

    <p className="text-4xl text-blue-500 text-bold italic">
              After </p> 

             <p className="text-2xl"> You can go home immediately after treatment. </p>
              <p className="text-2xl"> Your radiation oncologist will review possible side effects in detail. Mild fatigue or temporary
                symptoms from swelling can occur, but serious side effects are rare. </p>
               <p className="text-2xl"> Follow-up visits and MRI scans help us track results.</p>


          </div>

        );
      case 'mapping':
        return (
          <div>
            <div className="float-right ml-8 mb-4">
              <Image src={PatientBrain} width={450} height={450} alt="PatientBrain" />
            </div>
            <div className="space-y-5">


  <p className="text-5xl text-green-300 text-bold italic">
              Possible Benefits  </p>
    
            <p className="text-2xl">
            COG-SRS treats the tumor with very precise radiation. </p>
            <p className="text-2xl"> Aims to reduce dose to brain regions that are critical for everyday function
            (thinking, memory, movement, and language).</p>
      

  <p className="text-5xl text-teal-300 text-bold italic">
              Uncertainties  </p>
          
            <p className="text-2xl">
         Cognitive-sparing may not be possible if the tumor lies within a critical area. </p>
            <p className="text-2xl"> Cognition can be influenced by other factors – such as medications, prior
          surgery, or the tumor itself.</p>
   
             </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
            <div className="border-t border-white"></div>
         <div className="flex flex-col md:flex-row bg-black text-white h-screen p-8">
       <div className="flex flex-col md:w-2/5 space-y-8 pr-8 justify-center h-full">
          <div className="flex items-center space-x-4">
            <Image
              src={Patient4}
              width={200}
              height={200}
              alt="Patient4"
              onClick={() => setActiveSection('basics')}
              className="cursor-pointer"
            />
            <div className="bg-green-400 border border-white p-10 flex-grow cursor-pointer" onClick={() => setActiveSection('basics')}>
              <span className="text-4xl font-light">What is Cognitive-Sparing SRS?</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-lime-400 border border-white p-12 flex-grow cursor-pointer" onClick={() => setActiveSection('imaging')}>
              <span className="text-4xl text-center font-light">What to expect before/during/after?</span>
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
              <span className="text-4xl font-light">Benefits & Uncertainties</span>
            </div>
          </div>
        </div>

       <div className="md:w-3/5 p-8 flex flex-col space-y-10 justify-center h-full relative">
          <div className="relative z-10 flex flex-col space-y-4">
            {renderContent()}
            <button onClick={handleNext} className="self-start bg-blue-500 text-white p-4 rounded text-4xl mt-8">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
