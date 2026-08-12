import React from "react";

export default function ProductFeatures({ specs }) {
  return (
    <div className="hidden lg:flex flex-col gap-3 w-full p-4 bg-white border border-Caption/35 rounded-xl">
      <div className="flex items-center justify-between">
        <span className="font-medium text-Caption">ویژگی ها</span>
        <span className="flex items-center gap-1 text-sm font-medium text-Primary">
          مشاهده همه
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9.57 5.93 3.5 12l6.07 6.07M20.5 12H3.67"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div>
        {specs?.slice(0, 5).map((spec, index) => (
          <div
            key={index}
            className="flex gap-3 items-center py-4 border-b border-Caption/35 last:border-b-0"
          >
            <span className="text-base text-Caption w-1/3">{spec.title}</span>
            <span className="text-base font-semibold text-Title">
              {spec.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
