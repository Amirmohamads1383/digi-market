import React from "react";

export default function ProductColor({ colors, selectedColor, onColorSelect }) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-3 w-full p-4 bg-white border border-Caption/35 rounded-xl">
      <div className="flex flex-row justify-between lg:flex-col gap-1 w-full lg:w-auto">
        <h4 className="font-medium text-Caption">رنگ انتخاب شده</h4>
        <span className="text-lg font-bold text-Title">
          {selectedColor?.title || "انتخاب کنید"}
        </span>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        {colors.map((color, index) => {
          const isSelected = selectedColor?.title === color.title;
          return (
            <span
              key={index}
              onClick={() => onColorSelect(color)}
              className={`flex items-center gap-1.5 px-3 py-2.5 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                isSelected
                  ? "border-Primary bg-Primary/5"
                  : "border-Caption/35 hover:border-Primary/50"
              }`}
            >
              <span
                className="w-4 h-4 rounded-md border border-gray-200"
                style={{ background: color.hexa }}
              ></span>
              <span className="font-semibold text-sm text-Title">
                {color.title}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
