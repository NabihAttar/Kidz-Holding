import Link from "next/link";
import Image from "next/image";
import React from "react";
import { counters3 } from "@/data/cta";
import OdometerComponent from "@/components/common/OdometerComponent";

export default function Features() {
  return (
    <section className="section-why-choose h-7 bg-surface tf-spacing-31">
      <div className="tf-container position-relative tf-spacing-3" style={{ paddingBottom: "0px"}}>
        <div className="row rg-60">
          <div className="col-xl-6">
            <div className="image mr-15">
              <Image
                src="/image/section/franshise1.png"
                alt=""
                className="lazyload"
                width={615}
                height={615}
              />
            </div>
          </div>

          <div className="col-xl-6">
            <div className="section-content ml-15">
              <div className="heading-section">
                <div className="wow fadeInUp">
                  <a href="#" className="tag label text-btn-uppercase bg-white">
                    Partnership
                  </a>
                </div>

                <h3 className="wow fadeInUp mb-12">Why Partner With Us</h3>

                {/* 
                <div className="sub-title body-2 wow fadeInUp">
                  We offer unparalleled expertise and tailored solutions to
                  navigate your digital journey. Our team combines deep industry
                  knowledge with cutting-edge technology to drive transformative
                  results. Partner with us to experience innovation, efficiency,
                  and sustainable growth.
                </div>
                */}
              </div>

              <div className="cols g-10 mb-36">
                <div className="benefit-lists">
                  <div className="benefit-items">
                    <div className="icon wow fadeInUp">
                      <i className="icon-checkbox" />
                    </div>
                    <div className="title wow fadeInUp" data-wow-delay=".1s">
                      Proven operational success in MENA
                    </div>
                  </div>

                  <div className="benefit-items">
                    <div className="icon wow fadeInUp">
                      <i className="icon-checkbox" />
                    </div>
                    <div className="title wow fadeInUp" data-wow-delay=".1s">
                      High-return franchise model with CSR value
                    </div>
                  </div>

                  <div className="benefit-items">
                    <div className="icon wow fadeInUp">
                      <i className="icon-checkbox" />
                    </div>
                    <div className="title wow fadeInUp" data-wow-delay=".1s">
                      Comprehensive training and launch support
                    </div>
                  </div>

                  <div className="benefit-items">
                    <div className="icon wow fadeInUp">
                      <i className="icon-checkbox" />
                    </div>
                    <div className="title wow fadeInUp" data-wow-delay=".1s">
                      Strategic partnerships and sponsorship potential
                    </div>
                  </div>

                  <div className="benefit-items">
                    <div className="icon wow fadeInUp">
                      <i className="icon-checkbox" />
                    </div>
                    <div className="title wow fadeInUp" data-wow-delay=".1s">
                      Turnkey setup process and design guidance
                    </div>
                  </div>

                  <div className="benefit-items">
                    <div className="icon wow fadeInUp">
                      <i className="icon-checkbox" />
                    </div>
                    <div className="title wow fadeInUp" data-wow-delay=".1s">
                      End‑to‑end marketing and performance tools
                    </div>
                  </div>

                  {/* item 6 (kept as requested) */}
                  {/* <div className="benefit-items">
                    <div className="icon wow fadeInUp">
                      <i className="icon-checkbox" />
                    </div>
                    <div className="title wow fadeInUp" data-wow-delay=".1s">
                      High-return franchise model with CSR value
                    </div>
                  </div> */}

                  {/*
                  <div className="benefit-items">
                    <div className="icon wow fadeInUp" data-wow-delay=".2s">
                      <i className="icon-checkbox" />
                    </div>
                    <div className="title wow fadeInUp" data-wow-delay=".3s">
                      Comprehensive training and launch support.
                    </div>
                  </div>
                  <div className="benefit-items">
                    <div className="icon wow fadeInUp" data-wow-delay=".2s">
                      <i className="icon-checkbox" />
                    </div>
                    <div className="title wow fadeInUp" data-wow-delay=".3s">
                      Strategic partnerships and sponsorship potential.
                    </div>
                  </div>
                  */}
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>

      {/* Counters */}
      {/* <div className="tf-container position-relative">
        <div className="row">
          <div className="col-12">
            <div className="wg-counter justify-content-between">
              {counters3.map((counter, index) => (
                <div className="counter-item style-3" key={index}>
                  <div className="counter">
                    <div className="number-counter">
                      <h2 className="number odometer">
                        <OdometerComponent max={counter.value} />
                      </h2>
                      <h2 className="plus">+</h2>
                    </div>
                    <h6
                      className="text"
                      dangerouslySetInnerHTML={{ __html: counter.label }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
