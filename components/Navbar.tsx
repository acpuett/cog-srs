import Link from "next/link"
import React from 'react'


const Navbar = () => {
  return (
  <nav className="bg-black max-w-screen fixed w-full h-24">

      <div className="max-w-screen-xl flex flex-wrap justify-between items-center h-full w-full">

        <div className="text-white text-4xl font-extralight"> <Link href="/"> COG-SRS </Link> </div>
        <div className="text-white text-2xl hover:text-gray-50"> <Link href="/patients"> For Patients</Link> </div>
        <div className="text-white text-2xl hover:text-gray-50"> <Link href="/providers"> For Providers </Link></div>
        <div className="text-white text-l"> About </div>
        <div className="text-white text-l"> Help </div>
        <div className="text-white text-l">Sign In</div>
        <div className="text-white text-l">Register</div>

      </div> 
 </nav>
  );
};

export default Navbar;
