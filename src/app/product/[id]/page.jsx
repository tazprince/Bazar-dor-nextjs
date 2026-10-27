
import ProductInfo from "@/components/ProductDetails/ProductInfo";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${id}`,
    { cache: "no-store" }
  );

  const product = await response.json();

  // console.log("Product:", product);

  return (
    <main className="min-h-screen bg-[#f0f5f1] px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <ProductInfo product={product} />
      </div>
    </main>
  );
};

export default ProductDetailsPage;
