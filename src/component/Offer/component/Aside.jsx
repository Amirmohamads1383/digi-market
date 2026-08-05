import React from "react";
import Timer from "../template/Timer";

export default function Aside() {
  return (
    <aside className="w-full lg:w-1/4 flex flex-col gap-4 py-5 lg:py-6 bg-Primary rounded-xl">
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-3 px-4">
        <span className="bg-white text-Primary p-2 lg:p-3 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            className="w-5 h-5 lg:w-6 lg:h-6"
          >
            <path
              d="M17.91 10.72h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-.8.91-6.77 7.7c-.93 1.05-.54 1.91.86 1.91h3.09v7.2c0 1.68.91 2.02 2.02.76l.8-.91 6.77-7.7c.93-1.05.54-1.91-.86-1.91"
              fill="currentColor"
            />
          </svg>
        </span>

        <span className="text-lg lg:text-xl font-bold text-white text-center">
          تخفیفات شگفت انگیز
        </span>
      </div>

      {/* Timer */}
      <div className="border-y border-dashed border-white/35">
        <div className="px-4 py-5 flex flex-col gap-5">
          <Timer duration={2 * 24 * 60 * 60 * 1000} />

          <span className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-white text-center">
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
            زمان باقیمانده !
          </span>
        </div>
      </div>

      {/* Button */}
      <div className="px-4">
        <button className="w-full py-3 lg:py-3.5 flex items-center justify-center gap-2 lg:gap-3 text-sm lg:text-base font-medium text-white bg-[#4a5ec1] rounded-xl lg:rounded-2xl hover:bg-[#4052ad] transition-colors cursor-pointer">
          مشاهده همه
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            className="w-4 h-4 lg:w-5 lg:h-5"
          >
            <path
              d="M9.571 18.821c-.19 0-.38-.07-.53-.22l-6.07-6.07a.754.754 0 0 1 0-1.06l6.07-6.07c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-5.54 5.54 5.54 5.54c.29.29.29.77 0 1.06-.14.15-.34.22-.53.22"
              fill="currentColor"
            />
            <path
              d="M20.502 12.75H3.672c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.83c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </aside>
  );
}
