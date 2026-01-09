"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import Faqs from "@/components/homes/strategy-consulting/Faqs";

export default function BowlNRock() {
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
    "/image/bowlNRock/bowl N rock 1.jpg",
    "/image/bowlNRock/bowl N rock 2.jpg",
    "/image/bowlNRock/bowl N rock 3.jpg",
    "/image/bowlNRock/bowl N rock 4.jpg",
    "/image/bowlNRock/bowl N rock 5.jpg",
    "/image/bowlNRock/bowl N rock 6.jpg",
  ];

  return (
    <>
      {/* HERO */}
      <div className="page-hero">
        <Image
          src="/image/page-title/banner-BNR (1).jpg"
          alt="BOWL N' ROCK Banner"
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
              {/* Top Title */}
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
                   src="/image/logos/Bowl N Rock logo.svg"
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
                  src="/image/bowlNRock/firstbowl n rock 1st.jpg"
                  alt="Bowl N Rock Main"
                  width={910}
                  height={512}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              {/* Overview Text */}
              <div className="desc-blog">
                <p className="body-2">
                  Bowl N Rock is the newest experiential social entertainment hub
                  offering bowling, immersive sports games, retro games, retro art
                  installations, eateries, mini golf and much more.
                  <br />
                  <br />
                  Featuring 10-lane bowling alleys, sports simulators, retro arcade
                  games, pool and snooker tables, karaoke stage, virtual reality,
                  BOWL N ROCK is an extraordinary “eatertainment” venue with live
                  music, where food and entertainment have been merged into one
                  space and interactive games are integrated on each dining table
                  to savour the experience.
                </p>
              </div>

              {/* ✅ SWIPER FIX (NO cols-img wrapper) */}
              <div className="bowlnrock-gallery">
                <Swiper
                  modules={[Navigation]}
                  navigation
                  spaceBetween={24}
                  slidesPerView={1}
                  loop
                  className="bowlnrock-slider"
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
                          alt={`Bowl N Rock slide ${i + 1}`}
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

              {/* EXPERIENCE SECTION */}
              <div className="list-desc">
                <div className="desc-blog">
                  <h5 className="title-desc">Experience</h5>
                  <p className="body-2">
                    BOWL N ROCK is a next-generation social entertainment hub where
                    immersive play, retro nostalgia, live entertainment, and elevated
                    dining come together in one dynamic destination. Designed for
                    guests aged 15 and above, the venue blends gaming, music, food,
                    art, and social interaction—creating a vibrant “eatertainment”
                    experience that appeals to teens, young adults, groups, and
                    corporate clients.
                    <br />
                    <br />
                    More than a gaming venue, BOWL N ROCK is a fully immersive
                    lifestyle concept. Retro-industrial interiors, themed zones,
                    and art installations set the tone, while a curated mix of
                    social activities ensures there’s always something to discover
                    around every corner.
                    <br />
                    <br />
                    The experience begins the moment guests walk through the
                    signature themed entrance tunnel before stepping into a world
                    of energy, music, fun, and play.
                  </p>
                </div>

                <Faqs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
