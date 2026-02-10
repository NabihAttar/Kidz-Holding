"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import { MenuLink } from "@/types/menuLink";
import { FaLinkedinIn } from "react-icons/fa";

export default function MobileMenu() {
  
  const pathname = usePathname();

  // 🔹 Same active logic as Nav
  const isMenuActive = (link: MenuLink) => {
    const currentPath = pathname?.split("/")[1] ?? "";
    const hrefPath = link.href?.split("/")[1];
    const onePagePath = link.onePage?.split("/")[1];
    return hrefPath === currentPath || onePagePath === currentPath;
  };

  const isMenuParentActive = (menu: MenuLink[]) => {
    return menu.some((elm) => isMenuActive(elm));
  };

  // Partnership dropdown items (same as Nav)
  const partnershipLinks: MenuLink[] = [
    { href: "/Investor-Relations", title: "Investor Relations" },
    { href: "/Franchise-Partnership", title: "Franchise & Partnership" },
  ];

  // Our Projects dropdown items (same as Nav)
  const projectLinks: MenuLink[] = [
        { href: "/Our-Brands ", title: "All Projects" },

    { href: "/projects/KidzMondo", title: "KidzMondo" },
    {
      href: "/projects/TheEscapeParkandResort",
      title: "The Escape Park & Resort",
    },
    { href: "/projects/Karnavali", title: "Karnavali" },
    { href: "/projects/StarDistrict", title: "Star District" },
    // { href: "/projects/KidzAcademy", title: "Kidz Academy" },
    { href: "/projects/KMInnovationCenter", title: "KM Innovation Center" },
    // { href: "/projects/UrbanVillage", title: "Urban Village" },
    { href: "/projects/BowlNRock", title: "BOWL N ROCK" },
  ];

  return (
    <div
      className="offcanvas offcanvas-start mobile-nav-wrap"
      id="canvasMobile"
    >
      <div className="inner-mobile-nav">
        {/* -------- TOP HEADER (logo + close) ---------- */}
        <div className="top-header-mobi">
          <div className="logo-mobile">
            <Link href={`/`}>
              <Image
                alt=""
                src="/image/logo/darklogo.svg"
                width={169}
                height={40}
              />
            </Link>
          </div>
          <button
            className="mobile-nav-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="black"
              x="0px"
              y="0px"
              width="20px"
              height="20px"
              viewBox="0 0 122.878 122.88"
              enableBackground="new 0 0 122.878 122.88"
              xmlSpace="preserve"
            >
              <g>
                <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" />
              </g>
            </svg>
          </button>
        </div>

        {/* -------------- MENU ---------------- */}
        <nav className="mobile-main-nav">
          <ul id="menu-mobile" className="menu">
            {/* HOME */}
            <li
              className={`menu-item ${
                isMenuActive({ href: "/" } as MenuLink)
                  ? "current-menu-mobile-item"
                  : ""
              }`}
            >
              <Link href="/" className="item-link">
                Home
              </Link>
            </li>

            {/* ABOUT US */}
            <li
              className={`menu-item ${
                isMenuActive({ href: "/about-us" } as MenuLink)
                  ? "current-menu-mobile-item"
                  : ""
              }`}
            >
              <Link href="/about-us" className="item-link">
                About Us
              </Link>
            </li>      
                  {/* OUR PROJECTS (dropdown, same children as Nav) */}


             <li
              className={`menu-item menu-item-has-children-mobile ${
                isMenuParentActive(projectLinks)
                  ? "current-menu-mobile-item"
                  : ""
              }`}
            >
              <a
                href="#mobile-projects"
                data-bs-toggle="collapse"
                className="collapsed"
              >
                Our Brands
              </a>
              <div
                id="mobile-projects"
                className="collapse"
                data-bs-parent="#menu-mobile"
              >
                <ul className="sub-menu-mobile">
                  {projectLinks.map((link, i) => (
                    <li
                      key={i}
                      className={`menu-item ${
                        isMenuActive(link)
                          ? "current-menu-mobile-item"
                          : ""
                      }`}
                    >
                      <Link href={link.href}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>


           

            {/* SERVICES */}
            <li
              className={`menu-item ${
                isMenuActive({ href: "/services" } as MenuLink)
                  ? "current-menu-mobile-item"
                  : ""
              }`}
            >
              <Link href="/services" className="item-link">
                Industries We Serve 
              </Link>
            </li>
            <li
        className={`menu-item ${
          isMenuActive({ href: "/Franchise-Partnership" } as MenuLink)
            ? "current-menu-item"
            : ""
        }`}
      >
        <Link href="/Franchise-Partnership" className="item-link">
          Business Ventures
        </Link>
      </li>
       <li
              className={`menu-item ${
                isMenuActive({ href: "/careers" } as MenuLink)
                  ? "current-menu-mobile-item"
                  : ""
              }`}
            >
              <Link href="/careers" className="item-link">
                Careers
              </Link>
            </li>
            {/* PARTNERSHIP (dropdown) */}
            {/* <li
              className={`menu-item menu-item-has-children-mobile ${
                isMenuParentActive(partnershipLinks)
                  ? "current-menu-mobile-item"
                  : ""
              }`}
            >
              <a
                href="#mobile-partnership"
                data-bs-toggle="collapse"
                className="collapsed"
              >
                Business Ventures
              </a>
              <div
                id="mobile-partnership"
                className="collapse"
                data-bs-parent="#menu-mobile"
              >
                <ul className="sub-menu-mobile">
                  {partnershipLinks.map((link, i) => (
                    <li
                      key={i}
                      className={`menu-item ${
                        isMenuActive(link)
                          ? "current-menu-mobile-item"
                          : ""
                      }`}
                    >
                      <Link href={link.href}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li> */}

            {/* OUR VENTURES */}
            {/* <li
              className={`menu-item ${
                isMenuActive({ href: "/Our-Ventures" } as MenuLink)
                  ? "current-menu-mobile-item"
                  : ""
              }`}
            >
              <Link href="/Business-Ventures" className="item-link">
                Business Ventures
              </Link>
            </li> */}


            {/* BLOGS */}
            {/* <li
              className={`menu-item ${
                isMenuActive({ href: "/blog" } as MenuLink)
                  ? "current-menu-mobile-item"
                  : ""
              }`}
            >
              <Link href="/blog" className="item-link">
                Blogs
              </Link>
            </li> */}

             {/* <li
              className={`menu-item ${
                isMenuActive({ href: "/contact-us" } as MenuLink)
                  ? "current-menu-mobile-item"
                  : ""
              }`}
            >
              <Link href="/contact-us" className="item-link">
                Contact Us
              </Link>
            </li>   */}

            {/* If you later want Careers / Contact in mobile too, just uncomment: */}
            {/*
            <li
              className={`menu-item ${
                isMenuActive({ href: "/careers" } as MenuLink)
                  ? "current-menu-mobile-item"
                  : ""
              }`}
            >
              <Link href="/careers" className="item-link">
                Careers
              </Link>
            </li>

            <li
              className={`menu-item ${
                isMenuActive({ href: "/contact-us" } as MenuLink)
                  ? "current-menu-mobile-item"
                  : ""
              }`}
            >
              <Link href="/contact-us" className="item-link">
                Contact
              </Link>
            </li>
            */}
          </ul>

          {/* -------- CONTACT INFO (kept same) -------- */}
          {/* <div className="contact-mobile">
            <h6 className="title-contact-mobile">Contact Info</h6>
            <div className="content-contact-moblile">
              <a href="#">
                <i className="icon-MapPin" /> 101 E 129th St, East Chicago, IN
                46312, US
              </a>
            </div>
            <div className="content-contact-moblile">
              <a href="#">
                <i className="icon-Envelope" /> example@gmail.com
              </a>
            </div>
            <div className="content-contact-moblile">
              <a href="#">
                <i className="icon-PhoneCall" /> 1-555-678-8888
              </a>
            </div>
            <div className="content-contact-moblile">
              <ul className="tf-social style-border radius-50 g-8 style-2 color-on-suface-container">
                {/* <li className="item">
                  <a href="#">
                    <div className="icon">
                      <i className="icon-messenger" />
                    </div>
                  </a>
                </li> 
                <li className="item">
                  <a href="#">
                    <div className="icon">
                      <i className="icon-x" />
                    </div>
                  </a>
                </li> 
                <li className="item">
                  <a href="#">
                    <div className="icon">
                      <i className="icon-ig1" />
                    </div>
                  </a>
                </li> 
                 <li className="item">
                  <a href="#">
                    <div className="icon">
                      <i className="icon-skype" />
                    </div>
                  </a>
                </li> 
        <li className="item">
  <a
    href="https://www.linkedin.com/company/kidz-holding/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ backgroundColor: "#232559" }}
  >
    <div className="icon"  style={{ color: "white" }}>
      <FaLinkedinIn />
    </div>
  </a>
</li>

              </ul>
            </div>
          </div> */}
        </nav>
      </div>
    </div>
  );
}
