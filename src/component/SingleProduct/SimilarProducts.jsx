import React from "react";
import TitleHeader from "../Common/TitleHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard from "../Common/ProductCard";

export default function SimilarProducts({ currentProductId, currentCat }) {
  const similarProducts = currentCat
    ?.filter((product) => product.id !== currentProductId)
    .slice(0, 8);
  return (
    <section className="container flex flex-col gap-6 pt-12 lg:pt-16">
      <TitleHeader title={"محصولات مشابه"} />
      <Swiper
        spaceBetween={16}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 2,
          },
          650: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        loop
        className="w-full rounded-xl"
      >
        {similarProducts?.map((product) => (
          <SwiperSlide>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
