import Link from "next/link";

const NavLinks = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories"
  );

  const data = await res.json();
  const navs = data;

  return (
    <nav className=" border-t border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-3 py-2 sm:gap-2 sm:px-4 sm:py-3 scrollbar-hide">
        {navs.map((nav) => (
          <Link
            key={nav.id}
            href={`/category/${nav.slug}`}
            className="flex shrink-0 items-center rounded-md gap-1.5 px-2.5 py-2 text-xs sm:gap-2 sm:px-3 sm:text-sm font-semibold text-black transition hover:bg-green-50 hover:text-green-700"
          >
            <span>{nav.icon}</span>
            <span>{nav.nameBn}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavLinks;
