import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import BanglaDate from "./BanglaDate";

//banglaDate
const Hero = () => {
  return (
    <section className="mx-auto mt-3 sm:mt-4 max-w-7xl px-3 sm:px-4">
      <div className="flex min-h-32.5 flex-col items-center justify-between gap-4 rounded-xl border border-gray-200 bg-[#f8faf8] px-4 py-5 sm:flex-row sm:px-7 sm:py-5">
        <div className="w-full max-w-xl">
          {/* <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700 sm:text-sm">
            {banglaDate}
          </span> */}
          {/* deployment issue for date so i change code and create new component */}
          <Suspense
            fallback={
              <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700 sm:text-sm">
                বাংলা তারিখ
              </span>
            }
          >
            <BanglaDate className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700 sm:text-sm" />
          </Suspense>

          <h1 className="mt-3 pb-1 text-xl font-black text-black sm:mt-5 sm:text-2xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-2 pb-2 text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <Link
            href="#সব-পণ্য"
            className="mt-3 inline-block rounded-md bg-green-700 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-green-800 sm:text-sm"
          >
            সব পণ্য দেখুন
          </Link>
        </div>

        {/* Hero Image */}
        <div className="w-full max-w-[200px] shrink-0 sm:max-w-[230px] md:max-w-[260px] lg:max-w-[300px]">
          <Image
            src="/bazar-hero.png"
            width={300}
            height={300}
            alt="তাজা বাজারের পণ্য"
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
