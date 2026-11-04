import CategoryProducts from "@/components/CategoryProducts";
import { notFound } from "next/navigation";

const CategoryPage = async ({ params }) => {
  const { slug } = await params;

  const response = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${slug}`,
     {
      cache: "force-cache",
    }
  );

  if (!response.ok) {
    notFound();
  }

  const products = await response.json();

  if(!products || products.length === 0){
    notFound();
  }

  return <CategoryProducts products={products} />;
};

export default CategoryPage;