import React from "react";
import { Link } from "react-router";

export default function ProductCard({ product }) {
  const hasDiscount = product.discountPercent > 0;

  const finalPrice = hasDiscount
    ? Math.round(product.price * (1 - product.discountPercent / 100))
    : product.price;
  return (
    <div className="relative p-2 sm:p-3 bg-white border border-Caption/25 rounded-xl h-full">
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
                  <svg
                    fill="#3D4349"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 14 14"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.057 1.742 3.821 1l.78.75-.776.741zm3.23 2.48q0 .933-.478 1.467-.301.332-.783.505a3.3 3.3 0 0 1-1.083.163h-.555q-.632 0-1.139-.223a2.05 2.05 0 0 1-.9-.738A2.24 2.24 0 0 1 1 4.148q0-.088.004-.176.044-.824.525-1.827l1.095.484q-.386.798-.419 1.403l-.004.12q0 .378.166.618a.9.9 0 0 0 .5.354q.128.042.278.06.119.014.243.014h.555q.687 0 .933-.244.21-.209.21-.731V2.02h1.2v2.202zm5.433 3.184-.72-.7.709-.706.735.707-.724.7zm-2.856.308q.813 0 1.293.569.445.519.445 1.293v.364h.18v-.004h.41q.332 0 .467-.084a.28.28 0 0 0 .14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 0 1-.287.863q-.459.607-1.495.607h-.627q-.092 1.1-1.117 1.573a3.6 3.6 0 0 1-.937.265 6 6 0 0 1-.914.067V11.84q.918 0 1.38-.247.376-.198.376-.499h-.515q-.654 0-1.113-.339-.55-.41-.55-1.18 0-.732.367-1.24.444-.622 1.296-.622zm.533 2.226v-.364q0-.325-.143-.516a.46.46 0 0 0-.39-.187.48.48 0 0 0-.396.187.7.7 0 0 0-.136.449l.003.067q.011.188.177.283.14.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6zm-6.694 4.888h.03q.65-.014.937-.29.037.018.12.068l.074.039.081.042q.202.11.379.18.517.22.977.22a1.22 1.22 0 0 0 .87-.34q.45-.428.449-1.286a2.2 2.2 0 0 0-.335-1.145q-.448-.685-1.3-.685a1.56 1.56 0 0 0-1.242.575q-.169.198-.294.456-.048.092-.084.191l-.03.078-.022.06q-.154.463-.205.53-.108.136-.427.147-.185-.007-.256-.076-.085-.081-.085-.297V7l-1.201-.5v3.562q0 .392.143.703.107.237.29.413.184.177.43.28.297.127.665.136v.001zm2.752-1.014a.8.8 0 0 0 .044-.353.87.87 0 0 0-.165-.47q-.15-.201-.35-.201-.27 0-.447.31-.063.106-.114.262l-.04.12-.015.053-.015.046q.213.177.544.293.27.093.433.092.066 0 .125-.152"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-base sm:text-lg font-bold text-Title">
                  {finalPrice.toLocaleString()}
                </span>
              </>
            ) : (
              <span className="flex items-center gap-1 text-base sm:text-lg font-bold text-Title">
                {product.price.toLocaleString()}
                <svg
                  fill="#3D4349"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 14 14"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.057 1.742 3.821 1l.78.75-.776.741zm3.23 2.48q0 .933-.478 1.467-.301.332-.783.505a3.3 3.3 0 0 1-1.083.163h-.555q-.632 0-1.139-.223a2.05 2.05 0 0 1-.9-.738A2.24 2.24 0 0 1 1 4.148q0-.088.004-.176.044-.824.525-1.827l1.095.484q-.386.798-.419 1.403l-.004.12q0 .378.166.618a.9.9 0 0 0 .5.354q.128.042.278.06.119.014.243.014h.555q.687 0 .933-.244.21-.209.21-.731V2.02h1.2v2.202zm5.433 3.184-.72-.7.709-.706.735.707-.724.7zm-2.856.308q.813 0 1.293.569.445.519.445 1.293v.364h.18v-.004h.41q.332 0 .467-.084a.28.28 0 0 0 .14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 0 1-.287.863q-.459.607-1.495.607h-.627q-.092 1.1-1.117 1.573a3.6 3.6 0 0 1-.937.265 6 6 0 0 1-.914.067V11.84q.918 0 1.38-.247.376-.198.376-.499h-.515q-.654 0-1.113-.339-.55-.41-.55-1.18 0-.732.367-1.24.444-.622 1.296-.622zm.533 2.226v-.364q0-.325-.143-.516a.46.46 0 0 0-.39-.187.48.48 0 0 0-.396.187.7.7 0 0 0-.136.449l.003.067q.011.188.177.283.14.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6zm-6.694 4.888h.03q.65-.014.937-.29.037.018.12.068l.074.039.081.042q.202.11.379.18.517.22.977.22a1.22 1.22 0 0 0 .87-.34q.45-.428.449-1.286a2.2 2.2 0 0 0-.335-1.145q-.448-.685-1.3-.685a1.56 1.56 0 0 0-1.242.575q-.169.198-.294.456-.048.092-.084.191l-.03.078-.022.06q-.154.463-.205.53-.108.136-.427.147-.185-.007-.256-.076-.085-.081-.085-.297V7l-1.201-.5v3.562q0 .392.143.703.107.237.29.413.184.177.43.28.297.127.665.136v.001zm2.752-1.014a.8.8 0 0 0 .044-.353.87.87 0 0 0-.165-.47q-.15-.201-.35-.201-.27 0-.447.31-.063.106-.114.262l-.04.12-.015.053-.015.046q.213.177.544.293.27.093.433.092.066 0 .125-.152"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
