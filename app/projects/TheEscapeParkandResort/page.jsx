"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import ParkandResortServices from "@/components/common/ParkandResortServices";

export default function TheEscapeParkandResort() {
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
    { src: "/image/resortAndPark/resort 1.jpg", alt: "Escape Park View 1" },
    { src: "/image/resortAndPark/resort 2.jpg", alt: "Escape Park View 2" },
    { src: "/image/resortAndPark/park 3.jpg", alt: "Escape Park View 3" },
    { src: "/image/resortAndPark/park 4.jpg", alt: "Escape Park View 4" },
    { src: "/image/resortAndPark/park 5.jpg", alt: "Escape Park View 5" },
    { src: "/image/resortAndPark/park 6.jpg", alt: "Escape Park View 6" },
  ];

  return (
    <>
      {/* HERO */}
      <div className="kidz-hero">
        <Image
          src="/image/page-title/resort banner.jpg"
          alt="The Escape Park & Resort Hero"
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
                  src="/image/logos/The Escape logo.svg"
                  alt="The Escape Park & Resort"
                  width={260}
                  height={90}
                  priority
                />
              </div>

              {/* Right: Text */}
              <div className="kidz-overview__content">
                {/* <h1 className="kidz-overview__title">The Escape Park &amp; Resort</h1> */}

                <h5 className="kidz-overview__h">
                  A natural sanctuary designed for families to reconnect, recharge, and rediscover,
                  <br />
                  the joy of outdoor play.
                </h5>

                <p className="kidz-overview__p">
                  The Escape Park &amp; Resort is a green refuge that transports families into a world
                  of lush landscapes, flowing water, and immersive nature experiences. Built as a
                  multi-sensory destination, it invites children, teens, and adults to step away from
                  the speed and noise of modern life and enjoy meaningful moments together in the outdoors.
                </p>

                <p className="kidz-overview__p">
                  Grounded in the principles of nature-based learning and wellness, the park offers an
                  environment where children can explore, play, and develop essential motor and sensory skills.
                  Studies show that outdoor environments rich in natural elements enhance creativity, boost
                  physical activity, and contribute to overall emotional and mental wellbeing — all of which
                  form the cornerstone of this concept.
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
              <div className="escapepark-gallery">
                <Swiper
                  modules={[Navigation]}
                  navigation
                  spaceBetween={24}
                  slidesPerView={1}
                  loop
                  className="escapepark-slider"
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

              {/* FACILITY */}
              <div className="list-desc" style={{ marginTop: 26 }}>
                <div className="desc-blog">
                  <h5 className="title-desc">The Facility</h5>
                  <p className="body-2">
                    Designed as a fully integrated nature retreat, The Escape Park &amp; Resort features:
                    <br />- A scenic pond, surrounded by trees, flowers, and walking paths
                    <br />- Gazebos and shaded relaxation areas
                    <br />- A man-made river ideal for family fishing activities
                    <br />- Indoor and outdoor dining areas
                    <br />- A dedicated birthday and events venue
                    <br />- Private rental zones for barbecues, picnics, and camping
                    <br />- Animal enclosures for hands-on exploration and learning
                    <br />- A resort area with bungalows and a swimming pool
                  </p>
                </div>
              </div>

              {/* EXTRA SECTIONS */}
            </div>
          </div>
        </div>
      </div>
      <ParkandResortServices />

    </>
  );
}