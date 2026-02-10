"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import Testimonials from "@/components/common/Testimonials";
import Contact from "@/components/common/Contact";

export default function KarnavaliPage() {
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    const update = () => swiperRef.current?.update();
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
    { src: "/image/karnavali/karnavali 2.png", alt: "Karnavali View 1" },
    { src: "/image/karnavali/karnavali 3.png", alt: "Karnavali View 2" },
    { src: "/image/karnavali/karnavali 3.jpg", alt: "Karnavali View 3" },
    { src: "/image/karnavali/karnavali 4.jpg", alt: "Karnavali View 4" },
    { src: "/image/karnavali/karnavali 5.jpg", alt: "Karnavali View 5" },
    { src: "/image/karnavali/karnavali 6.jpg", alt: "Karnavali View 6" },
    { src: "/image/karnavali/karnavali 7  1.jpg", alt: "Karnavali View 7" },
  ];

  return (
    <>
      {/* HERO */}
      <div className="kidz-hero">
        <Image
          src="/image/page-title/karnavali-ourprojects-banner.jpg"
          alt="Karnavali Banner"
          width={1920}
          height={1080}
          priority
          className="kidz-hero__img"
        />
      </div>

      {/* OVERVIEW (logo left + text right) */}
      <section className="kidz-overview">
        <div className="tf-container">
          <div className="kidz-overview__inner">
            <div className="kidz-overview__grid">
              {/* Left: Logo */}
              <div className="kidz-overview__logo">
                <Image
                  src="/image/logos/Karnavali logo.svg"
                  alt="Karnavali"
                  width={260}
                  height={90}
                  priority
                />
              </div>

              {/* Right: Text */}
              <div className="kidz-overview__content">
                {/* <h1 className="kidz-overview__title">Karnavali</h1> */}

                <h5 className="kidz-overview__h">
                  The ultimate indoor carnival experience — reinvented for all age groups.
                </h5>

                <p className="kidz-overview__p">
                  Karnavali is a dynamic, indoor Family Entertainment Center designed as a
                  multi-anchor attraction that brings the energy, excitement, and magic of a
                  carnival into a modern, immersive indoor setting. With major rides, arcades,
                  simulators, active play zones, and entertainment experiences for every age
                  bracket, Karnavali offers a vibrant world of fun under one roof.
                </p>

                <p className="kidz-overview__p">
                  From heart-racing attractions to classic carnival snacks, the environment is
                  crafted to engage families, teens, and young children alike, making it a go-to
                  destination for unforgettable shared moments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN (swiper + sections) */}
      <div className="tf-container kidz-main">
        <div className="row">
          <div className="col-12">
            <div className="blog-content blog-details-2-content blog-details-content">
              {/* SWIPER */}
              <div className="karnavali-gallery">
                <Swiper
                  modules={[Navigation]}
                  navigation
                  spaceBetween={24}
                  slidesPerView={1}
                  loop
                  className="karnavali-slider"
                  breakpoints={{ 768: { slidesPerView: 2 } }}
                  observer
                  observeParents
                  resizeObserver
                  watchOverflow
                  onSwiper={(s) => (swiperRef.current = s)}
                >
                  {gallery.map((img, i) => (
                    <SwiperSlide key={img.src}>
                      <div className="image-blog">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={444}
                          height={334}
                          style={{ width: "100%", height: "auto", display: "block" }}
                          priority={i < 2}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* SECTIONS */}
              <div className="list-desc" style={{ marginTop: 26 }}>
                <div className="desc-blog">
                  <h5 className="title-desc" style={{ marginTop: "50px" }}>
                    A Multisensory Indoor Carnival
                  </h5>
                  <p className="body-2">
                    Karnavali blends thrill rides, interactive games, sensory play, and themed
                    entertainment into an experience that appeals to a wide audience.
                  </p>
                </div>

                <div className="desc-blog">
                  <h5 className="title-desc" style={{ marginTop: "50px" }}>
                    Entertainment
                  </h5>
                  <p className="body-2">
                    Guests can choose between a wide range of activities, including:
                  </p>
                </div>

                {/* keep your existing component */}
                <Testimonials />

                <div className="desc-blog">
                  <h5 className="title-desc" style={{ marginTop: "50px" }}>
                    Concept Vision
                  </h5>
                  <p className="body-2">
                    Karnavali aims to create a one-of-a-kind indoor entertainment venue where
                    children, teens, and families enjoy diverse activities inspired by the spirit
                    of a joyful carnival.
                    <br />
                    Guests step into a world filled with color, laughter, motion, and excitement;
                    an escape from routine into a place where imagination takes the lead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <Contact />
    </>
  );
}