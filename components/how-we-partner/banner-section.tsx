import { nanum, superiorTitle } from "@/app/fonts";

export default function BannerSection() {
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
              url('/images/partner-banner.png')
            `,
          backgroundBlendMode: "multiply",
        }}
      />
      <div className="relative z-10 h-full flex items-end px-[20px] lg:px-[80px]">
        <div className="flex flex-col pb-[150px] gap-[25px] lg:w-[600px]">
          <h1
            className={`${superiorTitle.className} text-white-primary font-medium text-[44px] lg:text-[48px] leading-[110.00000000000001%]`}
          >
            We Work the Way Sponsors Do
          </h1>
          <div className="w-[160px] lg:w-[185px] h-[1px] bg-[#F1F3FB80]" />
          <p
            className={`${nanum.className} text-white-primary font-normal text-[18px] lg:text-[22px]`}
          >
            A disciplined, transparent partnership approach designed to support
            sponsors from diligence through exit.
          </p>
        </div>
      </div>
    </section>
  );
}
