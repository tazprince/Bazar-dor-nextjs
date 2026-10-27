import Image from "next/image";
import Marquee from "@/components/Marquee";
import Hero from "@/components/Hero";
import ProductsGrid from "@/components/ProductsGrid";

export default function Home() {
  return (
    <div>
      {/* This is Home page */}
      <Marquee></Marquee>
      <Hero></Hero>
      <ProductsGrid></ProductsGrid>
    </div>
    
  );
}
