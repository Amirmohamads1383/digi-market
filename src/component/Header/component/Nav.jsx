import React from "react";

export default function Nav({ isNavOpen, setIsNavOpen }) {
  return (
    <>
      <div
        onClick={() => setIsNavOpen(false)}
        className={`fixed inset-0 z-190 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300 ${
          isNavOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />
      <div
        className={`fixed top-0 right-0 z-200 h-dvh w-3/4 bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
    </>
  );
}
