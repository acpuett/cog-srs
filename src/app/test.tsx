

import React from "react";
import Link from "next/link";

export default function TestNavbar() {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      <nav className="bg-black w-full h-24 flex items-center px-10">
        <div className="flex items-center gap-40 bg-yellow-200 p-4">
          <Link
            href="/"
            className="bg-red-500 text-white text-4xl font-extralight px-4 py-2"
          >
            COG-SRS
          </Link>
          <Link
            href="/patients"
            className="bg-green-500 text-white text-2xl px-4 py-2"
          >
            For Patients
          </Link>
          <Link
            href="/providers"
            className="bg-blue-500 text-white text-2xl px-4 py-2"
          >
            For Providers
          </Link>
        </div>
      </nav>
      <div className="p-10">Other content here</div>
    </div>
  );
}