"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    if (data.password !== data.confirmPassword) {
      alert("পাসওয়ার্ড দুটি মিলছে না!");
      return;
    }

    const { data: res, error } = await authClient.signUp.email({
      email: data.email,
      password: data.password,
      name: data.name,
      callbackURL: "/",
    });

    if (error) {
      console.log(error);
      return;
    }

    if (res) {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f6f1] px-4 py-10">

      <div className="mx-auto mb-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          অ্যাকাউন্ট তৈরি করুন
        </h1>

        <p className="mt-2 text-xs text-gray-500">
          পণ্য কেনার সুবিধা এবং আরও নতুন ফিচার পেতে নিবন্ধন করুন।
        </p>
      </div>

      <div className="mx-auto w-full max-w-md rounded-xl border border-gray-200 bg-white/80 p-5 shadow-sm sm:p-6">

        <form onSubmit={onSubmit}>

          <div className="mb-3">
            <label className="mb-1 block text-xs font-medium text-gray-700">
              নাম
            </label>
            <input
              type="text"
              name="name"
              placeholder="আপনার সম্পূর্ণ নাম"
              className="h-10 w-full rounded-md border border-gray-200 px-3 text-sm outline-none focus:border-green-600"
              required
            />
          </div>

          <div className="mb-3">
            <label className="mb-1 block text-xs font-medium text-gray-700">
              ইমেইল
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="h-10 w-full rounded-md border border-gray-200 px-3 text-sm outline-none focus:border-green-600"
              required
            />
          </div>

          <div className="mb-3">
            <label className="mb-1 block text-xs font-medium text-gray-700">
              পাসওয়ার্ড
            </label>
            <input
              type="password"
              name="password"
              placeholder="কমপক্ষে ৮ অক্ষর"
              className="h-10 w-full rounded-md border border-gray-200 px-3 text-sm outline-none focus:border-green-600"
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-xs font-medium text-gray-700">
              পাসওয়ার্ড নিশ্চিত করুন
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="আবার লিখুন"
              className="h-10 w-full rounded-md border border-gray-200 px-3 text-sm outline-none focus:border-green-600"
              required
            />
          </div>

          <button
            type="submit"
            className="h-10 w-full rounded-md bg-green-700 text-sm font-semibold text-white hover:bg-green-800"
          >
            অ্যাকাউন্ট তৈরি করুন
          </button>

        </form>

        <div className="my-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200"></div>
          <span className="text-xs text-gray-500">অথবা</span>
          <div className="h-px flex-1 bg-gray-200"></div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            className="flex h-10 items-center justify-center gap-1 rounded-md border border-gray-200 text-xs hover:bg-gray-50"
          >
            <span className="font-bold text-blue-500">G</span>
            Google দিয়ে সাইন আপ
          </button>

          <button
            type="button"
            className="flex h-10 items-center justify-center gap-1 rounded-md border border-gray-200 text-xs hover:bg-gray-50"
          >
            <span className="font-bold">●</span>
            GitHub দিয়ে সাইন আপ
          </button>
        </div>

        <p className="mt-4 text-center text-xs text-gray-600">
          অ্যাকাউন্ট আছে?{" "}
          <Link
            href="/login"
            className="font-semibold text-green-700 hover:underline"
          >
            সাইন ইন করুন
          </Link>
        </p>

      </div>

      <p className="mt-6 text-center text-xs text-gray-400">
        © বাজার দর | সকল অধিকার সংরক্ষিত
      </p>

    </div>
  );
};

export default SignUpPage;