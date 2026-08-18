import React from "react";

export default function HeroSection() {
  return (
    <section className="container pt-10 md:pt-12 lg:pt-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-3xl lg:text-5xl font-black text-Title">تماس با ما</h2>
          <p className="text-lg font-semibold text-Primary">
            ما همیشه آماده پاسخگویی به شما هستیم
          </p>
          <p className="w-full lg:max-w-2/3 font-medium text-Title/50">
            سوال، پیشنهاد یا مشکلی دارید؟ تیم پشتیبانی دیجی مارکت در کوتاه ترین
            زمان ممکن پاسخگوی شما خواهد بود.
          </p>
        </div>
        <img
          className="w-full md:w-1/2"
          src="/image/contact-us/contact-to-us.webp"
          alt=""
        />
      </div>
    </section>
  );
}
