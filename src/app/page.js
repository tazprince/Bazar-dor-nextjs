import Image from "next/image";
import Hero from "@/components/Hero";
import ProductsGrid from "@/components/ProductsGrid";

export default function Home() {
  return (
    <div>
      {/* This is Home page */}
      <Hero></Hero>
      <ProductsGrid></ProductsGrid>
    </div>
    
  );
}
