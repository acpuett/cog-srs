'use client'
import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'
import Image, { StaticImageData } from "next/image";


//POST-OP IMAGES
import Mem1 from "../../../public/MEM1.png"
import Lang1 from "../../../public/LANG1.png"
import Speed1 from "../../../public/SPEED1.png"
import Motor1 from "../../../public/MOTOR1.png"

//INTACT IMAGES
import Mem2 from "../../../public/MEM1.png"
import Speed2 from "../../../public/SPEED2.png"

//ARTERIOVENOUS IMAGES
import Mem3 from "../../../public/MEM3.png"
import Lang3 from "../../../public/LANG3.png"
import Exec3 from "../../../public/EXEC3.png"

// make them types, declare it here FIRST
type PostOpOption = 
  | "Memory-Sparing" 
  | "Language-Sparing" 
  | "Attention/Processing Speed-Sparing" 
  | "Motor-Sparing";

type IntactOption = 
  | "Memory-Sparing" 
  | "Attention/Processing Speed-Sparing";

type AvmOption = 
  | "Memory-Sparing" 
  | "Language-Sparing" 
  | "Executive Function-Sparing";


const Home = () => {
  const [selectedButton, setSelectedButton] = useState("scientificData");

  // Dropdown state
  const [selectedOptions, setSelectedOptions] = useState<{
    postOp: PostOpOption | "";
    intact: IntactOption | "";
    avm: AvmOption | "";
  }>({
    postOp: "",
    intact: "",
    avm: "",
  });

  // Image mapping for each dropdown, add in the ss later 
  const images: {
    postOp: Record<PostOpOption, StaticImageData>;
    intact: Record<IntactOption, StaticImageData>;
    avm: Record<AvmOption, StaticImageData>;
  } = {
    postOp: {
      "Memory-Sparing": Mem1,
      "Language-Sparing": Lang1,
      "Attention/Processing Speed-Sparing": Speed1,
      "Motor-Sparing": Motor1,
    },
    intact: {
      "Memory-Sparing": Mem2,
      "Attention/Processing Speed-Sparing": Speed2,
    },
    avm: {
      "Memory-Sparing": Mem3,
      "Language-Sparing": Lang3,
      "Executive Function-Sparing": Exec3,
    },
  };

 
  const renderContent = () => {
    switch (selectedButton) {
      case "scientificData":
        return (
          <div className="flex justify-center items-start mb-4">
            <div className="max-w-7xl w-full px-16 pt-12">
              <h2 className="text-4xl text-white font-bold mb-12 text-left">
                How to create a COG-SRS plan - Overview
              </h2>

              <div className="text-white text-xl leading-relaxed space-y-10">
                <p className="italic">
                  COG-SRS is a radiosurgical planning approach that selectively
                  reduces dose to cognition-critical structures while maintaining
                  target coverage and respecting all standard safety constraints.
                </p>

                <div>
                  <h3 className="text-3xl text-amber-400 font-semibold mb-4">
                    Pre-Planning Imaging & Data
                  </h3>
                  <ul className="list-disc list-inside space-y-3">
                    <li>
                      <strong>Baseline MRI:</strong> High resolution T1w pre/post
                      contrast, T2/FLAIR, DTI (for tractography), and optional
                      perfusion/ASL.
                    </li>
                    <li>
                      <strong>MR quality checks:</strong> Appropriate management of
                      motion, gradient nonlinearities, bias fields, eddy currents, and
                      B0 inhomogeneities.
                    </li>
                    <li>
                      <strong>Planning CT:</strong> Standard immobilization and
                      simulation procedures.
                    </li>
                    <li>
                      <strong>Registration:</strong> Rigid registration of MRI → CT
                      with QA checks.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-3xl text-yellow-300 font-semibold mb-4">
                    Structure Identification
                  </h3>
                  <ul className="list-disc list-inside space-y-3">
                    <li>
                      <strong>Targets:</strong> GTV/CTV/PTV per institutional policy
                      and pathology.
                    </li>
                    <li>
                      <strong>OARs:</strong> Cognition-critical structures include the
                      hippocampi and eloquent white matter tracts (can be tailored to
                      tumor location). Additional standard OARs per institutional
                      guidelines.
                    </li>
                    <li>
                      <strong>Derivation:</strong> Automated segmentation including
                      DTI-based tractography with neuroradiology review.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-3xl text-amber-100 font-semibold mb-4">
                    Planning & Optimization
                  </h3>
                  <ul className="list-disc list-inside space-y-3">
                    <li>
                      <strong>Technique:</strong> Typically, volumetric modulated arc
                      therapy.
                    </li>
                    <li>
                      <strong>Prioritization:</strong> PTV coverage and standard OAR
                      metrics per institutional policy followed by cognitive-sparing
                      reductions.
                    </li>
                    <li>
                      <strong>Iterate:</strong> DVH-guided replanning for
                      optimization.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

        // remember the image properties is where you tweak the sizing in the box plus the first line to make it stacked

      case "comparePlans":
        return (
          <div className="p-6">
            <h2 className="text-4xl font-bold mb-6 text-white">Comparing COG-SRS Plans</h2>
            <p className="mb-4 text-gray-300">
              Select sparing options for each category below to see the corresponding plan images.
            </p>

            <div className="space-y-12">
              <div className="p-6 border rounded-xl shadow-sm bg-gray-900">
                <h3 className="text-xl font-semibold mb-4 text-green-300">
                  Post-Op Brain Metastasis </h3>

                <select
                  className="w-full p-2 border rounded-md"
                  value={selectedOptions.postOp}
                  onChange={(e) =>
                    setSelectedOptions({ ...selectedOptions, postOp: e.target.value as PostOpOption })
                  }
                >
                  <option value="">Select an option</option>
                  <option value="Memory-Sparing">Memory-Sparing</option>
                  <option value="Language-Sparing">Language-Sparing</option>
                  <option value="Attention/Processing Speed-Sparing">
                    Attention/Processing Speed-Sparing
                  </option>
                  <option value="Motor-Sparing">Motor-Sparing</option>
                </select>

                {selectedOptions.postOp && (
                  <div className="mt-6">
                    <Image
                      src={images.postOp[selectedOptions.postOp]}
                      alt={`Post-Op ${selectedOptions.postOp}`}
                      className="object-contain w-full max-h-96 rounded-md"
                    />
                  </div>
                )}
              </div>

    
              <div className="p-6 border rounded-xl shadow-sm bg-gray-900">
                <h3 className="text-lg font-semibold mb-4 text-lime-400">
                  Intact Brain Metastasis</h3>
                <select
                  className="w-full p-2 border rounded-md"
                  value={selectedOptions.intact}
                  onChange={(e) =>
                    setSelectedOptions({ ...selectedOptions, intact: e.target.value as IntactOption })
                  }
                >
                  <option value="">Select a sparing type</option>
                  <option value="Memory-Sparing">Memory-Sparing</option>
                  <option value="Attention/Processing Speed-Sparing">
                    Attention/Processing Speed-Sparing
                  </option>
                </select>

      
                {selectedOptions.intact && (
                  <div className="mt-6">
                    <Image
                      src={images.intact[selectedOptions.intact]}
                      alt={`Intact ${selectedOptions.intact}`}
                      className="object-contain w-full max-h-96 rounded-md"
                    />
                  </div>
                )}
              </div>

              <div className="p-6 border rounded-xl bg-gray-900 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 text-emerald-400">
                  Arteriovenous Malformation</h3>
                <select
                  className="w-full p-2 border rounded-md"
                  value={selectedOptions.avm}
                  onChange={(e) =>
                    setSelectedOptions({ ...selectedOptions, avm: e.target.value as AvmOption })
                  }
                >
                  <option value="">Select an sparing type</option>
                  <option value="Memory-Sparing">Memory-Sparing</option>
                  <option value="Language-Sparing">Language-Sparing</option>
                  <option value="Executive Function-Sparing">Executive Function-Sparing</option>
                </select>


                {selectedOptions.avm && (
                  <div className="mt-6">
                    <Image
                      src={images.avm[selectedOptions.avm]}
                      alt={`AVM ${selectedOptions.avm}`}
                      className="object-contain w-full max-h-96 rounded-md"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case "createPlans":
        return <p className="text-white">Placeholder for How To Create COG-SRS Plans</p>;

      case "resources":
        return <p className="text-white">Placeholder for Resources for Your Patients</p>;

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="border-t border-white"></div>

    <div className="flex flex-1 flex-col md:flex-row">
  <div className="w-full md:w-1/5 p-4 flex flex-col justify-center space-y-8">
          <button
            className="text-white text-2xl w-full text-center p-6 bg-lime-500 rounded"
            onClick={() => setSelectedButton("scientificData")}
          >
            How to Create COG-SRS Plans
          </button>
          <button
            className="text-white text-2xl w-full text-center p-6 bg-sky-400 rounded"
            onClick={() => setSelectedButton("comparePlans")}
          >
            Comparing COG-SRS Plans
          </button>
        </div>
        <div className="flex-1 p-4 bg-black overflow-x-auto">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Home;