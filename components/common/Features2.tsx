import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Features({
  parentClass = "section-why-choose h-2 tf-spacing-31",
  hasBorder = false,
}) {
  return (
    <section className={parentClass}>
      <div className="tf-container position-relative">
        <div
          className={` ${
            hasBorder
              ? "row rg-60 border-bottom tf-spacing-31"
              : "row rg-60 align-items-center"
          } `}
        >
          <div className="col-lg-6">
            <div className="image mr-15 tf-animate-1">
              <Image
                src="/image/section/WhyChooseUsAbout.png"
                alt=""
                className="lazyload"
                width={615}
                height={615}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-content ml-15">
              <div className="heading-section">
                <div className="wow fadeInUp">
                  <a href="#" className="tag label text-btn-uppercase">
                    Why Choose us?
                  </a>
                </div>
                <h3 className="title-section wow fadeInUp mb-12">
                 Our Key Success Factors
                 
                </h3>
                {/* <div className="sub-title body-2 wow fadeInUp">
                  Choose us for unparalleled expertise, tailored solutions, and
                  a commitment to your success. We deliver exceptional results
                  through a strategic and collaborative approach.
                </div> */}
              </div>
              <div className="benefit-lists">
                <div className="benefit-items">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1s">
                   Strategic Partnerships
                  </div>
                </div>
                <div className="benefit-items">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1s">
                    Cultural Adaptation
                  </div>
                </div>
                <div className="benefit-items">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1">
                     Focus on Guest Experience
                  </div>
                </div>
                <div className="benefit-items">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1s">
                    Business Scalability
                  </div>
                </div>
                <div className="benefit-items">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1s">
                    Access to expert training and marketing resources
                  </div>
                </div>
                 <div className="benefit-items">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1s">
                   Adaptability & Innovation
                  </div>
                </div>
                 <div className="benefit-items">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1s">
                   Proven Operational Expertise
                  </div>
                </div>
                 <div className="benefit-items">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1s">
                    Educational & Developmental Impact
                  </div>
                </div>
              </div>
              <Link
                href={`/contact-us`}
                className="tf-btn style-1 bg-on-suface-container wow fadeInUp"
              >
                <span> Request a Quote </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
