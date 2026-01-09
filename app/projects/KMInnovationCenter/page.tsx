"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import Benefits11 from "@/components/common/Benefits11";

export default function KMInnovationCenterPage() {
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
    "/image/KM-innovation/innovation center 3.jpg",
    "/image/KM-innovation/innovation center 4.jpg",
    "/image/KM-innovation/innovation center 5.jpg",
    "/image/KM-innovation/innovation 5.jpg",
    "/image/KM-innovation/innovation 6.jpg",
  ];

  return (
    <>
      {/* HERO IMAGE (restored to your original wrapper) */}
      <div className="image img-top">
        <Image
          src="/image/page-title/banner.jpg"
          alt="KM Innovation Center Hero"
          className="lazyload"
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
              {/* TITLE */}
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
                   src="/image/logos/KM logo.svg"
                   alt="KidzMondo"
                   width={260}
                   height={80}
                   priority
                   style={{ height: "auto" }}
                 />
               </div>
             </div>

              {/* MAIN IMAGE */}
              <div className="image-blog">
                <Image
                  src="/image/KM-innovation/KM 1.jpg"
                  alt="Children exploring at KM Innovation Center"
                  className="lazyload"
                  width={910}
                  height={512}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              {/* INTRO SECTION */}
              <div className="desc-blog">
                <p className="body-2">
                  The village-like compound will cater to a variety of needs and
                  bring together the community in a way which enables every person
                  to meet his own personal needs in a joint setting.
                  <br />
                  <br />
                  The facility will be composed of different sections targeted at
                  different audiences and providing different services experiences:
                </p>
              </div>

              {/* ✅ SWIPER (unchanged design) */}
              <div className="kminnovation-gallery">
                <Swiper
                  modules={[Navigation]}
                  navigation
                  spaceBetween={24}
                  slidesPerView={1}
                  loop
                  className="kminnovation-slider"
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
                          alt={`KM Innovation Center slide ${i + 1}`}
                          className="lazyload"
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

              {/* SECTION LIST */}
              <div className="list-desc">
                <div className="desc-blog">
                  <p className="body-2">
                    The KidzMondo Innovation Center is a cutting-edge space designed
                    to ignite curiosity and prepare children for the future of technology.
                    Inspired by the spirit of Silicon Valley, this miniature innovation hub
                    immerses kids in hands-on STEAM learning, empowering them to think,
                    create, and solve real-world challenges.
                    <br />
                    <br />
                    From coding and robotics to artificial intelligence, virtual reality,
                    entrepreneurship, and digital safety, the Innovation Center equips kids
                    with future-ready skills through multidisciplinary, problem-based activities.
                  </p>
                </div>

                <h5 className="title-desc" style={{ marginTop: "90px" }}>
                  Activities:
                </h5>
              </div>

              <Benefits11 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
