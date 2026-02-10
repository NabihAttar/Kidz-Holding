"use client";
import Image from "next/image";
import React from "react";

const logos = [
  "/image/logos/4.png",
  "/image/logos/5.png",
  "/image/logos/6.jpg",
  "/image/logos/7.jpg",
  "/image/logos/8.jpg",
  "/image/logos/9.jpg",
  "/image/logos/10.jpg",
  "/image/logos/11.jpg",
  "/image/logos/12.jpg",
  "/image/logos/13.jpg",
  "/image/logos/14.jpg",
  "/image/logos/19-The View Hospital.png",
  "/image/logos/23.jpg",
  "/image/logos/36.jpg",
  "/image/logos/168Logo.png",
  "/image/logos/170Logo.png",
  "/image/logos/171Logo.png",
  "/image/logos/182Logo.png",
  "/image/logos/195Logo.png",
  "/image/logos/202Logo.png",
  "/image/logos/210Logo.png",
  "/image/logos/2530Logo.png",
  "/image/logos/edu.png",
  "/image/logos/rail.png",
  "/image/logos/186Logo.gif",
  "/image/logos/184Logo.png",
];

export default function Brands1() {
  return (
    <section className="section-brand h-5 tf-spacing-3">
      <div className="tf-container position-relative">
        <div className="row">
          <div className="col-12">
            <h5 className="text text-center mb-28" style={{color:"black"}}>Marketing Partners</h5>

            <div className="brand-marquee">
              <div className="brand-marquee__viewport">
                <div className="brand-marquee__track">
                  {/* List #1 */}
                  <div className="brand-marquee__list">
                    {logos.map((src) => (
                      <a key={src} href="#" className="brand-marquee__item">
                        <Image alt="" src={src} width={300} height={60} />
                      </a>
                    ))}
                  </div>

                  {/* List #2 (duplicate for infinite loop) */}
                  <div className="brand-marquee__list" aria-hidden="true">
                    {logos.map((src) => (
                      <a key={`dup-${src}`} href="#" className="brand-marquee__item">
                        <Image alt="" src={src} width={300} height={44} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* /.brand-marquee */}
          </div>
        </div>
      </div>
    </section>
  );
}
