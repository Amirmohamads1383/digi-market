import React from "react";

export default function ProductComment({ rate }) {
  return (
    <div className="hidden md:flex items-center justify-between gap-3 p-4 bg-white border border-Caption/35 rounded-xl">
      <div className="flex flex-col gap-1">
        <span className="font-medium text-Caption">امتیاز خریداران</span>
        <span className="flex items-center gap-1 font-bold text-Title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5.74 16c.11-.49-.09-1.19-.44-1.54l-2.43-2.43c-.76-.76-1.06-1.57-.84-2.27.23-.7.94-1.18 2-1.36l3.12-.52c.45-.08 1-.48 1.21-.89l1.72-3.45C10.58 2.55 11.26 2 12 2s1.42.55 1.92 1.54l1.72 3.45c.13.26.4.51.69.68L5.56 18.44c-.14.14-.38.01-.34-.19zm12.96-1.538c-.36.36-.56 1.05-.44 1.54l.69 3.01c.29 1.25.11 2.19-.51 2.64a1.5 1.5 0 0 1-.9.27c-.51 0-1.11-.19-1.77-.58l-2.93-1.74c-.46-.27-1.22-.27-1.68 0l-2.93 1.74c-1.11.65-2.06.76-2.67.31-.23-.17-.4-.4-.51-.7l12.16-12.16c.46-.46 1.11-.67 1.74-.56l1.01.17c1.06.18 1.77.66 2 1.36.22.7-.08 1.51-.84 2.27z"
              fill="currentColor"
            />
          </svg>
          {`${rate} (277)`}
        </span>
      </div>
      <button className="flex items-center gap-1.5 text-sm font-semibold text-Primary cursor-pointer">
        مشاهده نظرات
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
      </button>
    </div>
  );
}
