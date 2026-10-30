"use client";

import Link from "next/link";

const SignInPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };
  return (
    <div className="flex justify-center px-4 py-12">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-6">
          <h2 className="mb-4 text-center text-2xl font-bold">
            Login to BazarDor
          </h2>

          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" />

          <label className="label">Password</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Password"
          />

          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>

          <div className="divider">OR</div>

          <button type="button" className="btn btn-outline">
            Continue with Google
          </button>

          <button type="button" className="btn btn-outline">
            Continue with GitHub
          </button>

          <p className="mt-4 text-center text-sm">
            <Link href="/signup" className="text-primary font-semibold">
              Sign Up
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default SignInPage;
