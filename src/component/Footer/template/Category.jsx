import React from "react";

export default function Category({ categories }) {
  return (
    <div className="flex flex-col items-start gap-3 lg:gap-4 col-span-1 md:col-span-2 lg:col-span-1">
      <h2 className="text-lg sm:text-xl h-10 sm:h-12 font-bold text-Primary">
        دسته بندی
      </h2>
      <div className="grid grid-cols-4 sm:grid-cols-4 gap-2 w-full">
        {categories.map((categorie) => (
          <div
            key={categorie.id}
            className="py-2 sm:py-3 px-1 sm:px-2 flex items-center justify-center flex-col gap-1 sm:gap-2 text-Title rounded-xl border border-Caption/25 bg-[#fafafa] cursor-pointer"
          >
            <span className="text-sm sm:text-base">{categorie.icon}</span>
            <span className="text-xs sm:text-sm text-center">
              {categorie.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
