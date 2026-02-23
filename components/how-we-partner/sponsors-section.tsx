import { superiorTitle } from "@/app/fonts";

export default function SponsorsSection() {
  const sponsors = [
    {
      img: "/images/sponsor-speed.png",
      title: "Speed with Precision",
      description:
        "We engage quickly and decisively, efficiently focusing on key issues that matter most — sponsors receive fast, thoughtful feedback.",
    },
    {
      img: "/images/sponsor-momentum.png",
      title: "Momentum Through Certainty",
      description:
        "Our clarity of decision making keeps transactions moving forward. Once engaged, we help sponsors maintain cadence with management teams, sellers, and advisors through to close.",
    },
    {
      img: "/images/sponsor-partner.png",
      title: "Value-Added Partnership",
      description:
        "We engage as thought partners from pre-close through exit — constructively helping refine theses, enhance structures, and support growth across the investment lifecycle.",
    },
  ];

  return (
    <div className="bg-white px-[20px] lg:px-[80px] py-[60px] lg:py-[100px]">
      <div className="h-[1px] w-[185px] bg-blue-primary" />
      <h2
        className={`${superiorTitle.className} text-blue-primary font-medium text-[48px]`}
      >
        What Sponsors Can Expect from LDS Investments
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[32px]">
        {sponsors.map((sponsor, index) => (
          <div key={index} className=""></div>
        ))}
      </div>
    </div>
  );
}
