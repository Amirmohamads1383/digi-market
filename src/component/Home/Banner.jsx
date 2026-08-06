import React from "react";

export default function Banner() {
  const BANNER_IMAGES = [
    { id: 1, src: "/image/Banner/Banner-4.webp", alt: "Banner 4" },
    { id: 2, src: "/image/Banner/Banner-5.webp", alt: "Banner 5" },
  ];
  return (
    <section className="container pt-12 lg:pt-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {BANNER_IMAGES.map((banner) => (
          <img
            key={banner.id}
            src={banner.src}
            className="w-full md:w-[48%] border border-Caption/35 rounded-[45px] mix-blend-darken"
            alt=""
          />
        ))}
      </div>
    </section>
  );
}
