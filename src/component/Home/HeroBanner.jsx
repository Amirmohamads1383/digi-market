import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export default function HeroBanner() {
  const banners = [
    { id: 1, src: "/image/Banner/Banner-1.webp" },
    { id: 2, src: "/image/Banner/Banner-2.webp" },
    { id: 3, src: "/image/Banner/Banner-3.webp" },
  ];
  return (
    <section className="overflow-hidden">
      <div className="container">
        <Swiper slidesPerView={1} spaceBetween={16} loop className="rounded-3xl">
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <img
                src={banner.src}
                className="w-full h-80 object-cover mix-blend-darken rounded-3xl"
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
