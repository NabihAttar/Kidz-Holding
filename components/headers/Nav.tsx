// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import React from "react";
// import {
//   aboutLinks,
//   blogLinks,
//   caseStudyLinks,
//   homeItems,
//   productLinks,
//   serviceLinks,
// } from "@/data/menu";
// import { usePathname } from "next/navigation";
// import { MenuLink } from "@/types/menuLink";

// export default function Nav() {
//   const pathname = usePathname();

//   const isMenuActive = (link: MenuLink) => {
//     const currentPath = pathname?.split("/")[1];
//     const hrefPath = link.href?.split("/")[1];
//     const onePagePath = link.onePage?.split("/")[1];
//     return hrefPath === currentPath || onePagePath === currentPath;
//   };

//   const isMenuParentActive = (menu: MenuLink[]) => {
//     return menu.some((elm) => isMenuActive(elm));
//   };

//   return (
//     <>
//       {/* <li
//         className={`menu-item menu-item-has-children ${
//           isMenuParentActive(homeItems) ? "current-menu-item" : ""
//         }`}
//       >
//         <a href="#" className="item-link">Home</a>
//         <div className="sub-menu-home">
//           <ul>
//             {homeItems.map((item, index) => (
//               <li
//                 key={index}
//                 className={`item${isMenuActive(item) ? " current-item-home" : ""}`}
//               >
//                 <div>
//                   <div className="image">
//                     <Link className="img-home" href={item.href}>
//                       <Image
//                         src={item.img}
//                         className="lazyload"
//                         alt={item.title}
//                         width={415}
//                         height={342}
//                       />
//                     </Link>
//                     <div className="list-btn">
//                       <Link className="page-btn" href={item.onePage}>One Page</Link>
//                       <Link className="page-btn" href={item.multiPage}>Multi page</Link>
//                     </div>
//                   </div>
//                   <h6 className="name-home">{item.title}</h6>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </li> */}
//        <li
//         className={`menu-item ${
//           isMenuActive({ href: "/" } as MenuLink) ? "current-menu-item" : ""
//         }`}
//       >
//         <Link href="/" className="item-link">Home</Link>
//       </li>

//       {/* <li
//         className={`menu-item menu-item-has-children position-relative ${
//           isMenuParentActive(serviceLinks) ? "current-menu-item" : ""
//         }`}
//       >
//         <a href="#" className="item-link">Services</a>
//         <ul className="sub-menu">
//           {serviceLinks.map((item, index) => (
//             <li
//               className={`sub-menu-item ${isMenuActive(item) ? "current-item" : ""}`}
//               key={index}
//             >
//               <Link href={item.href} className="item-link-2">{item.title}</Link>
//             </li>
//           ))}
//         </ul>
//       </li> */}

//       {/* <li
//         className={`menu-item menu-item-has-children position-relative ${
//           isMenuParentActive(caseStudyLinks) ? "current-menu-item" : ""
//         }`}
//       >
//         <a href="#" className="item-link">Case</a>
//         <ul className="sub-menu">
//           {caseStudyLinks.map((item, index) => (
//             <li
//               className={`sub-menu-item ${isMenuActive(item) ? "current-item" : ""}`}
//               key={index}
//             >
//               <Link href={item.href} className="item-link-2">{item.title}</Link>
//             </li>
//           ))}
//         </ul>
//       </li> */}

//       {/* <li
//         className={`menu-item menu-item-has-children position-relative ${
//           isMenuParentActive(aboutLinks) ? "current-menu-item" : ""
//         }`}
//       >
//         <a href="#" className="item-link">Pages</a>
//         <ul className="sub-menu">
//           {aboutLinks.map((item, index) => (
//             <li
//               className={`sub-menu-item ${isMenuActive(item) ? "current-item" : ""}`}
//               key={index}
//             >
//               <Link href={item.href} className="item-link-2">{item.title}</Link>
//             </li>
//           ))}
//         </ul>
//       </li> */}

//       {/* ✅ NEW: top-level Our Ventures -> /testimonials */}
//       <li
//         className={`menu-item ${
//           isMenuActive({ href: "/testimonials" } as MenuLink) ? "current-menu-item" : ""
//         }`}
//       >
//         <Link href="/testimonials" className="item-link">Our Ventures</Link>
//       </li>

