import React from "react";

export default function Namad() {
  return (
    <div className="flex flex-col items-start gap-3 lg:gap-4 col-span-1 md:col-span-1 lg:col-span-1">
      <h2 className="text-lg sm:text-xl h-10 sm:h-12 font-bold text-Primary">
        نماد
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 w-full">
        <span className="flex items-center justify-center p-2 rounded-xl border border-Caption/25 bg-[#fafafa] cursor-pointer">
          <img
            src="/image/namad/namad-1.webp"
            alt=""
            className="mix-blend-darken grayscale w-full max-w-25"
          />
        </span>
        <span className="flex items-center justify-center p-2 rounded-xl border border-Caption/25 bg-[#fafafa] cursor-pointer">
          <img
            src="/image/namad/namad-2.webp"
            alt=""
            className="mix-blend-darken grayscale w-full max-w-25"
          />
        </span>
      </div>
    </div>
  );
}
