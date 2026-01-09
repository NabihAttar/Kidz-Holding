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
    const update = () => {
      swiperRef.current?.update();
    };

    const t = setTimeout(update, 120);
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  const slides = [
    "/image/karnavali/karnavali 2.png",
    "/image/karnavali/karnavali 3.png",
    "/image/karnavali/karnavali 3.jpg",
    "/image/karnavali/karnavali 4.jpg",
    "/image/karnavali/karnavali 5.jpg",
    "/image/karnavali/karnavali 6.jpg",
    "/image/karnavali/karnavali 7  1.jpg",
  ];

  return (
    <>
      {/* HERO IMAGE */}
      <div className="kidz-hero">
        <Image
          src="/image/page-title/Karanavali-banner (1).jpg"
          alt="Karnavali Banner"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          priority
        />
      </div>

      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="blog-content blog-details-2-content blog-details-content">
             <div className="blog-details-top">
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                // padding: "0px 0",
                                margin: 0,
                                marginTop: "-60px",
                              }}
                            >
                              <Image
                                src="/image/logos/Karnavali logo.svg"
                                alt="KidzMondo"
                                width={260}
                                height={80}
                                priority
                                style={{ height: "auto" }}
                              />
                            </div>
                          </div>

              {/* Main Image */}
              <div className="image-blog">
                <Image
                  src="/image/karnavali/karnavali 1.jpg"
                  alt="Karnavali"
                  width={910}
                  height={512}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              {/* Intro Text */}
              <div className="desc-blog">
                <h5 className="title-desc">
                  The ultimate indoor carnival experience — reinvented for all
                  age groups.
                </h5>
                <p className="body-2">
                  Karnavali is a dynamic, indoor Family Entertainment Center
                  designed as a multi-anchor attraction that brings the energy,
                  excitement, and magic of a carnival into a modern, immersive
                  indoor setting. With major rides, arcades, simulators, active
                  play zones, and entertainment experiences for every age
                  bracket, Karnavali offers a vibrant world of fun under one
                  roof.
                </p>
                <p className="body-2">
                  From heart-racing attractions to classic carnival snacks, the
                  environment is crafted to engage families, teens, and young
                  children alike, making it a go-to destination for unforgettable
                  shared moments.
                </p>
              </div>

              {/* ✅ SWIPER (NO cols-img wrapper) */}
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
                  onSwiper={(s) => {
                    swiperRef.current = s;
                  }}
                >
                  {slides.map((src, i) => (
                    <SwiperSlide key={src}>
                      <div className="image-blog">
                        <Image
                          src={src}
                          alt={`Karnavali View ${i + 1}`}
                          width={444}
                          height={334}
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                          }}
                          priority={i < 2}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* CONTENT SECTIONS */}
              <div className="list-desc">
                <div className="desc-blog">
                  <h5 className="title-desc">A Multisensory Indoor Carnival</h5>
                  <p className="body-2">
                    Karnavali blends thrill rides, interactive games, sensory
                    play, and themed entertainment into an experience that
                    appeals to a wide audience.
                  </p>
                </div>

                <div className="desc-blog" style={{ marginTop: "50px" }}>
                  <h5 className="title-desc">Entertainment</h5>
                  <p className="body-2">
                    Guests can choose between a wide range of activities,
                    including:
                  </p>
                </div>

                <Testimonials />

                <div className="desc-blog">
                  <h5 className="title-desc">Concept Vision</h5>
                  <p className="body-2">
                    Karnavali aims to create a one-of-a-kind indoor entertainment
                    venue where children, teens, and families enjoy diverse
                    activities inspired by the spirit of a joyful carnival.
                    <br />
                    Guests step into a world filled with color, laughter, motion,
                    and excitement; an escape from routine into a place where
                    imagination takes the lead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
}
