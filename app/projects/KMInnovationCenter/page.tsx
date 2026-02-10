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
    { src: "/image/KM-innovation/innovation center 3.jpg", alt: "KM Innovation Center 1" },
    { src: "/image/KM-innovation/innovation center 4.jpg", alt: "KM Innovation Center 2" },
    { src: "/image/KM-innovation/innovation center 5.jpg", alt: "KM Innovation Center 3" },
    { src: "/image/KM-innovation/innovation 5.jpg", alt: "KM Innovation Center 4" },
    { src: "/image/KM-innovation/innovation 6.jpg", alt: "KM Innovation Center 5" },
  ];

  return (
    <>
      {/* HERO */}
      <div className="kidz-hero">
        <Image
          src="/image/page-title/banner.jpg"
          alt="KM Innovation Center Hero"
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
                  src="/image/logos/KM logo.svg"
                  alt="KM Innovation Center"
                  width={260}
                  height={90}
                  priority
                />
              </div>

              {/* Right: Text */}
              <div className="kidz-overview__content">
                <h1 className="kidz-overview__title">KM Innovation Center</h1>

                <h5 className="kidz-overview__h">Overview</h5>
                <p className="kidz-overview__p">
                  The village-like compound will cater to a variety of needs and bring together
                  the community in a way which enables every person to meet his own personal needs
                  in a joint setting.
                </p>
                <p className="kidz-overview__p">
                  The facility will be composed of different sections targeted at different
                  audiences and providing different services experiences:
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN (swiper + content) */}
      <div className="tf-container kidz-main">
        <div className="row">
          <div className="col-12">
            <div className="blog-content blog-details-2-content blog-details-content">
              {/* SWIPER */}
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

              {/* TEXT + ACTIVITIES */}
              <div className="list-desc" style={{ marginTop: 26 }}>
                <div className="desc-blog">
                  <p className="body-2">
                    The KidzMondo Innovation Center is a cutting-edge space designed to ignite
                    curiosity and prepare children for the future of technology. Inspired by the
                    spirit of Silicon Valley, this miniature innovation hub immerses kids in
                    hands-on STEAM learning, empowering them to think, create, and solve real-world
                    challenges.
                    <br />
                    <br />
                    From coding and robotics to artificial intelligence, virtual reality,
                    entrepreneurship, and digital safety, the Innovation Center equips kids with
                    future-ready skills through multidisciplinary, problem-based activities.
                  </p>
                </div>

                <h5 className="title-desc" style={{ marginTop: "50px" }}>
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