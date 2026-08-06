import React, { Children } from "react";

export default function TitleHeader({ title }) {
  return (
    <div className="flex items-center justify-between p-3 border border-Caption/35 bg-white rounded-2xl">
      <div className="flex items-center justify-center gap-2">
        <span className="w-2 h-2 bg-Primary rounded-full"></span>
        <h3 className="text-lg font-extrabold text-Title">{title}</h3>
      </div>
      <button className="flex items-center gap-2 px-3 py-2.5 bg-[#F9F9F9] text-Primary text-base font-medium rounded-xl cursor-pointer transition-all hover:bg-Primary hover:text-white">
        مشاهده همه
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          className="w-4 h-4 lg:w-5 lg:h-5 shrink-0"
        >
          <path
            d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75m0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75"
            fill="currentColor"
          />
          <path
            d="M15.71 15.93a.67.67 0 0 1-.38-.11l-3.1-1.85c-.77-.46-1.34-1.47-1.34-2.36v-4.1c0-.41.34-.75.75-.75s.75.34.75.75v4.1c0 .36.3.89.61 1.07l3.1 1.85c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
}
