import React, { useEffect, useState } from "react";
import TitleHeader from "../Common/TitleHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../Common/ProductCard";
import "swiper/css";

export default function BestSelling() {
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
    <section className="container pt-12 lg:pt-16">
      <div className="flex flex-col gap-6">
        <TitleHeader title={"پرفروش ترین محصولات"} />
        <Swiper
          loop
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
          className="w-full"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
