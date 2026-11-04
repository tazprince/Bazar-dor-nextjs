import Link from "next/link";
import React from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
    { cache: "force-cache", }
  );
  const products = await res.json();

  return (
    <div className="overflow-hidden border-y border-gray-100 bg-white py-1.5 sm:py-2">
      <MarqueeText
        className="py-1"
        direction="right"
        duration={10}
        pauseOnHover={true}
      >
        {/* <Link href={`/products/${products.id}`} className="inline-flex shrink-0 items-center gap-3 whitespace-nowrap px-6 text-xs transition hover:bg-gray-50" >{ */}

        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="inline-flex shrink-0 items-center  whitespace-nowrap gap-1.5 px-3 text-[11px] sm:gap-3 sm:px-6 sm:text-xs transition hover:bg-gray-50"
          >
            <span>{product.image}</span>

            <span className="text-gray-800 font-bold hover:text-green-700 pr-1 sm:pr-2">
              {product.nameBn}
            </span>

            <span className="text-gray-600 pr-2">
              {product.today} টাকা/
              {product.unit === "kg" ? "কেজি" : product.unit}
            </span>

            {product.change.dir === "up" && (
              <span className="font-medium text-red-500">
                ▲ {product.change.pct}%
              </span>
            )}

            {product.change.dir === "down" && (
              <span className="font-medium text-green-600">
                ▼ {product.change.pct}%
              </span>
            )}

            {product.change.dir === "flat" && (
              <span className="text-gray-400">— ০.০%</span>
            )}
          </Link>
        ))}

        {/* </Link> */}
      </MarqueeText>
    </div>
  );
};

export default Marquee;
