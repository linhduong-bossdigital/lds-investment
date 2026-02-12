"use client";
import { nanum } from "@/app/fonts";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "how-we-partner", label: "How We Partner" },
    { id: "team", label: "Team" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-51">
        <div className="flex justify-between items-center lg:px-[80px] px-[20px] py-[24px]">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-[59px] h-[32px] lg:w-[90px] lg:h-[48px]"
          />
          <nav className="hidden lg:flex">
            <ul className="flex space-x-4 gap-[48px]">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`text-white ${nanum.className} font-normal text-lg transition duration-300 hover:opacity-70`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#182C52]/90" />
          {/* Content */}
          <div className="relative z-10 flex flex-col h-full text-white px-6 py-8 pt-[100px]">
            {/* Menu Items */}
            <nav className="flex flex-col gap-[48px] text-[16px]">
              {navItems.map((item) => (
                <a
                  className={`text-white-primary ${nanum.className} font-normal`}
                  key={item.id}
                  href={`#${item.id}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            {/* Bottom Button */}
            <div className="mt-auto pb-[200px]">
              <button
                className={`${nanum.className} font-normal w-full opacity-100 py-[20px] px-[40px] border border-white-primary text-[14px]`}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
