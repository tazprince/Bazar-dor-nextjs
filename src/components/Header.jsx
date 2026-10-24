import Link from "next/link";

const Header = () => {
  const banglaDate = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo and date */}
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-xl text-white">
            🛒
          </span>

          <span>
            <span className="block text-lg font-extrabold leading-6 text-gray-900">
              বাজার দর
            </span>

            <span className="block text-[11px] text-gray-500">
              {banglaDate}
            </span>
          </span>
        </Link>

        {/* Authentication buttons */}
        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            href="/signin"
            className="text-xs font-semibold text-black transition hover:text-green-700 sm:text-sm"
          >
            সাইন ইন
          </Link>
          <Link
            href="/signup"
            className="rounded-md bg-green-700 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-green-800 sm:px-4 sm:text-sm"
          >
            সাইন আপ
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
