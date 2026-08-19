import React from "react";

export default function HeroSection() {
  return (
    <section className="container pt-10 md:pt-12 lg:pt-16">
      <div className="relative overflow-hidden rounded-[28px] bg-[#F6F8FF]">
        {/* Background Shapes */}
        <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="relative grid min-h-105 items-center lg:grid-cols-2">
          {/* ================= TEXT ================= */}
          <div className="order-1 px-6 py-10 text-right sm:px-10 lg:px-14">
            {/* Title */}
            <h1 className="mt-5 max-w-xl text-3xl font-black leading-[1.7] text-Title sm:text-4xl lg:text-[42px]">
              ما اینجا هستیم تا
              <span className="text-Primary"> تجربه‌ای بهتر </span>
              از خرید آنلاین را برای شما رقم بزنیم.
            </h1>
            {/* Description */}
            <p className="mt-5 max-w-xl text-sm leading-8 text-gray-500 sm:text-[15px]">
              دیجی مارکت از سال ۱۳۹۶ فعالیت خود را با هدف ارائه محصولات باکیفیت،
              قیمت منصفانه و خدمات متفاوت آغاز کرد. ما باور داریم که خرید
              اینترنتی باید ساده، سریع و لذت‌بخش باشد.
            </p>
            {/* Button */}
            <button
              type="button"
              className="group mt-6 inline-flex items-center gap-3 rounded-xl bg-Primary px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:shadow-lg hover:shadow-blue-200 cursor-pointer"
            >
              بیشتر درباره ما
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 12H5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M10 7L5 12L10 17"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
          {/* ================= IMAGE ================= */}
          <div className="order-2 flex items-center justify-center px-6 pb-8 sm:px-10 lg:px-8 lg:py-8">
            <div className="relative w-full max-w-130">
              {/* Image Glow */}
              <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/30 blur-3xl" />
              <img
                src="/image/about-us/about-hero.webp"
                alt="درباره دیجی مارکت"
                className="relative z-10 mx-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
