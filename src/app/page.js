import Image from "next/image";
import Marquee from "@/components/Marquee";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      {/* This is Home page */}
      <Marquee></Marquee>
      <Hero></Hero>
    </div>
    
  );
}
