import Link from "next/link";
import UserInfo from "./UserInfo";

const Header = () => {
  const banglaDate = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-4">
        {/* Logo and date */}
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-700 text-xl text-white">
            🛒
          </span>

          <span>
            <span className="block text-lg sm:text-xl font-extrabold leading-6 text-gray-900">
              বাজার দর
            </span>

            <span className="block text-[11px] text-gray-500">
              {banglaDate}
            </span>
          </span>
        </Link>

        {/* Authentication buttons */}
        <UserInfo></UserInfo>
      </div>
    </header>
  );
};
export default Header;
