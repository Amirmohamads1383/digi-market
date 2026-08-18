import React, { useState } from "react";

export default function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="border border-Caption/35 rounded-2xl">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 px-2 text-right cursor-pointer"
      >
        <span className="text-base font-medium text-Title">{item.header}</span>
        <span
          className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-4 px-2 text-Title leading-relaxed">{item.text}</div>
      </div>
    </div>
  );
}
