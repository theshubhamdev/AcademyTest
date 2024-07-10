"use client";

import Modules from "@/components/Academy/Modules";
import BonusPointsOpenCard from "@/components/BonusPointsOpenCard";
import CertificateOpenCard from "@/components/CertificateOpenCard";
import { CourseStructureCard } from "@/components/CourseStructureCard";
import Navbar from "@/components/Navabar";
import RewardTimerCard from "@/components/RewardTimerCard";
import { Button } from "@/components/ui/button";
import { MODULE_1, MODULE_2 } from "@/data";
import Image from "next/image";
import Xarrow from "react-xarrows";

export default function Home() {
  return (
    <main className="flex bg-black min-h-screen flex-col items-center overflow-y-hidden">
      <div className="fixed z-20 bg-black px-24 pt-4 border-b flex border-gray-300 w-full font-mono text-sm lg:flex">
        <Image
          src="/logo.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
        <Navbar />
      </div>
      <div className="flex flex-col p-40">
        <div className="flex flex-col items-center z-10">
          <div className="">
            <h4 className="text-white">Intract</h4>
            <h2 className="text-white text-4xl italic border-b">Academy</h2>
          </div>
          <br />
          <h4 className="py-2 text-gray-400">
            <span className="text-white">Intract users</span> have together made
            more than <span className="text-white">$100 million</span> in web3
          </h4>
          <h4 className="text-gray-400">
            Join them and
            <span className="text-white"> learn how to earn crypto</span>
          </h4>
        </div>
        <Button className="self-center px-12 my-10 z-10 opacity-70 bg-purple-600  text-white">
          Get Started →
        </Button>
        <Image
          className="absolute left-0 top-10"
          src="/bg-home.png"
          alt="Next.js Logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100vw", height: "auto" }}
          priority
        />
      </div>
      <Modules />
    </main>
  );
}
