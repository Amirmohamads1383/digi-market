import React, { useEffect, useState } from "react";
import TitleHeader from "../Common/TitleHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import { Grid } from "swiper/modules";
import ProductGridCard from "./Template/ProductGridCard";

export default function Mobiles() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/product.json");
      const data = await res.json();
      setProducts(data);
    };

    fetchData();
  }, []);
  const mobiles = products.filter((product) => product.category === "mobile");

  return (
    <section className="container pt-12 lg:pt-16">
      <div className="flex flex-col gap-6">
        <TitleHeader title="پرچمداران موبایل" />
        <Swiper
          modules={[Grid]}
          grid={{
            rows: 2,
            fill: "row",
          }}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
              grid: {
                rows: 1,
              },
            },
            640: {
              slidesPerView: 1,
              grid: {
                rows: 2,
              },
            },
            768: {
              slidesPerView: 2,
              grid: {
                rows: 2,
              },
            },
            1200: {
              slidesPerView: 3,
              grid: {
                rows: 2,
              },
            },
          }}
          className="w-full"
        >
          {mobiles.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductGridCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
