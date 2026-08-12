import React from "react";

export default function ProductWarranty({ warranty }) {
  return (
    <div className="flex flex-col gap-3 col-span-2 md:col-span-1 p-4 bg-white border border-Caption/35 rounded-xl">
      <div className="flex items-center justify-between">
        <label
          htmlFor="warranty-0"
          className="flex flex-row items-center gap-4 text-Title cursor-pointer"
        >
          <input id="warranty-0" type="checkbox" className="peer hidden" />
          <div className="h-5 w-5 flex rounded-md border-2 border-Title bg-white peer-checked:bg-Primary transition">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              className="w-5 h-5 stroke-white peer-checked:stroke-white transition"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12.6111L8.92308 17.5L20 6.5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-lg font-semibold text-Title">
              {warranty?.company}
            </span>
            <span className="text-xs font-medium text-Caption">
              بیمه سامان
            </span>
          </div>
        </label>
        <div className="flex items-center gap-4">
          <span className="font-bold text-Title">
            {warranty?.price?.toLocaleString()}
            <span className="text-xs mr-1 text-Caption">تومان</span>
          </span>
        </div>
      </div>
    </div>
  );
}
