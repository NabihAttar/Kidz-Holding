"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import UrbanVillageServices from "@/components/common/UrbanVillageServices";

export default function UrbanVillage() {
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
    "/image/UrbanVillage/1 .jpg",
    "/image/UrbanVillage/2 .jpg",
    "/image/UrbanVillage/urban 3.jpg",
    "/image/UrbanVillage/urban 4.jpg",
    "/image/UrbanVillage/urban 5.jpg",
  ];

  return (
    <>
      {/* HERO */}
      <div className="page-hero">
        <Image
          src="/image/page-title/UV-banner.jpg"
          alt="Urban Village Banner"
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
                   src="/image/logos/Urban Village logo.svg"
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
                  src="/image/UrbanVillage/urban-village 1.jpg"
                  alt="Urban Village"
                  width={910}
                  height={512}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              {/* Intro paragraph */}
              <div
                className="desc-blog"
                style={{ marginTop: "24px", marginBottom: "32px" }}
              >
                <p className="body-2" style={{ margin: 0 }}>
                  Urban Village is a contemporary lifestyle destination where
                  entertainment, culture, food, and community come together in
                  one vibrant space. Designed as an open, walkable, and
                  experiential district, Urban Village blends social dining,
                  modern entertainment, boutique retail, and wellness amenities
                  to create a dynamic environment for families, youth, and
                  adults.
                  <br />
                  <br />
                  Inspired by the most successful lifestyle zones around the
                  world, Urban Village offers a curated mix of experiences that
                  activate the senses, celebrate individuality, and bring people
                  together, day and night.
                </p>
              </div>

              {/* ✅ SWIPER */}
              <div className="urbanvillage-gallery">
                <Swiper
                  modules={[Navigation]}
                  navigation
                  spaceBetween={24}
                  slidesPerView={1}
                  loop
                  className="urbanvillage-slider"
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
                          alt={`Urban Village slide ${i + 1}`}
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

              <div className="list-desc">
                <div
                  className="desc-blog"
                  style={{ marginTop: "32px", marginBottom: "32px" }}
                >
                  <h4 className="title-desc" style={{ marginBottom: "12px" }}>
                    A New Vision for Social Living
                  </h4>
                  <p className="body-2" style={{ margin: 0 }}>
                    Urban Village is more than a venue; it is a community hub and
                    a social micro-city.
                    <br />
                    Every corner is thoughtfully designed to encourage discovery,
                    movement, connection, and exploration.
                    <br />
                    <br />
                    From artisanal eateries and handcrafted desserts to immersive
                    entertainment and lifestyle amenities, Urban Village offers
                    something for everyone, making it one of the most attractive
                    anchors for real estate and mixed-use developments.
                  </p>
                </div>
              </div>

              {/* end content */}
            </div>
          </div>
        </div>
      </div>

      <UrbanVillageServices />
    </>
  );
}
