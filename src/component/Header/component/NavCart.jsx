import React from "react";

export default function NavCart({ isCartOpen, setIsCartOpen }) {
  return (
    <>
      <div
        onClick={() => setIsCartOpen(false)}
        className={`fixed inset-0 z-190 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />
      <div
        className={`fixed top-0 left-0 z-200 h-dvh w-3/4 p-6 bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-Title">سبد خرید</h3>
          <span className="text-Title" onClick={() => setIsCartOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75m0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75"
                fill="currentColor"
              />
              <path
                d="M9.17 15.58c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l5.66-5.66c.29-.29.77-.29 1.06 0s.29.77 0 1.06L9.7 15.36c-.14.15-.34.22-.53.22"
                fill="currentColor"
              />
              <path
                d="M14.83 15.58c-.19 0-.38-.07-.53-.22L8.64 9.7a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l5.66 5.66c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
}
