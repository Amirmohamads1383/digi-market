import React from "react";

export default function BlogItems({
  articles,
  selectedArticle,
  onSelectArticle,
}) {
  return (
    <aside className="w-full h-full p-3 border border-Caption/35 bg-white rounded-2xl">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-Caption/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-Primary flex items-center justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16 22.75H8c-3.65 0-5.75-2.1-5.75-5.75V7c0-3.65 2.1-5.75 5.75-5.75h8c3.65 0 5.75 2.1 5.75 5.75v10c0 3.65-2.1 5.75-5.75 5.75m-8-20C5.14 2.75 3.75 4.14 3.75 7v10c0 2.86 1.39 4.25 4.25 4.25h8c2.86 0 4.25-1.39 4.25-4.25V7c0-2.86-1.39-4.25-4.25-4.25z"
                fill="currentColor"
              />
              <path
                d="M18.5 9.25h-2c-1.52 0-2.75-1.23-2.75-2.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2c.41 0 .75.34.75.75s-.34.75-.75.75m-6.5 4.5H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75m4 4H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="text-right">
            <p className="text-xs text-Caption">مقالات</p>
            <h2 className="text-sm lg:text-base font-bold text-Title">
              نقد و بررسی
            </h2>
          </div>
        </div>
        <button
          type="button"
          className="flex items-center justify-center gap-2 h-10 px-5 rounded-xl border border-Primary text-Primary text-sm font-medium hover:bg-Primary hover:text-white transition-colors cursor-pointer"
        >
          بیشتر
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.571 18.821c-.19 0-.38-.07-.53-.22l-6.07-6.07a.754.754 0 0 1 0-1.06l6.07-6.07c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-5.54 5.54 5.54 5.54c.29.29.29.77 0 1.06-.14.15-.34.22-.53.22"
                fill="currentColor"
              />
              <path
                d="M20.502 12.75H3.672c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.83c.41 0 .75.34.75.75s-.34.75-.75.75"
                fill="currentColor"
              />
            </svg>
          </span>
        </button>
      </div>
      {/* Articles */}
      <div className="mt-2 max-h-110 overflow-y-auto pl-1 scrollbar-thin">
        {articles.map((article) => {
          const isActive = selectedArticle?.id === article.id;
          return (
            <button
              key={article.id}
              type="button"
              onClick={() => onSelectArticle(article)}
              className={`
                w-full
                flex
                items-center
                gap-3
                text-right
                py-3
                px-1
                rounded-xl
                transition-colors
                cursor-pointer
                ${isActive ? "bg-[#F6F7FF]" : "hover:bg-gray-50"}
              `}
            >
              {/* Image */}
              <div className="relative w-26.25 h-16.75 shrink-0 overflow-hidden rounded-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-black/5" />
              </div>
              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className="text-xs lg:text-sm font-medium text-Title leading-6 line-clamp-2">
                  {article.title}
                </h3>
                <p className="mt-1 text-[10px] lg:text-[11px] text-Caption">
                  {article.date}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
