import Image from "next/image";
import React from "react";

const faqs = [
  {
    id: "according-1",
    q: "What is Kidz Holding?",
    a: "Kidz Holding is a regional leader in developing, operating, and franchising family entertainment and edutainment destinations.",
  },
  {
    id: "according-2",
    q: "What types of entertainment concepts does Kidz Holding offer?",
    a: "We create a diverse portfolio of concepts including edutainment cities, family leisure hubs, social entertainment venues, active play zones, and themed attractions for all age groups.",
  },
  {
    id: "according-3",
    q: "Which markets do Kidz Holding operate in?",
    a: "We are present in Qatar and Lebanon with expansion plans into Saudi Arabia, UAE, Egypt, and additional markets across the region.",
  },
  {
    id: "according-4",
    q: "Can governments or municipalities partner with Kidz Holding?",
    a: "Yes. We collaborate with government entities to develop educational and family-focused entertainment destinations that support national visions, tourism goals, and community development.",
  },
  {
    id: "according-5",
    q: "Do you offer franchise opportunities?",
    a: "Absolutely. We provide turnkey franchise models for investors and operators looking to bring our entertainment concepts to their cities.",
  },
  {
    id: "according-6",
    q: "How can investors collaborate with Kidz Holding?",
    a: "Investors can partner with us through franchising, joint ventures, or direct project development in new markets.",
  },
  {
    id: "according-7",
    q: "Does Kidz Holding work with schools and educational institutions?",
    a: "Yes. Our edutainment models include school partnerships, educational programs, workshops, and curriculum-integrated learning experiences.",
  },
  {
    id: "according-8",
    q: "How do you ensure safety inside your entertainment destinations?",
    a: "All our destinations follow strict international safety standards, staff certifications, emergency procedures, and continuous operational audits.",
  },
  {
    id: "according-9",
    q: "How can I start a partnership or open a franchise in my country?",
    a: "You can fill out the partnership or franchise inquiry form on our website, and our team will contact you to evaluate the opportunity and share the next steps.",
  },
];

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
                {faqs.map((item, idx) => {
                  const isOpen = idx === 0; // ✅ only first open
                  return (
                    <div className="according-item" key={item.id}>
                      <h5>
                        <a
                          href={`#${item.id}`}
                          data-bs-toggle="collapse"
                          className={`title-according ${isOpen ? "" : "collapsed"}`}
                          aria-expanded={isOpen ? "true" : "false"}
                          aria-controls={item.id}
                        >
                          {item.q}
                          <span />
                        </a>
                      </h5>

                      <div
                        id={item.id}
                        className={`collapse ${isOpen ? "show" : ""}`}
                        data-bs-parent="#According"
                      >
                        <div className="according-content">
                          <p>{item.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* end wg-according */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
