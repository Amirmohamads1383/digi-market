import React from "react";
import Icons from "../template/Icons";
import IconsBox from "../template/IconsBox";

export default function BottomFooter() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-8 bg-Primary rounded-b-2xl">
      <IconsBox />
      <Icons />
    </div>
  );
}
