"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const SignInPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    if (!data.email || !data.password) {
      toast.error("ইমেইল ও পাসওয়ার্ড দিন");
      return;
    }

    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Login করা যায়নি");
      return;
    }

    if (res) {
      toast.success("সফলভাবে লগইন হয়েছে!");
      router.push("/");
    }
  };

  const handleGoogleSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};

  return (
    <div className="min-h-screen bg-[#f1f6f1] px-4 py-10">
      <div className="mx-auto mb-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          সাইন ইন
        </h1>

        <p className="mt-2 text-xs text-gray-500">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>

      <div className="mx-auto w-full max-w-md rounded-xl border border-gray-200 bg-white/80 p-5 shadow-sm sm:p-6">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="mb-1 block text-xs font-medium text-gray-800">
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
            <label className="mb-1 block text-xs font-medium text-gray-800">
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

          <button
            type="submit"
            className="h-10 w-full rounded-md bg-green-700 text-sm font-semibold text-white hover:bg-green-800"
          >
            সাইন ইন
          </button>
        </form>

        <div className="my-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200"></div>
          <span className="text-xs text-gray-500">অথবা</span>
          <div className="h-px flex-1 bg-gray-200"></div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button onClick={handleGoogleSignIn}
            type="button"
            className=" hover:cursor-pointer flex h-10 items-center justify-center gap-2 rounded-md border border-gray-200 text-xs hover:bg-gray-50"
          >
            <Image
              src="/iconofgoogle.png"
              alt="Google"
              width={16}
              height={16}
              className="object-contain"
            />
            Google দিয়ে চালিয়ে যান
          </button>

          <button
            type="button"
            className=" hover:cursor-pointer flex h-10 items-center justify-center gap-2 rounded-md border border-gray-200 text-xs hover:bg-gray-50"
          >
            <Image src="/github.png" alt="GitHub" width={16} height={16} />
            GitHub দিয়ে চালিয়ে যান
          </button>
        </div>
        <p className="mt-4 text-center text-xs text-gray-600">
          অ্যাকাউন্ট আছে?{" "}
          <Link
            href="/sign-up"
            className="font-semibold text-green-700 hover:underline"
          >
            সাইন আপ করুন
          </Link>
        </p>
      </div>

      <div className="mx-auto max-w-7xl text-center mt-2">
        <Link href="/" className="mt-6 text-center text-xs text-gray-500">
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
