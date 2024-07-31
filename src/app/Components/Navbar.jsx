import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between p-8 mx-auto">
        <Link href={"/"} className="text-5xl font-semibold text-white">
          LOGO
        </Link>
        <div className="hidden menu md:block md:w-auto" id="navbar">
          <ul>
            <li>
              <Link
                href={"#about"}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
