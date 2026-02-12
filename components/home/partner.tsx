import { nanum, superiorTitle } from "@/app/fonts";

export default function Partner() {
  return (
    <section className="relative w-full h-[500px] lg:h-[650px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center rotate-y-180"
        style={{
          backgroundImage: "url('/images/banner-partner.jpg')",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center px-[20px] lg:px-[80px]">
        <div
          className="
          bg-[#182C52]/75
          text-white-primary
          px-8 
          py-10 
          md:px-10
          md:py-10
          md:w-[500px] 
          lg:w-[600px]
        "
        >
          <h2
            className={`${superiorTitle.className} mb-[40px] font-medium text-[48px] leading-[110.00000000000001%] text-white-primary`}
          >
            Partner With Us
          </h2>
          <button
            className={`group opacity-100 w-[185px] h-[64px] border border-white-primary hover:bg-[var(--white-primary)]`}
          >
            <p
              className={`${nanum.className} text-center text-[14px] text-white-primary font-normal group-hover:!text-[var(--blue-primary)]`}
            >
              Get Started
            </p>
          </button>
        </div>
      </div>
    </section>
  );
}
