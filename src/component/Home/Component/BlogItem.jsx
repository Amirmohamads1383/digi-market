import React from "react";

export default function BlogItem({ article }) {
  if (!article) return null;

  return (
    <article className="p-3 border border-Caption/35 bg-white rounded-2xl">
      {/* Image */}
      <div className="relative w-full aspect-[16/8.8] overflow-hidden rounded-xl bg-gray-100">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content */}
      <div className="px-1 pt-5 pb-1">
        {/* Title */}
        <h1 className="text-xl lg:text-2xl font-bold text-Title leading-9">
          {article.title}
        </h1>
        {/* Description */}
        <p className="mt-3 text-sm text-Caption leading-7 text-justify line-clamp-3">
          {article.description}
        </p>
        {/* Bottom */}
        <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Author */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-full bg-[#EEF0FF] flex items-center justify-center overflow-hidden">
              <img src="/image/avatar.webp" alt="" />
            </div>
            <div className="text-right">
              <p className="text-xs lg:text-sm font-medium text-Title">
                {article.author}
              </p>
              <p className="text-[10px] lg:text-xs text-Caption mt-1">
                {article.date}
              </p>
            </div>
          </div>
          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2">
            {article.tags.slice(0, 3).map((tag) => (
              <span className="px-3 py-1.5 rounded-lg border border-Caption/35 text-xs lg:text-sm text-Primary bg-white">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
