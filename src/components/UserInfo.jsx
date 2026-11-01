"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleSignout = async () => {
    await authClient.signOut();
    setOpen(false);
    router.push("/");
  };

  return (
    <div className="relative flex items-center">
      {user ? (
        <>
          {/* Profile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-gray-100"
          >
            <div className="avatar">
              <div className="h-9 w-9 overflow-hidden rounded-full">
                {user.image ? (
                  <img
                    src={user.image}
                    alt={user.name || "User"}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-green-700 text-sm font-bold text-white">
                    {user.name?.charAt(0)}
                  </div>
                )}
              </div>
            </div>

            <span className="hidden text-sm font-medium text-gray-800 sm:block">
              {user.name}
            </span>

            <span className="text-xs text-gray-500">▾</span>
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 top-full z-50 mt-2 w-60 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
              <div className="border-b border-gray-100 px-3 py-3">
                <p className="truncate text-sm font-semibold text-gray-800">
                  {user.name}
                </p>
                <p className="truncate text-xs text-gray-500">
                  {user.email}
                </p>
              </div>

              <Link
                href="/profile"
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
              >
                👤 আমার প্রোফাইল
              </Link>

              <button
                onClick={handleSignout}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-red-500 hover:bg-red-50"
              >
                ↪ সাইন আউট
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center gap-3">
          <Link
            href="/sign-in"
            className="text-xs font-semibold text-gray-800 transition hover:text-green-700 sm:text-sm"
          >
            সাইন ইন
          </Link>

          <Link
            href="/sign-up"
            className="rounded-md bg-green-700 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-green-800 sm:px-4 sm:text-sm"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
