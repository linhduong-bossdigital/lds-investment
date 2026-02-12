import localFont from "next/font/local";

export const nanum = localFont({
  src: [
    {
      path: "./fonts/NanumSquare_ac-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nanum",
  display: "swap",
});

export const superiorTitle = localFont({
  src: [
    {
      path: "./fonts/SuperiorTitle-Medium.otf",
      weight: "500",
    },
    {
      path: "./fonts/SuperiorTitle-Regular.otf",
      weight: "400",
    },
  ],
  variable: "--font-superior-title",
  display: "swap",
});
