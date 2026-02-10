"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import Faqs from "@/components/homes/strategy-consulting/Faqs";
import Brands1 from "@/components/common/Brands1";

export default function BowlNRockPage() {
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
    { src: "/image/bowlNRock/bowl N rock 1.jpg", alt: "Bowl N Rock 1" },
    { src: "/image/bowlNRock/bowl N rock 2.jpg", alt: "Bowl N Rock 2" },
    { src: "/image/bowlNRock/bowl N rock 3.jpg", alt: "Bowl N Rock 3" },
    { src: "/image/bowlNRock/bowl N rock 4.jpg", alt: "Bowl N Rock 4" },
    { src: "/image/bowlNRock/bowl N rock 5.jpg", alt: "Bowl N Rock 5" },
    { src: "/image/bowlNRock/bowl N rock 6.jpg", alt: "Bowl N Rock 6" },
  ];

  return (
    <>
      {/* HERO */}
      <div className="kidz-hero">
        <Image
          src="/image/page-title/banner-BNR (1).jpg"
          alt="BOWL N' ROCK Banner"
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
                  src="/image/logos/Bowl N Rock logo.svg"
                  alt="Bowl N Rock"
                  width={260}
                  height={90}
                  priority
                />
              </div>

              {/* Right: Text */}
              <div className="kidz-overview__content">
                <h1 className="kidz-overview__title">Bowl N Rock</h1>

                <h5 className="kidz-overview__h">Overall Concept</h5>
                <p className="kidz-overview__p">
                  Bowl N Rock is the newest experiential social entertainment hub offering bowling,
                  immersive sports games, retro games, retro art installations, eateries, mini golf
                  and much more.
                </p>
                <p className="kidz-overview__p">
                  Featuring 10-lane bowling alleys, sports simulators, retro arcade games, pool and
                  snooker tables, karaoke stage, virtual reality, BOWL N ROCK is an extraordinary
                  “eatertainment” venue with live music, where food and entertainment have been
                  merged into one space and interactive games are integrated on each dining table
                  to savour the experience.
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
              {/* SWIPER */}
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

              {/* EXPERIENCE + FAQs */}
              <div className="list-desc" style={{ marginTop: 26 }}>
                <div className="desc-blog">
                  <h5 className="title-desc" style={{ marginTop: "50px" }}>
                    Experience
                  </h5>
                  <p className="body-2">
                    BOWL N ROCK is a next-generation social entertainment hub where immersive play,
                    retro nostalgia, live entertainment, and elevated dining come together in one
                    dynamic destination. Designed for guests aged 15 and above, the venue blends
                    gaming, music, food, art, and social interaction—creating a vibrant
                    “eatertainment” experience that appeals to teens, young adults, groups, and
                    corporate clients.
                    <br />
                    <br />
                    More than a gaming venue, BOWL N ROCK is a fully immersive lifestyle concept.
                    Retro-industrial interiors, themed zones, and art installations set the tone,
                    while a curated mix of social activities ensures there’s always something to
                    discover around every corner.
                    <br />
                    <br />
                    The experience begins the moment guests walk through the signature themed
                    entrance tunnel before stepping into a world of energy, music, fun, and play.
                  </p>
                </div>

                <Faqs />
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