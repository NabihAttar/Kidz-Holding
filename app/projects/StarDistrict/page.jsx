"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import StarDistrictSection from "@/components/common/StarDistrictSection";

export default function StarDistrict() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const update = () => {
      if (swiperRef.current && typeof swiperRef.current.update === "function") {
        swiperRef.current.update();
      }
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
    "/image/starDistrict/star district 2.jpg",
    "/image/starDistrict/star district 3.jpg",
    "/image/starDistrict/star 3.jpg",
    "/image/starDistrict/star 4.jpg",
    "/image/starDistrict/star 5.jpg",
  ];

  return (
    <>
      {/* HERO */}
      <div className="page-hero">
        <Image
          src="/image/page-title/star-banner (1).jpg"
          alt="Star District Hero"
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
              {/* Title */}
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
                   src="/image/logos/Star District logo.svg"
                   alt="KidzMondo"
                   width={260}
                   height={80}
                   priority
                   style={{ height: "auto" }}
                 />
               </div>
             </div>

              {/* Main image */}
              <div className="image-blog">
                <Image
                  src="/image/starDistrict/star district 1.jpg"
                  alt="Star District"
                  width={910}
                  height={512}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              {/* Intro */}
              <div className="desc-blog">
                <h5 className="title-desc">Concept</h5>
                <p className="body-2">
                  Star District is the ideal platform for children and teenagers
                  who want to experience stardom.
                  <br />
                  <br />
                  It is a one stop family entertainment center where mothers can
                  take their toddlers to play, children and teenagers can have
                  their fifteen minutes of fame and shine in the spotlight,
                  where mothers and their daughters can bond over girly
                  activities, and where teenagers can hang out and have fun.
                  <br />
                  <br />
                  It is a forum where children and teenagers can interact with
                  different international brands through engaging in sponsored
                  activities and enjoying a unique Hollywood-esque shopping
                  experience.
                </p>
              </div>

              {/* ✅ SWIPER (NO cols-img wrapper) */}
              <div className="stardistrict-gallery">
                <Swiper
                  modules={[Navigation]}
                  navigation
                  spaceBetween={24}
                  slidesPerView={1}
                  loop
                  className="stardistrict-slider"
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
                          alt={`Star District Activity ${i + 1}`}
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

              {/* Sections */}
              <div className="list-desc">
                <div className="desc-blog">
                  <p className="body-2">
                    Star District is the ultimate fame-experience destination
                    where children and teenagers step into the spotlight and
                    live the stardom they dream of. Designed as an immersive
                    activation and entertainment hub, Star District blends
                    performing arts, creativity, fashion, media, and lifestyle
                    experiences into one dazzling world.
                    <br />
                    <br />
                    It is a one-stop family entertainment center where toddlers
                    can play, kids and teens can shine in their “fifteen minutes
                    of fame,” mothers and daughters can enjoy bonding
                    activities, and teenagers can hang out, create, and express
                    themselves.
                  </p>
                </div>

                <div className="desc-blog" style={{ marginTop: "50px" }}>
                  <h5 className="title-desc">Where Kids Live the Fame</h5>
                  <p className="body-2">
                    Star District invites young guests to experience what it
                    truly means to be a star. Beyond the glamour, they learn
                    how a star looks, walks, talks, performs, and expresses
                    their talent. Through hands-on experiences and professional
                    guidance, children and teens explore the skills needed to
                    shine in front of an audience.
                    <br />
                    <br />
                    A dedicated team of creative coaches helps them discover and
                    develop their talents—whether in music, performing, fashion,
                    design, or media. With themed sets, professional equipment,
                    and endless props, every child gets a chance to perform,
                    create content, and enjoy their moment in the spotlight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StarDistrictSection />
    </>
  );
}
