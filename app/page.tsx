"use client";
import Image from "next/image";
import { nanum, superiorTitle } from "./fonts";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Header from "@/components/common/header";
import Banner from "@/components/home/banner";
import Information from "@/components/home/information";
import Partner from "@/components/home/partner";
import Footer from "@/components/common/footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <Banner />
      <Information />
      <Partner />
      <Footer />
    </div>
  );
}
