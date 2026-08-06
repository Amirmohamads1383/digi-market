import React from "react";
import Aside from "./component/Aside";
import OfferSwiper from "./component/OfferSwiper";

export default function Offer() {
  return (
    <section className="container">
      <div className="flex flex-col lg:flex-row gap-6">
        <Aside />
        <OfferSwiper />
      </div>
    </section>
  );
}
