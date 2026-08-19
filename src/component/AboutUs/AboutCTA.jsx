import React from "react";

export default function AboutCTA() {
  return (
    <section className="container pt-10 md:pt-12 lg:pt-16">
      <div className="relative overflow-hidden rounded-[28px] bg-Primary px-6 py-10 text-white sm:px-10 lg:px-14">
        <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10" />
        <div className="absolute -bottom-32 right-20 h-72 w-72 rounded-full bg-white/10" />
        <div className="relative flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="text-center lg:text-right">
            <h2 className="text-2xl font-black">
              آماده یک تجربه خرید بهتر هستید؟
            </h2>
            <p className="mt-3 text-sm text-blue-100">
              همین حالا محصولات مورد علاقه خود را پیدا کنید.
            </p>
          </div>
          <button className="rounded-xl bg-white px-7 py-3 text-sm font-bold text-Primary transition hover:bg-gray-100 cursor-pointer">
            مشاهده محصولات
          </button>
        </div>
      </div>
    </section>
  );
}
