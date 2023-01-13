import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import navItems from "../json/navItems.json";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function changeBgOnScroll() {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", changeBgOnScroll);

    return () => {
      window.removeEventListener("scroll", changeBgOnScroll);
    };
  }, []);

  return (
    <header>
      <nav
        className={`fixed right-0 left-0 z-50 smooth bg-transparent ${
          isScrolled && "pb-8 navDark"
        }`}
      >
        <div className="container text-white flex items-center">
          <div>
            <Image
              className="smooth"
              src="/images/logo-transparent.png"
              alt=""
              width={isScrolled ? 80 : 120}
              height={120}
            />
          </div>

          <div className={`ml-auto smooth ${isScrolled ? "mt-6" : "mt-10"}`}>
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
    </header>
  );
};

export default Navbar;
