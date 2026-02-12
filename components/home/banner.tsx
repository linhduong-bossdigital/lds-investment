import { nanum, superiorTitle } from "@/app/fonts";

export default function Banner() {
  return (
    <section className="relative h-[800px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(
              270deg,
              rgba(24,44,82,0) 35%,
              rgba(24,44,82,0.5) 60%
            ),
            url('/images/banner-main.png')
          `,
          backgroundBlendMode: "multiply",
        }}
      />
      <div className="relative z-10 h-full flex items-end px-[20px] lg:px-[80px]">
        <div className="flex flex-col pb-[100px] gap-[25px] lg:w-[700px]">
          <h1
            className={`${superiorTitle.className} text-white-primary font-medium text-[44px] lg:text-[48px] leading-[110.00000000000001%]`}
          >
            Leading Lower Middle Market Buyout Investor
          </h1>
          <div className="w-[160px] lg:w-[185px] h-[1px] bg-[#F1F3FB80]" />
          <p
            className={`${nanum.className} text-white-primary font-normal text-[18px] lg:text-[22px]`}
          >
            Partnering with Exceptional Sponsors
          </p>
          <div className="flex flex-col md:flex-row items-center gap-[20px]">
            <a
              href="#partner"
              className={`${nanum.className} w-full md:w-auto opacity-100 py-[20px] px-[40px] border border-white-primary transition-all duration-300 hover:bg-[var(--white-primary)] hover:text-[var(--blue-primary)]`}
            >
              How We Partner
            </a>
            <a
              href="#team"
              className={`${nanum.className} w-full md:w-auto opacity-100 py-[20px] px-[40px] border border-white-primary transition-all duration-300 hover:bg-[var(--white-primary)] hover:text-[var(--blue-primary)]`}
            >
              Meet the Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
