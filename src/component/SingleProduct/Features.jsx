import React, { useState } from "react";
import Purchase from "./component/Purchase";

export default function Features({ product }) {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      label: "توضیحات محصول",
      content: (
        <div className="font-medium text-base/relaxed text-Title">
          {product?.description}
        </div>
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h5"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 10h-4c-3 0-4-1-4-4V2zM7 13h6m-6 4h4"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      label: "مشخصات فنی",
      content: (
        <ul className="flex flex-col">
          {product?.specs.map((spec) => (
            <li className="flex px-3 py-3.5 rounded-md odd:bg-transparent even:bg-Caption/25 *:text-sm">
              <span className="font-semibold text-Caption w-2/5 lg:w-1/4">
                {spec?.title} :
              </span>
              <span className="text-Title font-bold">{spec?.value}</span>
            </li>
          ))}
        </ul>
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3.35 2h8.9c.74 0 1.35.61 1.35 1.35v1.48c0 .54-.34 1.21-.67 1.55l-2.9 2.56c-.4.34-.67 1.01-.67 1.55v2.9c0 .4-.27.94-.61 1.15l-.94.61c-.88.54-2.09-.07-2.09-1.15v-3.57c0-.47-.27-1.08-.54-1.42l-2.56-2.7c-.34-.34-.61-.94-.61-1.35V3.41C2 2.61 2.61 2 3.35 2"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12v3c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-3.12-.78-5.08-2.59-6.1-.51-.29-1.53-.51-2.46-.66M13 13h5m-7 4h7"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 3,
      label: "نظرات کاربران",
      content: <div className="mt-6"></div>,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M8.5 19H8c-4 0-6-1-6-6V8q0-6 6-6h8q6 0 6 6v5q0 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 8h10M7 13h6"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="container pt-12 lg:pt-16 flex flex-col lg:flex-row items-start gap-6">
      <div className="flex flex-col gap-4 w-full">
        <div className="p-2 md:p-4 bg-white border border-Caption/35 rounded-xl">
          <ul className="flex items-start gap-2 md:gap-4 lg:gap-6">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className={`flex items-center justify-center gap-1 lg:gap-2 border-2 font-bold text-xs xs:text-sm md:text-base px-2 md:px-3 py-2 rounded-2xl cursor-pointer transition-colors ${
                  activeTab === tab.id
                    ? "text-Primary bg-transparent border-2 border-Primary "
                    : "text-Caption bg-Caption/15 border-transparent"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="hidden md:block">{tab.icon}</span>
                {tab.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 bg-white border border-Caption/35 rounded-2xl">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </section>
  );
}
