import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black fixed max-w-screen w-full h-24">
      <div className="flex flex-center justify-center items-center h-full">
        <div className="text-white text-4xl font-extralight">
          <Link href="/">COG-SRS</Link>
        </div>
        <div className="text-black">______________________________________ </div>
        <div className="text-blue-200 text-2xl hover:text-gray-50">
          <Link href="/patients">For Patients</Link>
        </div>
        <div className="text-black">______________________________________</div>
        <div className="text-blue-200 text-2xl hover:text-gray-50">
          <Link href="/providers">For Providers</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;