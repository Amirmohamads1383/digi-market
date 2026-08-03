import React from "react";
import TopHeader from "./component/TopHeader";
import BottomHeader from "./component/BottomHeader";
import MobileHeader from "./component/MobileHeader";

export default function Header() {
  return (
    <header className="py-6 md:py-8 lg:py-10 bg-white">
      <div className="container md:flex flex-col gap-10 hidden">
        <TopHeader />
        <BottomHeader />
      </div>
      <MobileHeader />
    </header>
  );
}
