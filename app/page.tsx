// import Footer1 from "@/components/footers/Footer1";
// import Header1 from "@/components/headers/Header1";
// import Topbar1 from "@/components/headers/Topbar1";
// import About from "@/components/homes/home-1/About";
// import Awards from "@/components/common/Awards";
// import Benefits from "@/components/homes/home-1/Benefits";
// import Blogs from "@/components/common/Blogs";
// import CaseStudies from "@/components/homes/home-1/CaseStudies";
// import Cta from "@/components/common/Cta2";
// import Faqs from "@/components/homes/home-1/Faqs";
// import Hero from "@/components/homes/home-1/Hero";
// import Process from "@/components/homes/home-1/Process";
// import Services from "@/components/common/Services";
// import Testimonials from "@/components/homes/home-1/Testimonials";
// import { Metadata } from "next";
// export const metadata: Metadata = {
//   title:
//     "Financial Planning || FinWice - Business & Finance Consulting - React Nextjs Template",
//   description:
//     "FinWice - Business & Finance Consulting - React Nextjs Template",
// };
// export default function Home() {
//   return (
//     <>
//       <Topbar1 />
//       <Header1 />
//       <Hero />
//       <div className="main-content">
//         <About />
//         <Benefits />
//         <Services />
//         <Process />
//         <CaseStudies />
//         <Testimonials />
//         <Faqs />
//         <Blogs />
//         <Awards />
//         <Cta />
//       </div>
//       <Footer1 />
//     </>
//   );
// }

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
import Blogs2 from "@/components/homes/marketing-consulting/Blogs2";

// ✅ alias the two different Features components
import MCFeatures from "@/components/homes/marketing-consulting/Features";
import ITFeatures from "@/components/homes/it-consulting/Features";

import Process from "@/components/homes/it-consulting/Process";
// import Process from "@/components/common/Process2";

import { Metadata } from "next";
import Footer1 from "@/components/footers/Footer1";

export const metadata: Metadata = {
  title:
    "Kidz Holding || Kidz Holding - Franchise & Corporate Website",
  description:
    "Kidz Holding - Franchise & Corporate Website",
};

export default function Page() {
  return (
    <>
      <Header5 />
      <Hero />
      <div className="main-content">
        <About />
        <ITFeatures />
        {/* <MCFeatures /> */}
        {/* <Blogs2 /> */}
        <Brands />
        {/* <Services1 /> */}
        {/* <Process /> */}
        {/* <Services /> */}
        {/* <Blogs /> */}
        {/* <Team /> */}
        <Process />

        <Faqs />
        <Cta />
      </div>
      <Footer1 />
    </>
  );
}
