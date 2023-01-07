import Image from "next/image";
import Link from "next/link";
import React from "react";
import navItems from "../json/navItems.json";

const Navbar = () => {
  return (
    <nav className="fixed right-0 left-0 z-50">
      <div className="container text-white flex items-center">
        <div>
          <Image
            src="/images/logo-transparent.png"
            alt=""
            width={120}
            height={120}
          />
        </div>
        <div className="ml-auto mt-10">
          {navItems.map((navItem) => (
            <Link href={navItem.link} key={navItem.id}>
              <span className="text-lg font-semibold smooth navItem px-5 py-2 rounded-3xl">
                {navItem.text}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
