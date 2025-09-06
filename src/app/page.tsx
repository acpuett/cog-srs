import Link from "next/link";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import brainpic from "../../public/Picture2.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>COG-SRS</title>
      </Head>
      <Navbar />
      <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white">
        <div className="flex flex-col md:flex-row items-center justify-center w-full px-10 py-10">
          <Image src={brainpic} width={450} height={450} alt="brain pic" className="mb-10 md:mb-0" />
          <div className="flex flex-col items-start text-left md:ml-10">
            <h1 className="text-7xl font-extralight mb-4">Welcome to COG-SRS</h1>
            <p className="text-2xl mb-10">Cognitive-Sparing Stereotactic Radiosurgery</p>
            <div className="space-y-4">
              <p className="text-2xl">____________________________________________________________</p>
              <p className="text-4xl text-blue-200">Target the tumor. Protect what matters.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center text-4xl font-bold pt-6 px-80">
          <div className="text-white text-center py-10 px-10 border rounded-md bg-blue-400 border-blue-400 hover:bg-blue-500 m-5">
            <Link href="/patients">Resources for Patients</Link>
          </div>
          <div className="text-white text-center py-10 px-10 border rounded-md bg-blue-400 border-blue-400 hover:bg-blue-500 m-5">
            <Link href="/providers">Resources for Providers</Link>
          </div>
        </div>
      </div>
    </>
  );
}


