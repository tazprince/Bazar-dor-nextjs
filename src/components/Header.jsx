import Link from "next/link";
import UserInfo from "./UserInfo";

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
        <UserInfo></UserInfo>
      </div>
    </header>
  );
};
export default Header;
