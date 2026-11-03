"use client";

import { authClient } from "@/lib/auth-client";
import { redirect, useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) {
    return <p className="py-10 text-center">Loading...</p>;
  }

  if (!user) {
    return null;
  }

  // if(!user){
  //   redirect('/sign-in');
  // }

  // Update Profile
  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries());

    const { error } = await authClient.updateUser(newUserData);

    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("প্রোফাইল আপডেট সফল হয়েছে!");
  };

  // Sign Out
  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/sign-in");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-[#f1f6f1] px-4 pb-16 pt-20">
      <div className="mx-auto w-full max-w-157">
        {/* Page Title */}
        <div className="grid gap-1 mb-5">
          <h1 className="text-2xl font-bold text-[#26352b]">আমার প্রোফাইল</h1>

          <p className="mt-1 text-sm text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        {/* User Information Card */}
        <div className="mb-5 flex flex-col gap-4 rounded-2xl border border-[#dfe8df] bg-white/80 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div className="flex min-w-0 items-center gap-4">
            {/* Profile Image */}
            <div className="h-15 w-17 shrink-0 overflow-hidden rounded-xl bg-gray-100">
              {user.image ? (
                <img
                  src={user.image}
                  alt={user.name || "User"}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-green-700">
                  {user.name?.charAt(0) || "U"}
                </div>
              )}
            </div>

            {/* Name and Email */}
            <div className="min-w-0">
              <h2 className="truncate text-base font-semibold text-[#26352b]">
                {user.name}
              </h2>

              <p className="truncate text-sm text-gray-500">{user.email}</p>
            </div>
          </div>

          {/* Sign Out Button */}
          <button
            onClick={handleSignOut}
            className="shrink-0 rounded-lg border border-red-400 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
          >
            ↪ সাইন আউট
          </button>
        </div>

        {/* Profile Update Card */}
        <div className="rounded-2xl border border-[#dfe8df] bg-white/80 p-5 sm:p-5">
          <h2 className="mb-7 text-base font-bold text-[#26352b]">তথ্য</h2>

          <form onSubmit={handleUpdateProfile}>
            {/* Name Input */}
            <div className="mb-3 px-4">
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                নাম
              </label>

              <input
                id="name"
                type="text"
                name="name"
                defaultValue={user.name || ""}
                placeholder="আপনার নাম লিখুন"
                required
                className="w-full rounded-lg border border-[#dfe8df] bg-transparent px-3 py-2 text-sm text-gray-800 outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600"
              />
            </div>

            {/* Update Button */}
            <div className="px-4 pb-4 pt-1">
              <button
                type="submit"
                className="w-full rounded-lg bg-[#078b42] py-2.5 text-sm font-semibold text-white shadow-md shadow-green-700/30 transition hover:bg-[#067536] active:scale-[0.99]"
              >
                আপডেট
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
