import React from "react";

export default function Intro() {
  return (
    <div className="flex flex-col items-start gap-3 lg:gap-4 col-span-1 md:col-span-2 lg:col-span-1">
      <img src="/image/logo.webp" alt="" className="w-20 sm:w-24 md:w-28" />
      <p className="text-Title font-semibold bg-[#fafafa] p-3 border border-Caption/25 rounded-xl text-sm sm:text-base">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
      </p>
    </div>
  );
}
