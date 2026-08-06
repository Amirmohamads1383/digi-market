import React from "react";
import HeroBanner from "../../component/Home/HeroBanner";
import Categories from "../../component/Home/Categories";
import Offer from "../../component/Home/Offer";
import Banner from "../../component/Home/Banner";
import BestSelling from "../../component/Home/BestSelling";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Categories />
      <Offer />
      <Banner />
      <BestSelling />
    </>
  );
}
