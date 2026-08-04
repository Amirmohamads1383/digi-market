import React from "react";
import TopFooter from "./component/TopFooter";
import BottomFooter from "./component/BottomFooter";

export default function Footer() {
  return (
    <footer className="pt-12 mb-3">
      <div className="container border border-Caption/35 rounded-2xl">
        <TopFooter />
        <BottomFooter />
      </div>
    </footer>
  );
}
