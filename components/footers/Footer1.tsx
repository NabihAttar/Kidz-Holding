"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import NewsLetterForm from "../common/NewsLetterForm";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer1({ parentClass = "footer" }) {
  useEffect(() => {
    const headings = document.querySelectorAll(".title-mobile");

    const toggleOpen = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const parent = target.closest(".footer-col-block") as HTMLElement | null;
      if (!parent) return;
      const content = parent.querySelector(
        ".tf-collapse-content"
      ) as HTMLElement | null;
      if (!content) return;

      if (parent.classList.contains("open")) {
        parent.classList.remove("open");
        content.style.height = "0px";
      } else {
        parent.classList.add("open");
        content.style.height = content.scrollHeight + 10 + "px";
      }
    };

    headings.forEach((heading) => {
      heading.addEventListener("click", toggleOpen);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []); // Empty dependency array means this will run only once on mount

  return (
    <footer className={parentClass} id="footer">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="footer-top">
              <div className="footer-left">
                <div className="logo-footer">
                  <Link href={`/`} className="logo">
                    <Image
                      alt=""
                      src="/image/logo/kidzLogo.svg"
                      width={169}
                      height={41}
                    />
                  </Link>
                </div>
                <div className="text caption-1">
                  Kidz Holding is the parent company behind KidzMondo and a portfolio of leading family entertainment and leisure ventures across MENA, creating safe, engaging destinations and scalable franchise and investment opportunities.
                </div>
                {/* <div className="contact-footer">
                  <div className="address contact-top contact-footer-content">
                    <p className="caption-2">Our address</p>
                    <a href="#">101 E 129th St, East Chicago, IN 46312, US</a>
                  </div>
                  <div className="contact-bottom">
                    <div className="contact-footer-content">
                      <p className="caption-2">Support 24/7</p>
                      <a href="#">1-555-678-8888</a>
                    </div>
                    <div className="contact-footer-content">
                      <p className="caption-2">Email Address</p>
                      <a href="#">example@gmail.com</a>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="footer-center">
                <div className="footer-content our-services footer-col-block">
                  <div className="title-mobile label text-btn-uppercase">
                    Our Brands
                    <i className="icon-arrow-51" />
                  </div>
                  <div className="tf-collapse-content">
                    <ul>

                      <li className="support-item-footer caption-1">
                        <Link href={`/projects/KidzMondo`}>KidzMondo</Link>
                      </li>

                      <li className="support-item-footer caption-1">
                        <Link href={`/projects/TheEscapeParkandResort`}>
                          The Escape Park & Resort
                        </Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link href={`/projects/Karnavali`}>Karnavali</Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link href={`/projects/StarDistrict`}>
                          Star District
                        </Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link href={`/projects/BowlNRock`}>
                          Bowl N Rock
                        </Link>
                      </li>

                      {/* <li className="support-item-footer caption-1">
                        <Link href={`/projects/KidzAcademy`}>Kidz Academy </Link>
                      </li> */}

                      <li className="support-item-footer caption-1">
                        <Link href={`/projects/KMInnovationCenter`}>
                          KM Innovation Center
                        </Link>
                      </li>


                      {/* <li className="support-item-footer caption-1">
                        <Link href={`/projects/UrbanVillage`}>
                          Urban Village
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
                <div className="footer-content our-services footer-col-block">
                  <div className="title-mobile label text-btn-uppercase">
                    Quick Links
                    <i className="icon-arrow-51" />
                  </div>
                  <div className="tf-collapse-content">
                    <ul>
                      {/* <li className="support-item-footer caption-1">
                        <Link href={`/`}>Home</Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link href={`/about-us`}>About Us</Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link href={`/Investor-Relations`}>Investor Relations</Link>
                      </li> */}
                      <li className="support-item-footer caption-1">
                        <a href="/Franchise-Partnership">Franchise & Partnership</a>
                      </li>
                      {/* <li className="support-item-footer caption-1">
                        <a href="/blog">Blogs</a>
                      </li> */}
                      {/* <li className="support-item-footer caption-1">
                        <Link href={`/Business-Ventures`}>Business Ventures</Link>
                      </li> */}
                      <li className="support-item-footer caption-1">
                        <Link href={`/services`}>Industries We Serve</Link>
                      </li>
                      {/* <li className="support-item-footer caption-1">
                        <Link href={`/blog`}>Blogs</Link>
                      </li> */}
                      <li className="support-item-footer caption-1">
                        <Link href={`/careers`}>Careers</Link>
                      </li>
                      {/* <li className="support-item-footer caption-1">
                        <Link href={`/contact-us`}>Contact</Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-right">
                <div className="footer-subscribe">
                  <div className="label text-btn-uppercase">
                    Get In Touch
                  </div>
                  {/* <NewsLetterForm /> */}
                  <Link
                    href={`/contact-us`}
                    className="tf-btn style-1 bg-white text-center"
                  >
                    <span> Contact Us </span>
                  </Link>
                  {/* <div className="text caption-2">
                    Sign up for updates on our latest news and events. No spam,
                    just valuable insights!
                  </div> */}
                </div>
                <div className="footer-social">
                  <div className="title-footer">Follow Us:</div>
                  <ul className="tf-social style-border radius-50 g-8 style-2">
                    {/* <li className="item">
                      <a href="#">
                        <div className="icon">
                          <i className="icon-messenger" />
                        </div>
                      </a>
                    </li> */}
                    {/* <li className="item">
                      <a href="#">
                        <div className="icon">
                          <i className="icon-x" />
                        </div>
                      </a>
                    </li> */}
                    {/* <li className="item">
                      <a href="#">
                        <div className="icon">
                          <i className="icon-ig1" />
                        </div>
                      </a>
                    </li> */}
                    {/* <li className="item">
                      <a href="#">
                        <div className="icon">
                          <i className="icon-skype" />
                        </div>
                      </a>
                    </li> */}
                    <li className="item">
                      <a
                        href="https://www.linkedin.com/company/kidz-holding/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ backgroundColor: "white" }}
                      >
                        <div className="icon">
                          <FaLinkedinIn />
                        </div>
                      </a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="footer-bottom-inner">
                <div className="left">
                  <div className="text caption-1">
                    ©2025 Kidz Holding. All Rights Reserved.
                  </div>
                </div>
                <div className="right">
                  {/* <ul>
                    <li>
                      <a href="#" className="caption-1">
                        Terms Of Services
                      </a>
                    </li>
                    <li>
                      <a href="#" className="caption-1">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="caption-1">
                        Cookie Policy
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
