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

  return (
    <>
      {/* HERO IMAGE */}
      <div className="page-hero">
        <Image
          src="/image/page-title/resort banner.jpg"
          alt="The Escape Park & Resort Hero"
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
      src="/image/logos/The Escape logo.svg"
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
                  src="/image/resortAndPark/resort pic 1.jpg"
                  alt="The Escape Park & Resort"
                  width={910}
                  height={512}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              <div className="desc-blog">
                <h5 className="title-desc">
                  A natural sanctuary designed for families to reconnect,
                  recharge, and rediscover,
                  <br />
                  the joy of outdoor play.
                </h5>

                <p className="body-2">
                  The Escape Park &amp; Resort is a green refuge that transports
                  families into a world of lush landscapes, flowing water, and
                  immersive nature experiences. Built as a multi-sensory
                  destination, it invites children, teens, and adults to step
                  away from the speed and noise of modern life and enjoy
                  meaningful moments together in the outdoors.
                </p>

                <p className="body-2">
                  Grounded in the principles of nature-based learning and
                  wellness, the park offers an environment where children can
                  explore, play, and develop essential motor and sensory skills.
                  Studies show that outdoor environments rich in natural
                  elements enhance creativity, boost physical activity, and
                  contribute to overall emotional and mental wellbeing — all of
                  which form the cornerstone of this concept.
                </p>
              </div>

              {/* SWIPER (NO cols-img) */}
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
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                >
                  {[
                    "/image/resortAndPark/resort 1.jpg",
                    "/image/resortAndPark/resort 2.jpg",
                    "/image/resortAndPark/park 3.jpg",
                    "/image/resortAndPark/park 4.jpg",
                    "/image/resortAndPark/park 5.jpg",
                    "/image/resortAndPark/park 6.jpg",
                  ].map((src, i) => (
                    <SwiperSlide key={src}>
                      <div className="image-blog">
                        <Image
                          src={src}
                          alt={`Escape Park Activity ${i + 1}`}
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
                <div className="desc-blog">
                  <h5 className="title-desc">The Facility</h5>
                  <p className="body-2">
                    Designed as a fully integrated nature retreat, The Escape
                    Park &amp; Resort features:
                    <br />
                    - A scenic pond, surrounded by trees, flowers, and walking paths
                    <br />
                    - Gazebos and shaded relaxation areas
                    <br />
                    - A man-made river ideal for family fishing activities
                    <br />
                    - Indoor and outdoor dining areas
                    <br />
                    - A dedicated birthday and events venue
                    <br />
                    - Private rental zones for barbecues, picnics, and camping
                    <br />
                    - Animal enclosures for hands-on exploration and learning
                    <br />
                    - A resort area with bungalows and a swimming pool
                  </p>
                </div>
              </div>

              {/* end content */}
            </div>
          </div>
        </div>
      </div>

      <ParkandResortServices />
    </>
  );
}
