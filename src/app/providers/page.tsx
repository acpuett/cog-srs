'use client'
import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'

const Home = () => {
  const [selectedButton, setSelectedButton] = useState('scientificData');

  const renderContent = () => {
    switch (selectedButton) {
      case 'scientificData':
        return (
          <div className="flex justify-between items-center mb-4">
            <div className="flex-1 mr-4">
              <div className="p-4 h-full">
                {/* Replace with actual search stuff */}
                <div className="mb-4">
                  <h2 className="text-lg font-semibold">Search For A Case</h2>
                  <div className="grid grid-cols-1 gap-4">
                    <select className="border p-2 rounded">
                      <option>Location</option>
                    </select>
                    <select className="border p-2 rounded">
                      <option>Number</option>
                    </select>
                    <select className="border p-2 rounded">
                      <option>Domain(s) to Spare</option>
                    </select>
                    <select className="border p-2 rounded">
                      <option>Sparing Level</option>
                    </select>
                  </div>
                </div>
                {/* Static image placeholders */}
                <div className="flex justify-between">
                  <div className="w-1/2">
                    <h2 className="text-lg font-semibold">DVH Comparison</h2>
                    <div className="border p-4 rounded h-48 flex items-center justify-center">
                      {/* Image Placeholder */}
                      <span className="text-gray-500">DVH Graph</span>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <h2 className="text-lg font-semibold">Comparison</h2>
                    <div className="flex justify-between">
                      <div className="w-1/2 border p-4 rounded h-48 flex items-center justify-center">
                        {/* Image Placeholder */}
                        <span className="text-gray-500">Standard SRS</span>
                      </div>
                      <div className="w-1/2 border p-4 rounded h-48 flex items-center justify-center">
                        {/* Image Placeholder */}
                        <span className="text-gray-500">COG-SRS</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h2 className="text-lg font-semibold">Summary</h2>
                  <p>
                    Using medium-level cognitive-sparing approach lowered the D0.03cc to the R IFOF and R Unc Fascic with little effect on the Target
                  </p>
                </div>
              </div>
            </div>
            <button className="bg-blue-500 text-white p-4 rounded">Analyze Further</button>
          </div>
        );
      case 'comparePlans':
        return <p className="text-white">Placeholder for Compare Cognitive-Sparing Plans</p>;
      case 'createPlans':
        return <p className="text-white">Placeholder for How To Create COG-SRS Plans</p>;
      case 'resources':
        return <p className="text-white">Placeholder for Resources for Your Patients</p>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <div className="w-1/5 p-4 space-y-4">
          <button
            className="text-white txt-3xl w-full text-left p-4 bg-lime-400 rounded h-1/5"
            onClick={() => setSelectedButton('scientificData')}
          >
            Scientific Data for Cognitive-Sparing SRS
          </button>
          <button
            className="text-white w-full text-left p-4 bg-lime-500 rounded h-1/5"
            onClick={() => setSelectedButton('comparePlans')}
          >
            Compare Cognitive-Sparing Plans
          </button>
          <button
            className="text-white w-full text-left p-4 bg-emerald-400 rounded h-1/5"
            onClick={() => setSelectedButton('createPlans')}
          >
            How To Create COG-SRS Plans
          </button>
          <button
            className="text-white w-full text-left p-4 bg-cyan-500 rounded h-1/5"
            onClick={() => setSelectedButton('resources')}
          >
            Resources for Your Patients
          </button>
        </div>
        <div className="flex-1 p-4 bg-black">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Home;