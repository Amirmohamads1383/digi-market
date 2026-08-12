import React from "react";

export default function Purchase({ product }) {
  const hasDiscount = product?.discountPercent > 0;

  const finalPrice = hasDiscount
    ? Math.round(product?.price * (1 - product?.discountPercent / 100))
    : product?.price;
  return (
    <div className="flex flex-col gap-3 w-full lg:w-1/2 p-4 bg-white border border-Caption/35 rounded-xl">
      <div className="flex items-center justify-between">
        <span className="font-medium text-Title">فروشنده</span>
        <span className="flex items-center justify-center gap-1 font-semibold text-Primary">
          همه فروشندگان(1)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div className="flex flex-col gap-3 py-3 border-y border-y-Caption/35">
        <div className="flex items-center justify-between">
          <span className="flex items-center justify-center gap-1 font-semibold text-Title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3.01 11.22v4.49C3.01 20.2 4.81 22 9.3 22h5.39c4.49 0 6.29-1.8 6.29-6.29v-4.49"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 12c1.83 0 3.18-1.49 3-3.32L14.34 2H9.67L9 8.68C8.82 10.51 10.17 12 12 12"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.31 12c2.02 0 3.5-1.64 3.3-3.65l-.28-2.75C20.97 3 19.97 2 17.35 2H14.3l.7 7.01c.17 1.65 1.66 2.99 3.31 2.99M5.64 12c1.65 0 3.14-1.34 3.3-2.99l.22-2.21.48-4.8H6.59C3.97 2 2.97 3 2.61 5.6l-.27 2.75C2.14 10.36 3.62 12 5.64 12M12 17c-1.67 0-2.5.83-2.5 2.5V22h5v-2.5c0-1.67-.83-2.5-2.5-2.5"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            ستیا همراه
          </span>
          <span className="text-sm font-semibold text-Caption">
            عملکرد:
            <span className="text-green-700"> عالی</span>
          </span>
        </div>
        <div className="flex items-center justify-between p-3 bg-[#FAFAFA] text-[#9A9A9A] border border-Caption/35 rounded-xl">
          <span className="flex items-center gap-1 text-sm font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 7.75V13m9.08-4.42v6.84c0 1.12-.6 2.16-1.57 2.73l-5.94 3.43c-.97.56-2.17.56-3.15 0l-5.94-3.43a3.15 3.15 0 0 1-1.57-2.73V8.58c0-1.12.6-2.16 1.57-2.73l5.94-3.43c.97-.56 2.17-.56 3.15 0l5.94 3.43c.97.57 1.57 1.6 1.57 2.73"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 16.2v.1"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            18 ماه گارانتی شرکت
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9.57 5.93 3.5 12l6.07 6.07M20.5 12H3.67"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          {product?.discountPercent > 0 ? (
            <span className="flex items-center gap-1 font-bold text-xs sm:text-sm text-Primary px-2 sm:px-3 py-2 sm:py-2.5 border border-Primary rounded-xl sm:rounded-2xl">
              {product?.discountPercent}%
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
                  {product?.price.toLocaleString()}
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
                {product?.price.toLocaleString()}
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
        <button className="flex items-center justify-center gap-2 py-4 w-full font-bold bg-Primary hover:bg-white text-white hover:text-Primary rounded-xl transition-all cursor-pointer">
          افزودن به سبد خرید
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M2 2h1.74c1.08 0 1.93.93 1.84 2l-.83 9.96a2.796 2.796 0 0 0 2.79 3.03h10.65c1.44 0 2.7-1.18 2.81-2.61l.54-7.5c.12-1.66-1.14-3.01-2.81-3.01H5.82M16.25 22a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m-8 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M9 8h12"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
