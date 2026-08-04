import React from "react";

export default function CategoryBox({cat}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2.5 py-3 px-2 rounded-lg cursor-pointer">
      <div
        className="w-15 h-15 flex bg-[#fafafa] text-Primary border-2 border-Caption/25 items-center justify-center rounded-2xl"
        dangerouslySetInnerHTML={{ __html: cat.icon }}
      />
      <span className="text-lg text-center font-bold text-Primary">{cat.name.fa}</span>
    </div>
  );
}
