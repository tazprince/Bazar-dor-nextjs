import ProductInfo from "@/components/ProductDetails/ProductInfo";
import { notFound } from "next/navigation";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${id}`,
    { cache: "force-cache", }
  );

  const product = await response.json();
  
  if(!product || !product.id){
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f0f5f1] px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <ProductInfo product={product} />
      </div>
    </main>
  );
};

export default ProductDetailsPage;