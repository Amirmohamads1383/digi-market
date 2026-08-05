import React from "react";
import { Link } from "react-router";

export default function ProductCard({ product }) {
  const hasDiscount = product.discountPercent > 0;

  const finalPrice = hasDiscount
    ? Math.round(product.price * (1 - product.discountPercent / 100))
    : product.price;
  return (
    <div className="relative p-2 sm:p-3 border border-Caption/25 rounded-xl h-full">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image[0]}
          alt=""
          className="w-3/4 sm:w-2/3 mx-auto object-contain"
        />
      </Link>

      <div className="flex flex-col items-start gap-2">
        <span className="text-xs sm:text-sm font-medium text-gray-500 line-clamp-1">
          {product.title_en}
        </span>

        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold line-clamp-2 h-12 sm:h-14 text-Title">
            {product.title}
          </h3>
        </Link>

        <div className="flex items-center justify-between w-full gap-2">
          <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
            {product.colors.map((color) => (
              <span
                key={color.title}
                className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-Caption/35"
                style={{ backgroundColor: color.hexa }}
              ></span>
            ))}
          </div>

          <div className="flex items-center justify-center gap-0.5 shrink-0">
            <span className="text-Primary/70 text-xs sm:text-sm">(244)</span>

            <span className="text-Primary text-xs sm:text-sm font-bold">
              {product.rate}
            </span>

            <span className="text-Primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                className="w-4 h-4"
              >
                <path
                  d="M5.74 16c.11-.49-.09-1.19-.44-1.54l-2.43-2.43c-.76-.76-1.06-1.57-.84-2.27.23-.7.94-1.18 2-1.36l3.12-.52c.45-.08 1-.48 1.21-.89l1.72-3.45C10.58 2.55 11.26 2 12 2s1.42.55 1.92 1.54l1.72 3.45c.13.26.4.51.69.68L5.56 18.44c-.14.14-.38.01-.34-.19zm12.96-1.538c-.36.36-.56 1.05-.44 1.54l.69 3.01c.29 1.25.11 2.19-.51 2.64a1.5 1.5 0 0 1-.9.27c-.51 0-1.11-.19-1.77-.58l-2.93-1.74c-.46-.27-1.22-.27-1.68 0l-2.93 1.74c-1.11.65-2.06.76-2.67.31-.23-.17-.4-.4-.51-.7l12.16-12.16c.46-.46 1.11-.67 1.74-.56l1.01.17c1.06.18 1.77.66 2 1.36.22.7-.08 1.51-.84 2.27z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3 pt-3 border-t-2 border-t-Caption/25 w-full min-h-16">
          {product.discountPercent > 0 ? (
            <span className="flex items-center gap-1 font-bold text-xs sm:text-sm text-Primary px-2 sm:px-3 py-2 sm:py-2.5 border border-Primary rounded-xl sm:rounded-2xl">
              {product.discountPercent}%
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                className="w-4 h-4"
              >
                <path
                  d="M17.91 10.72h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-.8.91-6.77 7.7c-.93 1.05-.54 1.91.86 1.91h3.09v7.2c0 1.68.91 2.02 2.02.76l.8-.91 6.77-7.7c.93-1.05.54-1.91-.86-1.91"
                  fill="currentColor"
                />
              </svg>
            </span>
          ) : (
            <span></span>
          )}

          <div className="flex flex-col gap-1 items-end">
            {hasDiscount ? (
              <>
                <span className="flex items-center gap-1 text-xs sm:text-sm text-Caption line-through">
                  {product.price.toLocaleString()}
                  {/* SVG قبلی بدون تغییر */}
                </span>

                <span className="text-base sm:text-lg font-bold text-Title">
                  {finalPrice.toLocaleString()}
                </span>
              </>
            ) : (
              <span className="flex items-center gap-1 text-base sm:text-lg font-bold text-Title">
                {product.price.toLocaleString()}
                {/* SVG قبلی بدون تغییر */}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
