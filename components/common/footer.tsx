import { nanum } from "@/app/fonts";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "how-we-partner", label: "How We Partner" },
    { id: "team", label: "Team" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer className="grid grid-cols-1 xl:grid-cols-2 px-[20px] py-[40px] lg:px-[80px] lg:py-[80px] gap-[30px] lg:gap-[40px]">
      <div className="flex flex-row items-start gap-[30px] lg:gap-[60px]">
        <img
          src="/images/logo-black.png"
          alt="Logo"
          className="w-[59px] lg:w-[89px] h-auto object-contain"
        />
        <div className="flex flex-col gap-[20px]">
          <h3
            className={`${nanum.className} text-[18px] lg:text-[20px] font-normal text-blue-primary`}
          >
            Contact Us
          </h3>
          <div className="flex flex-row items-center gap-1">
            <MapPin
              color="#182C52CC"
              className="w-[16px] h-[16px] lg:w-[18px] lg:h-[18px]"
            />
            <p
              className={`${nanum.className} text-[14px] lg:text-[16px] font-normal text-[#45464B]`}
            >
              Suite 503, Fairmont House 8 Cotton Tree Drive Central, Hong Kong
            </p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <Mail
              color="#182C52CC"
              className="w-[16px] h-[16px] lg:w-[18px] lg:h-[18px]"
            />
            <p
              className={`${nanum.className} text-[14px] lg:text-[16px] font-normal text-[#45464B]`}
            >
              contact@lds-invest.com
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-start xl:items-end gap-[30px] lg:gap-[20px]">
        <div className="flex flex-row w-full lg:w-auto justify-between lg:justify-end lg:gap-[40px]">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`${nanum.className} text-[14px] lg:text-[16px] font-normal text-blue-primary transition duration-300 hover:opacity-70`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px] lg:gap-[40px]">
          <div className="flex flex-row gap-[40px]">
            <a
              href={`#terms-and-conditions`}
              className={`${nanum.className} text-[12px] font-normal text-blue-primary transition duration-300 hover:opacity-70`}
            >
              Terms & Conditions
            </a>
            <a
              href={`#privacy-policy`}
              className={`${nanum.className} text-[12px] font-normal text-blue-primary transition duration-300 hover:opacity-70`}
            >
              Privacy Policy
            </a>
          </div>
          <p
            className={`${nanum.className} text-[12px] font-normal text-[#45464B]`}
          >
            © 2026 LDS Investments. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
