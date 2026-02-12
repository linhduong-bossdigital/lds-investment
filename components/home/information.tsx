import { nanum, superiorTitle } from "@/app/fonts";

export default function Information() {
  const infoItems = [
    {
      title: "Our investing is led by long-tenured General Partners",
      description:
        " who have built and managed private equity platforms across multiple sectors. We bring institutional depth and a steady hand to support long-term partnership.",
    },
    {
      title:
        "We are highly active deploying dedicated capital as a co-investor and selective fund investment partner",
      description:
        ", typically completing 12–15 commitments per year across lower middle market control buyouts.",
    },
    {
      title: "We serve as an independent, value-added partner, ",
      description:
        "applying seasoned judgment and pattern recognition throughout the evaluation and due diligence process across investments and partnership opportunities.",
    },
    {
      title: "Our aim is to build enduring relationships ",
      description:
        "with exceptional sponsor teams, grounded in trust, mutual respect, and shared success over long-term investment horizons.",
    },
  ];

  return (
    <section className="px-[20px] lg:px-[80px] py-[40px] lg:py-[100px] grid grid-cols-1 lg:grid-cols-5 lg:gap-[40px]">
      <div className="flex-1 flex flex-col justify-end gap-[40px] bg-blue-primary col-span-2 p-[30px] pt-[50px] mb-[20px] lg:mb-0">
        <div className="w-[185px] h-[1px] bg-[#F1F3FB80]" />
        <h3
          className={`${superiorTitle.className} font-normal text-white-primary text-[44px] lg:text-[48px] leading-[110.00000000000001%]`}
        >
          Supporting Independent Sponsors and LMM Funds with{" "}
          <span className="font-medium">Speed and Certainty</span>
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] col-span-3">
        {infoItems.map((item, index) => (
          <div key={index} className="relative p-[30px] bg-[#F7F7F7]">
            <p
              className={`${nanum.className} font-normal text-[16px] leading-[150%] text-[#45464BB2]`}
            >
              <span className="text-[#45464B]">{item.title}</span>
              {item.description}
            </p>
            <div className="absolute bottom-0 left-[30px] bg-blue-primary h-[1px] w-[120px]" />
          </div>
        ))}
      </div>
    </section>
  );
}
