import React from "react";
import TopHeader from "./component/TopHeader";
import BottomHeader from "./component/BottomHeader";

export default function Header() {
  return (
    <header className="container pt-6 md:pt-8 lg:pt-10 bg-white">
      <div className="flex flex-col gap-10">
        <TopHeader />
        <BottomHeader />
      </div>
    </header>
  );
}
