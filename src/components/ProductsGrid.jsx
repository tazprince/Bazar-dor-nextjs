import React from "react";
import ProductSection from "./ProductSection";
import AllProducts from "./AllProducts";

const ProductsGrid = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const products = await res.json();

  const increasedProducts = products
    .filter((product) => product.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  const decreasedProducts = products
    .filter((product) => product.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);
  return (
    <div>
      <ProductSection
        title="আজ দাম বেড়েছে"
        products={increasedProducts}
        type="up"
      ></ProductSection>
      <ProductSection
        title="আজ দাম কমেছে"
        products={decreasedProducts}
        type="down"
      ></ProductSection>
       <AllProducts products={products} />
    </div>
  );
};

export default ProductsGrid;
