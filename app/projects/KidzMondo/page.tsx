"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Brands1 from "@/components/common/Brands1";
import KidzMondoFormatsTable from "@/components/common/KidzMondoFormatsTable";

export default function KidzMondoPage() {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const update = () => swiperRef.current?.update?.();
    const t = setTimeout(update, 120);

    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  const gallery = [
    { src: "/image/kidzMondo/kidzMondo2.png", alt: "KidzMondo Activity 1" },
    { src: "/image/kidzMondo/kidzMondo3.png", alt: "KidzMondo Activity 2" },
    { src: "/image/kidzMondo/about – philosophy.jpg", alt: "KidzMondo Activity 3" },
    { src: "/image/kidzMondo/about 1.jpg", alt: "KidzMondo Activity 4" },
    { src: "/image/kidzMondo/about 2.jpg", alt: "KidzMondo Activity 5" },
    { src: "/image/kidzMondo/about 3.jpg", alt: "KidzMondo Activity 6" },
  ];

  return (
    <>
      {/* HERO IMAGE */}
      <div className="kidz-hero">
        <Image
          src="/image/page-title/our-ventures (1).png"
          alt="KidzMondo Hero"
          width={1920}
          height={1080}
          priority
          className="kidz-hero__img"
        />
      </div>

      {/* ✅ FULL-WIDTH OVERVIEW (fixes the ugly cut sides) */}
      <section className="kidz-overview">
        <div className="tf-container">
          <div className="kidz-overview__inner">
            <div className="kidz-overview__grid">
              {/* Left: Logo */}
              <div className="kidz-overview__logo">
                <Image
                  src="/image/logos/Kidzmondo logo.svg"
                  alt="KidzMondo"
                  width={260}
                  height={90}
                  priority
                />
              </div>

              {/* Right: Text */}
              <div className="kidz-overview__content">
                {/* <div className="kidz-overview__tag">OUR BRANDS</div> */}
                <h1 className="kidz-overview__title">KidzMondo</h1>

                <h5 className="kidz-overview__h">Overall Concept</h5>
                <p className="kidz-overview__p">
                  KidzMondo is a replica of a real-life city which provides children between the
                  ages of 2 to 14 with role play activities that are designed to be fun and
                  pedagogical, based on the ‘edutainment’ or playful learning concept.
                </p>
                <p className="kidz-overview__p">
                  It is an ideal forum where social rules and values are promoted and ingrained in
                  children to prepare them to behave as good adult citizens would in real life.
                </p>

                <h5 className="kidz-overview__h">Objective</h5>
                <p className="kidz-overview__p">
                  KidzMondo aims to compliment local school curricula and seeks to teach children
                  basic citizenship values and rules, enlightening them about the society they live
                  in today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT (swiper + sections) */}
      <div className="tf-container kidz-main">
        <div className="row">
          <div className="col-12">
            <div className="blog-content blog-details-2-content blog-details-content">
              {/* ✅ SWIPER */}
              <div className="kidzmondo-gallery">
                <Swiper
                  modules={[Navigation]}
                  navigation
                  spaceBetween={24}
                  slidesPerView={1}
                  loop
                  className="kidzmondo-slider"
                  breakpoints={{ 768: { slidesPerView: 2 } }}
                  observer
                  observeParents
                  resizeObserver
                  watchOverflow
                  onSwiper={(s) => (swiperRef.current = s)}
                >
                  {gallery.map((img) => (
                    <SwiperSlide key={img.src}>
                      <div className="image-blog">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={444}
                          height={334}
                          style={{ width: "100%", height: "auto", display: "block" }}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* SECTIONS */}
              <div className="list-desc" style={{ marginTop: 26 }}>
                <div className="desc-blog">
                  <h5 className="title-desc">Education</h5>
                  <p className="body-2">
                    It is an established fact that children learn best through play and
                    experiencing real hands-on activities.
                    <br />
                    <br />
                    The range of playful activities inside KidzMondo is exclusively created and
                    constructed to help, encourage and advance physical growth while stimulating
                    intellectual growth.
                    <br />
                    <br />
                    The KidzMondo Educational Curriculum improves the development of skills and
                    attitudes while also motivating creative thinking and enhancing self-esteem and
                    self-confidence levels.
                    <br />
                    <br />
                    KidzMondo also teaches financial literacy by establishing its own economy, where
                    kids exchange Kidlars, the local city currency, learning about money and how to
                    utilize it.
                  </p>
                </div>

                <div className="desc-blog">
                  <h5 className="title-desc" style={{ marginTop: "50px" }}>
                    Entertainment
                  </h5>
                  <p className="body-2">
                    Children can choose between 120+ different professions which are practiced in a
                    replica of the most representative establishments in an actual city; an
                    airport, a bank, factories, a theater, shops, a police station, a fire
                    department, a newspaper publisher, a hotel, a TV studio, a radio station, a gas
                    station, a racetrack and many more…
                  </p>
                </div>

                <div className="desc-blog">
                  <h5 className="title-desc" style={{ marginTop: "50px" }}>
                    Edutainment Competencies
                  </h5>
                  <p className="body-2">
                    The KidzMondo experience develops a wide range of competencies:
                  </p>

                  <ul className="body-2">
                    <li>- Cognitive Development</li>
                    <li>- Emotional Intelligence</li>
                    <li>- Psychomotor Development</li>
                    <li>- Social Development</li>
               
                  </ul>
                </div>
              </div>

              {/* TABLE */}
              <div >
                <KidzMondoFormatsTable />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BRANDS */}
      <section style={{ padding: "40px 0" }}>
        <div className="tf-container">
          <Brands1 />
        </div>
      </section>
    </>
  );
}