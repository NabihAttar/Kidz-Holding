import Image from "next/image";
import React from "react";

export default function Faqs() {
  return (
    <section className="section-faqs h-5 tf-spacing-2">
      <div className="tf-container position-relative">
        <div className="row rg-60">
          <div className="col-lg-6">
            <div className="section-faqs-left mr-15">
              <div className="image tf-animate-1">
                <Image
                  src="/image/section/FAQ-image.jpg"
                  alt=""
                  className="lazyloaded"
                  width={615}
                  height={615}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="section-content ml-35">
              <div className="heading-section">
                <div className="wow fadeInUp">
                  <a href="#" className="tag label text-btn-uppercase">
                    FAQs
                  </a>
                </div>
                <h3 className="wow fadeInUp">
                  Find Answers to Your <br />
                  Question
                </h3>
              </div>

              <div className="wg-according style-border" id="According">
                {/* 1️⃣ First question OPEN by default */}
                <div className="according-item">
                  <h5>
                    <a
                      href="#according-1"
                      data-bs-toggle="collapse"
                      className="title-according" // removed "collapsed"
                    >
                      What is Kidz Holding?
                      <span />
                    </a>
                  </h5>
                  <div
                    id="according-1"
                    className="collapse show" // added "show"
                    data-bs-parent="#According"
                  >
                    <div className="according-content">
                      <p>
                        Kidz Holding is a regional leader in developing, operating, and franchising family entertainment and edutainment destinations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2️⃣ Second question CLOSED by default */}
                <div className="according-item">
                  <h5>
                    <a
                      href="#according-2"
                      data-bs-toggle="collapse"
                      className="title-according collapsed" // added "collapsed"
                    >
                      What types of entertainment concepts does Kidz Holding offer?
                      <span />
                    </a>
                  </h5>
                  <div
                    id="according-2"
                    className="collapse" // removed "show"
                    data-bs-parent="#According"
                  >
                    <div className="according-content">
                      <p>
                        We create a diverse portfolio of concepts including edutainment cities, family leisure hubs, social entertainment venues, active play zones, and themed attractions for all age groups.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3 */}
                <div className="according-item">
                  <h5>
                    <a
                      href="#according-3"
                      data-bs-toggle="collapse"
                      className="title-according collapsed"
                    >
                      Which markets do Kidz Holding operate in?
                      <span />
                    </a>
                  </h5>
                  <div
                    id="according-3"
                    className="collapse"
                    data-bs-parent="#According"
                  >
                    <div className="according-content">
                      <p>
                        We are present in Qatar and Lebanon with expansion plans into Saudi Arabia, UAE, Egypt, and additional markets across the region.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4 */}
                <div className="according-item">
                  <h5>
                    <a
                      href="#according-4"
                      data-bs-toggle="collapse"
                      className="title-according collapsed"
                    >
                      Can governments or municipalities partner with Kidz Holding?
                      <span />
                    </a>
                  </h5>
                  <div
                    id="according-4"
                    className="collapse"
                    data-bs-parent="#According"
                  >
                    <div className="according-content">
                      <p>
                        Yes. We collaborate with government entities to develop educational and family-focused entertainment destinations that support national visions, tourism goals, and community development.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 5 */}
                <div className="according-item">
                  <h5>
                    <a
                      href="#according-5"
                      data-bs-toggle="collapse"
                      className="title-according collapsed"
                    >
                      Do you offer franchise opportunities?
                      <span />
                    </a>
                  </h5>
                  <div
                    id="according-5"
                    className="collapse"
                    data-bs-parent="#According"
                  >
                    <div className="according-content">
                      <p>
                        Absolutely. We provide turnkey franchise models for investors and operators looking to bring our entertainment concepts to their cities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 6 */}
                <div className="according-item">
                  <h5>
                    <a
                      href="#according-5"
                      data-bs-toggle="collapse"
                      className="title-according collapsed"
                    >
                      How can investors collaborate with Kidz Holding?
                      <span />
                    </a>
                  </h5>
                  <div
                    id="according-5"
                    className="collapse"
                    data-bs-parent="#According"
                  >
                    <div className="according-content">
                      <p>
                        Investors can partner with us through franchising, joint ventures, or direct project development in new markets. 
                      </p>
                    </div>
                  </div>
                </div>

                {/* 7 */}

              <div className="according-item">
                  <h5>
                    <a
                      href="#according-5"
                      data-bs-toggle="collapse"
                      className="title-according collapsed"
                    >
                      Does Kidz Holding work with schools and educational institutions?
                      <span />
                    </a>
                  </h5>
                  <div
                    id="according-5"
                    className="collapse"
                    data-bs-parent="#According"
                  >
                    <div className="according-content">
                      <p>
                        Yes. Our edutainment models include school partnerships, educational programs, workshops, and curriculum-integrated learning experiences.
                      </p>
                    </div>
                  </div>
                </div>
                {/* 8 */}

                <div className="according-item">
                  <h5>
                    <a
                      href="#according-5"
                      data-bs-toggle="collapse"
                      className="title-according collapsed"
                    >
                      How do you ensure safety inside your entertainment destinations?
                      <span />
                    </a>
                  </h5>
                  <div
                    id="according-5"
                    className="collapse"
                    data-bs-parent="#According"
                  >
                    <div className="according-content">
                      <p>
                        All our destinations follow strict international safety standards, staff certifications, emergency procedures, and continuous operational audits.
                      </p>
                    </div>
                  </div>
                </div>
                {/* 9 */}

                <div className="according-item">
                  <h5>
                    <a
                      href="#according-5"
                      data-bs-toggle="collapse"
                      className="title-according collapsed"
                    >
                      How can I start a partnership or open a franchise in my country?
                      <span />
                    </a>
                  </h5>
                  <div
                    id="according-5"
                    className="collapse"
                    data-bs-parent="#According"
                  >
                    <div className="according-content">
                      <p>
                        You can fill out the partnership or franchise inquiry form on our website, and our team will contact you to evaluate the opportunity and share the next steps. 
                      </p>
                    </div>
                  </div>
                </div>

                
              </div>
              {/* end wg-according */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
