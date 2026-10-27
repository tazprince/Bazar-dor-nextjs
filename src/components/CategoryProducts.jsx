"use client";

import { useState } from "react";
import Link from "next/link";

const unitNames = {
  kg: "কেজি",
  litre: "লিটার",
  liter: "লিটার",
  piece: "পিস",
};

const CategoryProducts = ({ slug, products }) => {
  const [sort, setSort] = useState(" ");

  const categoryNames = {
    tel: "তেল",
    chal: "চাল",
    dal: "ডাল",
    sobji: "সবজি",
    mach: "মাছ",
    mangsho: "মাংস",
    mosla: "মসলা",
    "dim-dudh": "ডিম-দুধ",
  };

  const category = products[0];

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "low") {
      return a.today - b.today;
    }

    if (sort === "high") {
      return b.today - a.today;
    }
  });

  return (
    <main className="min-h-screen bg-[#f0f5f1]">
      <div className="mx-auto w-full max-w-6xl space-y-5 px-4 py-8">
        {/* Category title */}
        <section className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-3xl">
            {category?.categoryIcon || "🛒"}
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {category?.categoryNameBn || categoryNames[slug] || "পণ্য"}
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              {Number(products.length).toLocaleString("bn-BD")} টি পণ্যের আজকের
              দাম ও পরিবর্তন
            </p>
          </div>
        </section>

        {/* Sorting */}
        <section className="flex items-center justify-end gap-3 rounded-2xl border border-gray-200 bg-white p-4">
          <label htmlFor="sort" className="text-sm text-gray-500">
            সাজান
          </label>

          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="select select-bordered bg-white"
          >
            <option value="default">ডিফল্ট</option>
            <option value="low">দাম: কম থেকে বেশি</option>
            <option value="high">দাম: বেশি থেকে কম</option>
          </select>
        </section>
        <p className="mt-1 text-sm text-gray-500">
          মোট {Number(products.length).toLocaleString("bn-BD")} টি পণ্য দেখানো
          হচ্ছে
        </p>

        {/* Empty state */}
        {products.length === 0 ? (
          <section className="rounded-2xl border border-gray-200 bg-white px-5 py-12 text-center">
            <p className="text-4xl">🛒</p>

            <h2 className="mt-4 text-xl font-bold">কোনো পণ্য পাওয়া যায়নি</h2>

            <p className="mt-2 text-sm text-gray-500">
              এই ক্যাটাগরিতে কোনো পণ্য নেই।
            </p>

            <Link
              href="/"
              className="btn mt-5 border-0 bg-green-700 text-white"
            >
              হোম পেজে ফিরে যান
            </Link>
          </section>
        ) : (
          /* Product cards */
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sortedProducts.map((product) => (
              <Link
                href={`/product/${product.id}`}
                key={product.id}
                className="rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-green-300 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f0f5f1] text-2xl">
                    {product.image || product.categoryIcon || "🛒"}
                  </div>

                  <div>
                    <h2 className="font-bold text-gray-900">
                      {product.nameBn}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      প্রতি {unitNames[product.unit] || product.unit}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-end justify-between gap-2">
                  <div>
                    <p className="text-xs text-gray-500">আজকের দাম</p>

                    <p className="mt-1 text-xl font-bold text-gray-900">
                      {Number(product.today).toLocaleString("bn-BD")} টাকা
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-2 py-1 text-xs font-semibold ${
                      product.change?.dir === "up"
                        ? "bg-red-50 text-red-600"
                        : product.change?.dir === "down"
                          ? "bg-green-50 text-green-700"
                          : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {product.change?.dir === "up"
                      ? "▲"
                      : product.change?.dir === "down"
                        ? "▼"
                        : "—"}{" "}
                    {Number(Math.abs(product.change?.pct ?? 0)).toLocaleString(
                      "bn-BD",
                    )}
                    %
                  </span>
                </div>
              </Link>
            ))}
          </section>
        )}
      </div>
    </main>
  );
};

export default CategoryProducts;
