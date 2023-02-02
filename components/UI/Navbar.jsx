import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import navItems from "../../json/navItems.json";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

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
        className={`fixed right-0 left-0 top-0 z-50 smooth bg-transparent ${
          isScrolled && "lg:pb-8 pb-6 navDark"
        }`}
      >
        <div className="container text-white flex items-center">
          <div className="lg:block hidden">
            <Image
              className="smooth"
              src="/images/logo-transparent.png"
              alt=""
              width={isScrolled ? 80 : 120}
              height={120}
            />
          </div>

          <div className="lg:hidden">
            <Image
              className="smooth"
              src="/images/logo-transparent.png"
              alt=""
              width={isScrolled ? 80 : 90}
              height={90}
            />
          </div>

          <div
            className={`xl:block hidden ml-auto smooth ${
              isScrolled ? "lg:mt-6 mt-5" : "lg:mt-10 mt-8"
            }`}
          >
            {navItems.map((navItem) => (
              <Link href={navItem.link} key={navItem.id}>
                <span
                  className={`lg:text-lg text-base font-semibold smooth navItem ${
                    router.pathname === navItem.link && "navItem--active"
                  } px-5 py-2 rounded-lg ml-1`}
                >
                  {navItem.text}
                </span>
              </Link>
            ))}
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="xl:hidden w-7 h-7 mt-6 ml-auto cursor-pointer smooth hover:opacity-70"
            onClick={() => setIsMobileNavOpen(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </nav>

      {/* Mobile Nav Items */}
      <div
        className={`xl:hidden smooth text-white text-base font-semibold fixed top-0 ${
          isMobileNavOpen ? "left-0" : "-left-full"
        } bottom-0 w-full bg-purple z-50`}
      >
        <div className="p-4 pb-3 flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-7 h-7 smooth hover:opacity-70 cursor-pointer"
            onClick={() => setIsMobileNavOpen(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <div>
          {navItems.map((navItem) => (
            <Link
              href={navItem.link}
              key={navItem.id}
              onClick={() => setIsMobileNavOpen(false)}
            >
              <div
                className={`lg:text-lg text-base font-semibold smooth navItem ${
                  router.pathname === navItem.link && "navItem--active"
                } px-5 py-3`}
              >
                {navItem.text}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
