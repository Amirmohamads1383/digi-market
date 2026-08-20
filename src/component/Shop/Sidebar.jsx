import React from "react";

export default function Sidebar() {
  return (
    <div className="w-full lg:w-1/4 flex flex-col gap-6 p-4 bg-white border border-Caption/35 rounded-2xl">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-lg font-bold text-Title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75m-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25z"
              fill="currentColor"
            />
            <path
              d="M15.58 19.25c-.41 0-.75-.34-.75-.75v-3.9c0-.41.34-.75.75-.75s.75.34.75.75v3.9c0 .41-.34.75-.75.75m0-11.05c-.41 0-.75-.34-.75-.75V5.5c0-.41.34-.75.75-.75s.75.34.75.75v1.95c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M15.58 13.4a3.35 3.35 0 1 1 3.35-3.35c0 1.85-1.51 3.35-3.35 3.35m0-5.2c-1.02 0-1.85.83-1.85 1.85s.83 1.85 1.85 1.85 1.85-.83 1.85-1.85-.84-1.85-1.85-1.85M8.42 19.25c-.41 0-.75-.34-.75-.75v-1.95c0-.41.34-.75.75-.75s.75.34.75.75v1.95c0 .41-.33.75-.75.75m0-9.1c-.41 0-.75-.34-.75-.75V5.5c0-.41.34-.75.75-.75s.75.34.75.75v3.9c0 .41-.33.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M8.42 17.3a3.35 3.35 0 1 1 0-6.7 3.35 3.35 0 0 1 0 6.7m0-5.2c-1.02 0-1.85.83-1.85 1.85s.83 1.85 1.85 1.85 1.85-.83 1.85-1.85-.82-1.85-1.85-1.85"
              fill="currentColor"
            />
          </svg>
          فیلتر محصولات
        </h3>
        {/* Clear Filters */}
        <span className="text-Title cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 6.73h-.08c-5.29-.53-10.57-.73-15.8-.2l-2.04.2a.755.755 0 0 1-.83-.68c-.04-.42.26-.78.67-.82l2.04-.2c5.32-.54 10.71-.33 16.11.2.41.04.71.41.67.82a.74.74 0 0 1-.74.68"
              fill="currentColor"
            />
            <path
              d="M8.5 5.72c-.04 0-.08 0-.13-.01a.753.753 0 0 1-.61-.86l.22-1.31c.16-.96.38-2.29 2.71-2.29h2.62c2.34 0 2.56 1.38 2.71 2.3l.22 1.3c.07.41-.21.8-.61.86-.41.07-.8-.21-.86-.61l-.22-1.3c-.14-.87-.17-1.04-1.23-1.04H10.7c-1.06 0-1.08.14-1.23 1.03l-.23 1.3a.75.75 0 0 1-.74.63m6.71 17.03H8.79c-3.49 0-3.63-1.93-3.74-3.49L4.4 9.19c-.03-.41.29-.77.7-.8.42-.02.77.29.8.7l.65 10.07c.11 1.52.15 2.09 2.24 2.09h6.42c2.1 0 2.14-.57 2.24-2.09l.65-10.07c.03-.41.39-.72.8-.7.41.03.73.38.7.8l-.65 10.07c-.11 1.56-.25 3.49-3.74 3.49"
              fill="currentColor"
            />
            <path
              d="M13.66 17.25h-3.33c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.33c.41 0 .75.34.75.75s-.34.75-.75.75m.84-4h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        </span>
      </div>
      {/* Category */}
      <div className="flex flex-col gap-3">
        <div className="px-3 py-2.5 flex items-center justify-between border border-Caption/35 rounded-2xl">
          <span className="text-sm font-semibold text-Title">دسته بندی ها</span>
          <span className="text-Title cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 16.8c-.7 0-1.4-.27-1.93-.8L3.55 9.48a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l6.52 6.52c.48.48 1.26.48 1.74 0l6.52-6.52c.29-.29.77-.29 1.06 0s.29.77 0 1.06L13.93 16c-.53.53-1.23.8-1.93.8"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
      </div>
      {/* Price */}
      <div className="flex flex-col gap-3">
        <div className="px-3 py-2.5 flex items-center justify-between border border-Caption/35 rounded-2xl">
          <span className="text-sm font-semibold text-Title">محدوده قیمت</span>
          <span className="text-Title cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 16.8c-.7 0-1.4-.27-1.93-.8L3.55 9.48a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l6.52 6.52c.48.48 1.26.48 1.74 0l6.52-6.52c.29-.29.77-.29 1.06 0s.29.77 0 1.06L13.93 16c-.53.53-1.23.8-1.93.8"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
      </div>
      {/* Color */}
      <div className="flex flex-col gap-3">
        <div className="px-3 py-2.5 flex items-center justify-between border border-Caption/35 rounded-2xl">
          <span className="text-sm font-semibold text-Title">رنگ ها</span>
          <span className="text-Title cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 16.8c-.7 0-1.4-.27-1.93-.8L3.55 9.48a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l6.52 6.52c.48.48 1.26.48 1.74 0l6.52-6.52c.29-.29.77-.29 1.06 0s.29.77 0 1.06L13.93 16c-.53.53-1.23.8-1.93.8"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
      </div>
      {/* Discount */}
      <div className="px-3 py-2.5 flex items-center justify-between border border-Caption/35 rounded-2xl">
        <span className="text-sm font-semibold text-Title">
          فقط کالاهای تخفیف دار
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" value="" />
          <div className="group peer bg-white rounded-full duration-150 w-12 h-6 border-2 border-Primary after:duration-150 after:bg-Primary peer-checked:after:bg-white peer-checked:bg-Primary after:rounded-full after:absolute after:h-4 after:w-4 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-6 peer-hover:after:scale-95"></div>
        </label>
      </div>
      {/* Stock */}
      <div className="px-3 py-2.5 flex items-center justify-between border border-Caption/35 rounded-2xl">
        <span className="text-sm font-semibold text-Title">
          فقط کالاهای موجود
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" value="" />
          <div className="group peer bg-white rounded-full duration-150 w-12 h-6 border-2 border-Primary after:duration-150 after:bg-Primary peer-checked:after:bg-white peer-checked:bg-Primary after:rounded-full after:absolute after:h-4 after:w-4 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-6 peer-hover:after:scale-95"></div>
        </label>
      </div>
    </div>
  );
}
