import Header5 from "@/components/headers/Header5";
import Services1 from "@/components/common/Services";
import About from "@/components/homes/marketing-consulting/About";
import Brands from "@/components/common/Brands";
import Hero from "@/components/homes/marketing-consulting/Hero";
import React from "react";
import Services from "@/components/common/Services3";
import Faqs from "@/components/homes/marketing-consulting/Faqs";
import Team from "@/components/common/Team";
import Blogs from "@/components/homes/marketing-consulting/Blogs";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import { getHomePageApi } from "@/core/repo";

// ✅ alias the two different Features components
import MCFeatures from "@/components/homes/marketing-consulting/Features";
import ITFeatures from "@/components/homes/it-consulting/Features";

import Process from "@/components/homes/it-consulting/Process";
// import Process from "@/components/common/Process2";

import { Metadata } from "next";
import Footer1 from "@/components/footers/Footer1";

type HomePageApiResponse = {
  data?: {
    blogs?: unknown;
    [key: string]: unknown;
  };
  meta?: unknown;
};

export const metadata: Metadata = {
  title: "Marketing Consulting || Kidz Holding - Franchise & Corporate Website",
  description: "Kidz Holding - Franchise & Corporate Website",
};

export default async function Page() {
  let apiBlogs: unknown = undefined;

  try {
    const response = await getHomePageApi<HomePageApiResponse>();
    apiBlogs = response.data?.data?.blogs;
  } catch (error) {
    console.error("Failed to fetch home page data:", error);
  }

  return (
    <>
      <Header5 />
      <Hero />
      <div className="main-content">
        <About />
        <ITFeatures />
        <MCFeatures />
        <Brands />
        {/* <Services1 /> */}
        {/* <Process /> */}
        {/* <Services /> */}
        <Blogs apiBlogs={apiBlogs} />
        {/* <Team /> */}
        <Process />

        <Faqs />
        <Cta />
      </div>
      <Footer1 />
    </>
  );
}
