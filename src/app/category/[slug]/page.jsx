import CategoryProducts from "@/components/CategoryProducts";

const CategoryPage = async ({ params }) => {
  const { slug } = await params;

  const response = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${slug}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Products fetch failed");
  }

  const products = await response.json();

  return <CategoryProducts products={products} />;
};

export default CategoryPage;