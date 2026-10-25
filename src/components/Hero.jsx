import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  const banglaDate = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <section className="mx-auto mt-4 max-w-7xl px-4">
      <div className="flex min-h-32.5  items-center justify-between gap-4 rounded-xl border border-gray-200 bg-[#f8faf8] px-5 py-5 sm:px-7">
        <div className="max-w-xl">
          <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-extrabold text-green-700">
            {banglaDate}
          </span>

          <h1 className="mt-2 text-2xl font-black text-black sm:text-2xl pb-2">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-2 text-xs leading-5 text-gray-500 pb-2">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-<br></br>সর্বাধিক এবং দামের পরিবর্তন এক
            জায়গায়।
          </p>

          <Link
            href=""
            className="mt-3 inline-block rounded-md bg-green-700 px-3 py-2 text-[12px] font-semibold text-white shadow-sm transition hover:bg-green-800"
          >
            সব পণ্য দেখুন
          </Link>
        </div>

        <div className="hidden shrink-0 sm:block pr-12">
          <Image
            src="/bazar-hero.png" width={300} height={300}
            alt="তাজা বাজারের পণ্য"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
