import Link from "next/link";

import Contact from "@/components/otherPages/Contact";
import Locations from "@/components/otherPages/Locations";
import Map from "@/components/otherPages/Map";
import React from "react";
import Breadcumb from "@/components/common/Breadcumb";
import { Metadata } from "next";
import Services2 from "@/components/homes/digital-transformation/Services2";
import Career from "@/components/otherPages/Career";
import Features3 from "@/components/common/Features3";
import Services from "@/components/homes/it-consulting/Services";


export const metadata: Metadata = {
  title:
    "Career || Kidz Holding - Franchise & Corporate Website",
  description:
    "Kidz Holding - Franchise & Corporate Website",
};
export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-13">
        <div className="tf-container position-relative">
          <div className="page-title-content">
            <Breadcumb pageName="Career" />
            <h2 className="title-page-title">Join Our Team</h2>
            <div className="sub-title body-2">
              Build the Future of Learning and Play
              <br />
              
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        {/* <Services2/> */}
        <Features3 />
 {/* <Services2/> */}
 <Services />


        {/* <Career /> */}
        {/* <Contact />
        <Map />
        <Locations /> */}
      </div>
    </>
  );
}
