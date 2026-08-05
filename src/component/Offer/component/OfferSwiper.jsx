import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../../Common/ProductCard";
import "swiper/css";

export default function OfferSwiper() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/product.json");
      const data = await res.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full lg:w-3/4 p-3 bg-white border border-Caption/35 rounded-xl">
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
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
      >
        {products
          .filter((product) => product.discountPercent > 0)
          .map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
