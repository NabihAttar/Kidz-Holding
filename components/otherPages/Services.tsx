import React from "react";
import Link from "next/link";
import Image from "next/image";

type Project = {
  href: string;
  title: string;
  logoSrc: string;
  logoAlt: string;
  logoW: number;
  logoH: number;
};

const projects: Project[] = [
  {
    href: "/projects/KidzMondo",
    title: "KidzMondo",
    logoSrc: "/image/logos/Kidzmondo logo.svg",
    logoAlt: "KidzMondo",
    logoW: 160,
    logoH: 50,
  },
  {
    href: "/projects/TheEscapeParkandResort",
    title: "The Escape Park & Resort",
    logoSrc: "/image/logos/The Escape logo.svg",
    logoAlt: "The Escape Park & Resort",
    logoW: 190,
    logoH: 50,
  },
  {
    href: "/projects/Karnavali",
    title: "Karnavali",
    logoSrc: "/image/logos/Karnavali logo.svg",
    logoAlt: "Karnavali",
    logoW: 170,
    logoH: 50,
  },
  {
    href: "/projects/StarDistrict",
    title: "Star District",
    logoSrc: "/image/logos/Star District logo.svg",
    logoAlt: "Star District",
    logoW: 170,
    logoH: 50,
  },
  {
    href: "/projects/BowlNRock",
    title: "BOWL N ROCK",
    logoSrc: "/image/logos/Bowl N Rock logo.svg",
    logoAlt: "Bowl N Rock",
    logoW: 160,
    logoH: 50,
  },
  {
    href: "/projects/KMInnovationCenter",
    title: "KM Innovation Center",
    logoSrc: "/image/logos/KM logo.svg",
    logoAlt: "KM Innovation Center",
    logoW: 190,
    logoH: 50,
  },

  
];

function TitleWithLogo({
  logoSrc,
  logoAlt,
  logoW,
  logoH,
}: {
  logoSrc: string;
  logoAlt: string;
  logoW: number;
  logoH: number;
}) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={logoW}
          height={logoH}
          priority
          style={{ height: "auto", maxWidth: "100%" }}
        />
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="section-industry page-industry tf-spacing-2">
      <div className="tf-container position-relative">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <div className="text-anime-wave-1">
                <a href="#" className="tag label text-btn-uppercase">
                  Our Brands
                </a>
              </div>

              <h3 className="title-section text-anime-wave-1 mb-12">
                Discover Our Brands
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="tf-container position-relative">
        <div className="row rg-20">
          {projects.map((p) => (
            <div className="col-lg-4 col-md-6 industry-col" key={p.href}>
              <Link
                href={p.href}
                className="industry-item style-2 no-underline industry-card"
              >
                <div className="top">
                  <TitleWithLogo
                    logoSrc={p.logoSrc}
                    logoAlt={p.logoAlt}
                    logoW={p.logoW}
                    logoH={p.logoH}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}