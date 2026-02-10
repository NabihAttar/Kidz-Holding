"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

export default function KidzAcademyPage() {
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
    { src: "/image/Kidz academy/kidz-academy2.png", alt: "KidzAcademy activity 1" },
    { src: "/image/Kidz academy/kidz-academy3.png", alt: "KidzAcademy activity 2" },
    { src: "/image/Kidz academy/kidz-academy2.png", alt: "KidzAcademy activity 3" },
    { src: "/image/Kidz academy/kidz-academy3.png", alt: "KidzAcademy activity 4" },
    { src: "/image/Kidz academy/kidz-academy2.png", alt: "KidzAcademy activity 5" },
    { src: "/image/Kidz academy/kidz-academy3.png", alt: "KidzAcademy activity 6" },
  ];

  return (
    <>
      {/* HERO */}
      <div className="kidz-hero">
        <Image
          src="/image/page-title/our-ventures (1).png"
          alt="KidzAcademy Hero"
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
                  src="/image/logos/KidzAcademy logo.svg"
                  alt="KidzAcademy"
                  width={260}
                  height={90}
                  priority
                />
              </div>

              {/* Right: Text */}
              <div className="kidz-overview__content">
                <h1 className="kidz-overview__title">KidzAcademy</h1>

                <h5 className="kidz-overview__h">Concept</h5>
                <p className="kidz-overview__p">
                  Kidz Academy is a dance and movement center that brings kids together around
                  dance and sports. This center is a destination that meets the physical interests
                  of each of your children, be it sports, dance, or gymnastics.
                </p>
                <p className="kidz-overview__p">
                  Kidz Academy offers cool extracurricular activities including dance classes,
                  Taekwondo, MMA, gymnastics and even yoga for kids from age four to fifteen in a
                  multitude of styles.
                </p>
                <p className="kidz-overview__p">
                  Children and teenagers who want something other than homework to look forward to
                  in the afternoon can sign up for afternoon classes. They can also enroll for
                  condensed programs during holidays and vacations.
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
              {/* ✅ SWIPER (no cols-img wrapper) */}
              <div className="kidzacademy-gallery">
                <Swiper
                  modules={[Navigation]}
                  navigation
                  spaceBetween={24}
                  slidesPerView={1}
                  loop
                  className="kidzacademy-slider"
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

              {/* Benefits */}
              <div className="list-desc" style={{ marginTop: 26 }}>
                <div className="desc-blog">
                  <h5 className="title-desc" style={{ marginTop: "50px" }}>
                    Benefits
                  </h5>
                  <p className="body-2">
                    Classes at Kidz Academy help develop a healthy lifestyle and incorporate
                    fitness as a natural part of children&apos;s lives by making fitness fun.
                    Classes incorporate key childhood development elements like leadership, respect,
                    teamwork, confidence, self-esteem, memory, creativity, coordination, and
                    cultural awareness.
                    <br />
                    <br />
                    Kidz Academy provides children with a chance to spend their valuable time
                    productively, having fun while at the same time reaping physical and educational
                    benefits.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}