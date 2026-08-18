import React, { useState } from "react";
import AccordionItem from "./component/AccordionItem";

export default function Questions() {
  const faqs = [
    {
      id: 1,
      header: "What is Lorem Ipsum?",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
    {
      id: 2,
      header: "Where does it come from?",
      text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `,
    },
    {
      id: 3,
      header: "Why do we use it?",
      text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`,
    },
    {
      id: 4,
      header: "Where can I get some?",
      text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
    },
  ];

  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="container pt-10 md:pt-12 lg:pt-16">
      <div className="flex flex-col md:flex-row items-start gap-10">
        <div className="hidden w-1/4 lg:flex flex-col items-center justify-center gap-4 p-4 bg-Primary rounded-3xl">
          <span className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={36}
              height={36}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22.81c-.69 0-1.34-.35-1.8-.96l-1.5-2a.5.5 0 0 0-.2-.1H8c-4.17 0-6.75-1.13-6.75-6.75V8c0-4.42 2.33-6.75 6.75-6.75h8c4.42 0 6.75 2.33 6.75 6.75v5c0 4.42-2.33 6.75-6.75 6.75h-.5c-.08 0-.15.04-.2.1l-1.5 2c-.46.61-1.11.96-1.8.96M8 2.75C4.42 2.75 2.75 4.42 2.75 8v5c0 4.52 1.55 5.25 5.25 5.25h.5c.51 0 1.09.29 1.4.7l1.5 2c.35.46.85.46 1.2 0l1.5-2c.33-.44.85-.7 1.4-.7h.5c3.58 0 5.25-1.67 5.25-5.25V8c0-3.58-1.67-5.25-5.25-5.25z"
                fill="currentColor"
              />
              <path
                d="M12 12c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1m4 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1m-8 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1"
                fill="currentColor"
              />
            </svg>
          </span>
          <h4 className="text-lg font-bold text-white">هنوز سوالی دارید ؟</h4>
          <p className="text-center text-white">
            اگر پاسخ خود را پیدا نکرده اید، با ما در ارتباط باشید.
          </p>
          <button className="py-2.5 font-bold w-full flex items-center justify-center gap-1.5 bg-white hover:bg-Primary text-Primary hover:text-white border border-Primary hover:border-white rounded-2xl cursor-pointer transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5.57 22.7c-2.34 0-4.32-1.98-4.32-4.32v-6.16C1.2 9.3 2.28 6.55 4.3 4.49a10.65 10.65 0 0 1 7.65-3.19c5.96 0 10.8 4.85 10.8 10.8v6.16c0 2.38-1.94 4.32-4.32 4.32-2.34 0-4.32-1.98-4.32-4.32v-2.81c0-1.45 1.14-2.59 2.59-2.59s2.59 1.14 2.59 2.59v3.03c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.03c0-.68-.55-1.09-1.09-1.09-.68 0-1.09.55-1.09 1.09v2.81c0 1.53 1.29 2.82 2.82 2.82s2.82-1.29 2.82-2.82V12.1c0-5.13-4.17-9.3-9.3-9.3-2.51 0-4.84.97-6.58 2.74S2.7 9.68 2.75 12.2v6.18c0 1.53 1.29 2.82 2.82 2.82s2.82-1.29 2.82-2.82v-2.81c0-.68-.55-1.09-1.09-1.09-.68 0-1.09.55-1.09 1.09v2.92c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.92c0-1.45 1.14-2.59 2.59-2.59s2.59 1.14 2.59 2.59v2.81c0 2.34-1.98 4.32-4.32 4.32"
                fill="currentColor"
              />
            </svg>
            تماس با پشتیبانی
          </button>
        </div>
        <div className="flex flex-col gap-2.5 w-full lg:w-3/4">
          <div className="flex flex-col items-start gap-1">
            <h3 className="text-xl font-bold text-Title">سوالات متداول</h3>
            <p className="text-Title/60 font-normal">
              پاسخ سوالات خود را پیدا کنید.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
