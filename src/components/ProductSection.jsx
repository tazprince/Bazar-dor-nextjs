import Link from "next/link";
import React from "react";

const ProductSection = ({ title, products, type }) => {
  // console.log(products);
  const unitBn = {
    kg: "কেজি",
    liter: "লিটার",
    piece: "পিস",
    dozen: "ডজন",
  };

  return (
    <section className="mx-auto mt-5 max-w-7xl px-4 ">
      <h2 className="mb-3 text-base font-bold text-gray-800">
        {type === "up" ? (
          <span className="text-red-500">▲</span>
        ) : (
          <span className="text-green-600">▼</span>
        )}{" "}
        {title}
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="rounded-lg border border-gray-200 bg-white p-3 hover:shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 text-xl">
                  {product.image}
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    {product.nameBn}
                  </h3>

                  <p className="mt-1 text-[11px] text-gray-500">
                    প্রতি {unitBn[product.unit] || product.unit}
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 mb-1.5">আজকের দাম</p>
                  <p className="text-base font-extrabold text-gray-600">
                    {new Intl.NumberFormat("bn-BD").format(Number(product.today))}{" "}
                    <span className="text-xs font-normal">টাকা</span>
                  </p>
                </div>

                <div>
                  {product.change.dir === "up" && (
                    <span className="text-sm text-red-500">
                      ▲ {product.change.pct}%
                    </span>
                  )}

                  {product.change.dir === "down" && (
                    <span className="text-sm text-green-600">
                      ▼ {product.change.pct}%
                    </span>
                  )}

                  {product.change.dir === "flat" && (
                    <span className="text-sm text-gray-500">— ০%</span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ProductSection;
