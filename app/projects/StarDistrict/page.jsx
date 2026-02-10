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
    { src: "/image/starDistrict/star district 2.jpg", alt: "Star District Activity 1" },
    { src: "/image/starDistrict/star district 3.jpg", alt: "Star District Activity 2" },
    { src: "/image/starDistrict/star 3.jpg", alt: "Star District Activity 3" },
    { src: "/image/starDistrict/star 4.jpg", alt: "Star District Activity 4" },
    { src: "/image/starDistrict/star 5.jpg", alt: "Star District Activity 5" },
  ];

  return (
    <>
      {/* HERO */}
      <div className="kidz-hero">
        <Image
          src="/image/page-title/star-banner (1).jpg"
          alt="Star District Hero"
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
                  src="/image/logos/Star District logo.svg"
                  alt="Star District"
                  width={260}
                  height={90}
                  priority
                />
              </div>

              {/* Right: Intro Text */}
              <div className="kidz-overview__content">
                {/* <h1 className="kidz-overview__title">Star District</h1> */}

                <h5 className="kidz-overview__h">Concept</h5>
                <p className="kidz-overview__p">
                  Star District is the ideal platform for children and teenagers who want to experience stardom.
                </p>
                <p className="kidz-overview__p">
                  It is a one stop family entertainment center where mothers can take their toddlers to play,
                  children and teenagers can have their fifteen minutes of fame and shine in the spotlight,
                  where mothers and their daughters can bond over girly activities, and where teenagers can hang out and have fun.
                </p>
                <p className="kidz-overview__p">
                  It is a forum where children and teenagers can interact with different international brands through engaging in
                  sponsored activities and enjoying a unique Hollywood-esque shopping experience.
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
                  onSwiper={(s) => (swiperRef.current = s)}
                >
                  {gallery.map((img, i) => (
                    <SwiperSlide key={`${img.src}-${i}`}>
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
                  <p className="body-2">
                    Star District is the ultimate fame-experience destination where children and teenagers step into the spotlight
                    and live the stardom they dream of. Designed as an immersive activation and entertainment hub, Star District blends
                    performing arts, creativity, fashion, media, and lifestyle experiences into one dazzling world.
                    <br />
                    <br />
                    It is a one-stop family entertainment center where toddlers can play, kids and teens can shine in their “fifteen minutes
                    of fame,” mothers and daughters can enjoy bonding activities, and teenagers can hang out, create, and express themselves.
                  </p>
                </div>

                <div className="desc-blog" style={{ marginTop: "50px" }}>
                  <h5 className="title-desc">Where Kids Live the Fame</h5>
                  <p className="body-2">
                    Star District invites young guests to experience what it truly means to be a star. Beyond the glamour, they learn how a
                    star looks, walks, talks, performs, and expresses their talent. Through hands-on experiences and professional guidance,
                    children and teens explore the skills needed to shine in front of an audience.
                    <br />
                    <br />
                    A dedicated team of creative coaches helps them discover and develop their talents—whether in music, performing, fashion,
                    design, or media. With themed sets, professional equipment, and endless props, every child gets a chance to perform,
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