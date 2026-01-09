import Link from "next/link";
import Image from "next/image";
import React from "react";
import { counters3 } from "@/data/cta";
import OdometerComponent from "@/components/common/OdometerComponent";

export default function About() {
  return (
    <section className="section-about h-5 tf-spacing-2 section-one-page" id="about" style={{ paddingBottom: "0px" }}>
      <div className="tf-container position-relative">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-left mr-10">
              <div className="image item-1 tf-animate-1">
                <Image
                  src="/image/section/image-2 (1).jpg"
                  alt="Team collaborating"
                  className="lazyload"
                  width={450}
                  height={600}
                />
              </div>
              <div className="image item item-2 tf-animate-3">
                <Image
                  src="/image/section/image-1 (1).jpg"
                  alt="Analytics dashboard"
                  className="lazyload"
                  width={320}
                  height={320}
                />
              </div>
              {/* <div className="item item-3 number-year text-center tf-animate-2">
                <div className="counter-item">
                  <div className="counter">
                    <div className="number-counter mb-0">
                      <h3 className="number odometer">
                        <OdometerComponent max={25} />
                      </h3>
                      <h3 className="plus">+</h3>
                    </div>
                  </div>
                </div>
                <p className="text-btn">
                  Year Of <br />
                  Experience
                </p>
              </div> */}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="section-content ml-40">
              <div className="heading-section mb-32">
                <div className="wow fadeInUp">
                  <a href="#" className="tag label text-btn-uppercase mb-16">
                    Empowering Future Generations
                  </a>
                </div>
                <h3 className="title-section mb-20 wow fadeInUp">
                  Trusted by Families, Schools & Cities <br />
                  Across the Region
                </h3>
                <div className="sub-title color-text-2 wow fadeInUp">
                  Kidz Holding is the regional pioneer in edutainment, leisure, and family-focused destinations.
                  Through innovation, engagement, and collaboration, we create meaningful spaces for where guests have fun, partners grow with purpose, and investors build lasting impact.

                </div>
              </div>

              <div className="benefit-lists mb-32">
                <div className="benefit-items style-small mb-16">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1s">
                   	Expanding our footprint across major MENA capitals
                  </div>
                </div>
                <div className="benefit-items style-small mb-16">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1s">
                    	Building trusted partnerships with schools, municipalities, and development entities
                  </div>
                </div>
                <div className="benefit-items style-small">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1s">
                    	Delivering measurable social, educational, and economic value
                  </div>
                </div>
              </div>

              <div className="bottom">
                <div className="wow fadeInUp" >
                  <Link href="/Our-Brands" className="tf-btnN style-1 bg-on-surface-container">
                    <span>Our Brands</span>
                  </Link>
                </div>





                <div className="tf-phone no-border style-2">
                  <div className="bottom">
                    <div className="wow fadeInUp">
                      <Link href="/contact-us" className="tf-btn style-1 bg-on-surface-container">
                        <span>Contact Us</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Counters section */}
      <section
        className="section-why-choose h-7 bg-surface tf-spacing-31"
        style={{
          marginTop: "100px",
          backgroundColor: "#232559", // no need !important here
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <div className="tf-container position-relative">
          <div className="row">
            <div className="col-12">
              <div className="wg-counter justify-content-between">
                {counters3.map((c, i) => (
                  <div className="counter-item style-3" key={i}>
                    <div className="counter">
                      <div className="number-counter">
                        <h2
                          className="number odometer"
                        >
                          <OdometerComponent max={c.value} />
                          {c.suffix && (
                            <span
                            >
                              {c.suffix}
                            </span>
                          )}
                        </h2>
                        <h2 className="plus" >
                          +
                        </h2>
                      </div>

                      <h6
                        className="text"
                        style={{ color: "white" }} // label text in white too (optional)
                        dangerouslySetInnerHTML={{ __html: c.label }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


    </section>
  );
}