//       <li
//   className={`menu-item ${
//     isMenuActive({ href: "/industries" } as MenuLink) ? "current-menu-item" : ""
//   }`}
// >
//   <Link href="/industries" className="item-link">Our Project</Link>
// </li>

// {/* ✅ NEW: Franchise & Partnership -> /services-details-3 */}
// <li
//   className={`menu-item ${
//     isMenuActive({ href: "/services-details-3" } as MenuLink)
//       ? "current-menu-item"
//       : ""
//   }`}
// >
//   <Link href="/services-details-3" className="item-link">
//     Franchise &amp; Partnership
//   </Link>
// </li>




//       {/* <li
//         className={`menu-item menu-item-has-children position-relative ${
//           isMenuParentActive(productLinks) ? "current-menu-item" : ""
//         }`}
//       >
//         <a href="#" className="item-link">Our Store</a>
//         <ul className="sub-menu">
//           {productLinks.map((item, index) => (
//             <li
//               className={`sub-menu-item ${isMenuActive(item) ? "current-item" : ""}`}
//               key={index}
//             >
//               <Link href={item.href} className="item-link-2">{item.title}</Link>
//             </li>
//           ))}
//         </ul>
//       </li> */}

//       {/* <li
//         className={`menu-item menu-item-has-children position-relative ${
//           isMenuParentActive(blogLinks) ? "current-menu-item" : ""
//         }`}
//       >
//         <a href="#" className="item-link">Blog</a>
//         <ul className="sub-menu">
//           {blogLinks.map((item, index) => (
//             <li
//               key={index}
//               className={`sub-menu-item ${isMenuActive(item) ? "current-item" : ""}`}
//             >
//               <Link href={item.href} className="item-link-2">{item.title}</Link>
//             </li>
//           ))}
//         </ul>
//       </li> */}
//       <li
//   className={`menu-item ${
//     isMenuActive({ href: "/services" } as MenuLink) ? "current-menu-item" : ""
//   }`}
// >
//   <Link href="/services" className="item-link">services</Link>
// </li>
//       <li
//   className={`menu-item ${
//     isMenuActive({ href: "/blog" } as MenuLink) ? "current-menu-item" : ""
//   }`}
// >
//   <Link href="/blog" className="item-link">Blog</Link>
// </li>
//       <li
//   className={`menu-item ${
//     isMenuActive({ href: "/Investor-Relations" } as MenuLink) ? "current-menu-item" : ""
//   }`}
// >
//   <Link href="/Investor-Relations" className="item-link">Investor Relations</Link>
// </li>


// <li
//   className={`menu-item ${
//     isMenuActive({ href: "/careers" } as MenuLink) ? "current-menu-item" : ""
//   }`}
// >
//   <Link href="/careers" className="item-link">Careers</Link>
// </li>


//       <li
//         className={`menu-item ${
//           isMenuActive({ href: "/about-us" } as MenuLink) ? "current-menu-item" : ""
//         }`}
//       >
//         <Link href="/about-us" className="item-link">About Us</Link>
//       </li>

//       <li
//         className={`menu-item ${
//           isMenuActive({ href: "/contact-us" } as MenuLink) ? "current-menu-item" : ""
//         }`}
//       >
//         <Link href="/contact-us" className="item-link">Contact</Link>
//       </li>
//     </>
//   );
// }


"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  aboutLinks,
  blogLinks,
  caseStudyLinks,
  homeItems,
  productLinks,
  serviceLinks,
} from "@/data/menu";
import { usePathname } from "next/navigation";
import { MenuLink } from "@/types/menuLink";

