import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import CategoryBox from "./Component/CategoryBox";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data/category.json");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="container py-10 lg:py-16">
      <div className="bg-white py-6 px-5 border border-Caption/25 rounded-xl">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={2}
          loop
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 14,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 18,
            }
          }}
          className="categories-swiper"
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.id}>
              <CategoryBox cat={cat}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
