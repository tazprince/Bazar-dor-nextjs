import Link from "next/link";

const ProductInfo = ({ product }) => {
  const {
    nameBn,
    categoryNameBn,
    categoryIcon,
    image,
    unit,
    today,
    yesterday,
    lastWeek,
    lastMonth,
    change,
    markets,
  } = product;

  const formatPrice = (price) =>
    `${Number(price).toLocaleString("bn-BD")} টাকা`;

  const minPrice = Math.min(...markets.map((market) => market.min));
  const maxPrice = Math.max(...markets.map((market) => market.max));
  const avgPrice = Math.round(minPrice + maxPrice) / 2;

  const averagePrice = (min, max) => (min + max) / 2;

  const priceChange = today - yesterday;

  return (
    <div className="space-y-5">
      {/* Back link */}
      <Link
        href="/"
        className="inline-block text-sm text-green-700 hover:underline"
      >
        ← হোমে ফিরে যান
      </Link>

      {/* Product header */}
      <section className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between ">
        <div className="flex items-center gap-4 ">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-green-50 text-3xl">
            {image || categoryIcon || "🛒"}
          </div>

          <div>
            {/* <p className="text-sm text-gray-500">
              {categoryNameBn}
            </p> */}

            <h1 className="text-2xl font-bold text-gray-900">{nameBn}</h1>

            <p className="mt-1 text-sm text-gray-500">
              প্রতি {unit === "kg" ? "কেজি" : unit} {categoryNameBn}
            </p>

            <p className="mt-4 text-sm text-gray-600">
              গতকালের তুলনায় আজ দাম{" "}
              <span
                className={
                  priceChange > 0
                    ? "font-semibold text-red-600"
                    : priceChange < 0
                      ? "font-semibold text-green-600"
                      : "font-semibold"
                }
              >
                {priceChange > 0
                  ? `${formatPrice(priceChange)} বেড়েছে`
                  : priceChange < 0
                    ? `${formatPrice(Math.abs(priceChange))} কমেছে`
                    : "অপরিবর্তিত রয়েছে"}
              </span>
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-green-50 px-6 py-4 sm:text-right">
          <p className="text-sm text-gray-500">আজকের দাম</p>

          <p className="mt-1 text-4xl font-bold text-gray-900">
            {Number(today).toLocaleString("bn-BD")}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            টাকা / {unit === "kg" ? "কেজি" : unit}
          </p>

          <p
            className={`mt-2 text-sm font-medium ${
              change?.dir === "up"
                ? "text-red-600"
                : change?.dir === "down"
                  ? "text-green-600"
                  : "text-gray-500"
            }`}
          >
            {change?.dir === "up" ? "▲" : change?.dir === "down" ? "▼" : "—"}{" "}
            {Number(change?.pct ?? 0).toLocaleString("bn-BD") + "%"}
          </p>
        </div>
      </section>

      {/* Price summary */}
      <section className="rounded-2xl border border-gray-200 bg-white p-5">
        <h2 className="mb-4 text-lg font-bold text-gray-900">
          দামের সারসংক্ষেপ
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-200 p-4">
            <p className="text-sm text-gray-500">সর্বনিম্ন দাম</p>
            <p className="mt-1 text-2xl font-bold text-green-600">
              {formatPrice(minPrice)}
            </p>
            <p className="mt-1 text-xs text-gray-500">
              সবচেয়ে কম দামের বাজার
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-4">
            <p className="text-sm text-gray-500">সর্বাধিক দাম</p>
            <p className="mt-1 text-2xl font-bold text-red-500">
              {formatPrice(maxPrice)}
            </p>
            <p className="mt-1 text-xs text-gray-500">
              সবচেয়ে বেশি দামের বাজার
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-4">
            <p className="text-sm text-gray-500">গড় দাম</p>
            <p className="mt-1 text-2xl font-bold text-green-600">
              {formatPrice(avgPrice)}
            </p>
            <p className="mt-1 text-xs text-gray-500">প্রতি কেজি-এর হিসাবে</p>
          </div>
        </div>

      </section>

      {/* Market prices table */}
      <section className="rounded-2xl border border-gray-200 bg-white p-5">
        <h2 className="mb-4 text-lg font-bold text-gray-900">
          বাজারভিত্তিক আজকের দাম
        </h2>

        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3">বাজার</th>
                <th className="px-4 py-3">বিভাগ</th>
                <th className="px-4 py-3 text-right">সর্বনিম্ন</th>
                <th className="px-4 py-3 text-right">সর্বোচ্চ</th>
                <th className="px-4 py-3 text-right">গড়</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {markets?.map((market, index) => (
                <tr
                  key={`${market.market}-${index}`}
                  className="even:bg-gray-50 hover:bg-green-50"
                >
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {market.market}
                  </td>

                  <td className="px-4 py-3 text-gray-600">{market.division}</td>

                  <td className="px-4 py-3 text-right">
                    {formatPrice(market.min)}
                  </td>

                  <td className="px-4 py-3 text-right">
                    {formatPrice(market.max)}
                  </td>

                  <td className="px-4 py-3 text-right font-semibold">
                    {formatPrice(averagePrice(market.min, market.max))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ProductInfo;