export default function Nav() {
  const pathname = usePathname();

  const isMenuActive = (link: MenuLink) => {
    const currentPath = pathname?.split("/")[1];
    const hrefPath = link.href?.split("/")[1];
    const onePagePath = link.onePage?.split("/")[1];
    return hrefPath === currentPath || onePagePath === currentPath;
  };

  const isMenuParentActive = (menu: MenuLink[]) => {
    return menu.some((elm) => isMenuActive(elm));
  };

  // Partnership dropdown items
  const partnershipLinks: MenuLink[] = [
    { href: "/Investor-Relations", title: "Investor Relations" },
    { href: "/Franchise-Partnership", title: "Franchise & Partnership" },
  ];

  // Our Projects dropdown items
  const projectLinks: MenuLink[] = [
    // { href: "/projects", title: "All Projects" },
    { href: "/projects/KidzMondo", title: "KidzMondo" },
    {
      href: "/projects/TheEscapeParkandResort",
      title: "The Escape Park & Resort",
    },
    { href: "/projects/Karnavali", title: "Karnavali" },
    { href: "/projects/StarDistrict", title: "Star District" },
    // { href: "/projects/KidzAcademy", title: "Kidz Academy" },
    { href: "/projects/BowlNRock", title: "BOWL N ROCK" },
    { href: "/projects/KMInnovationCenter", title: "KM Innovation Center" },
    // { href: "/projects/UrbanVillage", title: "Urban Village" },
    
  ];

  return (
    <>
      {/* HOME */}
      <li
        className={`menu-item ${isMenuActive({ href: "/" } as MenuLink) ? "current-menu-item" : ""
          }`}
      >
        <Link href="/" className="item-link">
          Home
        </Link>
      </li>

      {/* ABOUT US */}
      <li
        className={`menu-item ${isMenuActive({ href: "/about-us" } as MenuLink)
            ? "current-menu-item"
            : ""
          }`}
      >
        <Link href="/about-us" className="item-link">
          About Us
        </Link>
      </li>


      {/* OUR PROJECTS (dropdown) */}
      <li
        className={`menu-item menu-item-has-children position-relative ${isMenuParentActive(projectLinks) ? "current-menu-item" : ""
          }`}
      >
        <Link href="/Our-Brands" className="item-link">
          Our Brands
        </Link>
        <ul className="sub-menu">
          {projectLinks.map((item, index) => (
            <li
              className={`sub-menu-item ${isMenuActive(item) ? "current-item" : ""
                }`}
              key={index}
            >
              <Link href={item.href} className="item-link-2">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      {/* SERVICES */}
      <li
        className={`menu-item ${isMenuActive({ href: "/services" } as MenuLink)
            ? "current-menu-item"
            : ""
          }`}
      >
        <Link href="/services" className="item-link">
          Industries we serve
        </Link>
      </li>

      {/* OUR VENTURES */}
      {/* <li
        className={`menu-item ${
          isMenuActive({ href: "/Business-Ventures" } as MenuLink)
            ? "current-menu-item"
            : ""
        }`}
      >
        <Link href="/Business-Ventures" className="item-link">
          Business Ventures
        </Link>
      </li> */}

      {/* PARTNERSHIP (dropdown) */}

      <li
        className={`menu-item ${isMenuActive({ href: "/services" } as MenuLink)
            ? "current-menu-item"
            : ""
          }`}
      >
        <Link href="/Franchise-Partnership" className="item-link">
          Business Ventures
        </Link>
      </li>
      <li
        className={`menu-item ${isMenuActive({ href: "/careers" } as MenuLink) ? "current-menu-item" : ""
          }`}
      >   <Link href="/careers" className="item-link">Careers</Link>
      </li>
      {/* <li
        className={`menu-item menu-item-has-children position-relative ${
          isMenuParentActive(partnershipLinks) ? "current-menu-item" : ""
        }`}
      >
        <a href="#" className="item-link">
          Business Ventures
        </a>
        <ul className="sub-menu">
          {partnershipLinks.map((item, index) => (
            <li
              className={`sub-menu-item ${
                isMenuActive(item) ? "current-item" : ""
              }`}
              key={index}
            >
              <Link href={item.href} className="item-link-2">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </li> */}





      {/* BLOGS */}
      {/* <li
        className={`menu-item ${
          isMenuActive({ href: "/blog" } as MenuLink) ? "current-menu-item" : ""
        }`}
      >
        <Link href="/blog" className="item-link">
          Blogs
        </Link>
      </li> */}
      {/* <li
        className={`menu-item ${
          isMenuActive({ href: "/contact-us" } as MenuLink) ? "current-menu-item" : ""
        }`}
      >
        <Link href="/contact-us" className="item-link">
          Contact us
        </Link>
      </li> */}


    </>
  );
}
