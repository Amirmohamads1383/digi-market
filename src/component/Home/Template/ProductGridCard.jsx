import { Link } from "react-router";

export default function ProductGridCard({ product }) {
  const hasDiscount = product.discountPercent > 0;

  const finalPrice = hasDiscount
    ? Math.floor(product.price * (1 - product.discountPercent / 100))
    : product.price;

  return (
    <div className="bg-white border border-Caption/35 rounded-3xl p-3">
      <div className="flex items-center gap-4">
        {/* Image */}
        <Link to={`/product/${product.id}`} className="w-28 shrink-0">
          <img
            src={product.image[0]}
            alt={product.title}
            className="w-full object-contain"
          />
        </Link>
        {/* Content */}
        <div className="flex flex-col justify-between flex-1 h-full">
          <h3 className="font-semibold text-sm lg:text-lg line-clamp-1">
            {product.title_en}
          </h3>
          <div className="mt-3 flex justify-between items-center h-12">
            <div>
              {hasDiscount && (
                <p className="text-xs text-Caption line-through">
                  {product.price.toLocaleString()}
                </p>
              )}
              <p className="flex items-center gap-1.5 font-bold text-lg text-Title">
                {finalPrice.toLocaleString()}
                <svg
                  fill="#3D4349"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 14 14"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.057 1.742 3.821 1l.78.75-.776.741zm3.23 2.48q0 .933-.478 1.467-.301.332-.783.505a3.3 3.3 0 0 1-1.083.163h-.555q-.632 0-1.139-.223a2.05 2.05 0 0 1-.9-.738A2.24 2.24 0 0 1 1 4.148q0-.088.004-.176.044-.824.525-1.827l1.095.484q-.386.798-.419 1.403l-.004.12q0 .378.166.618a.9.9 0 0 0 .5.354q.128.042.278.06.119.014.243.014h.555q.687 0 .933-.244.21-.209.21-.731V2.02h1.2v2.202zm5.433 3.184-.72-.7.709-.706.735.707-.724.7zm-2.856.308q.813 0 1.293.569.445.519.445 1.293v.364h.18v-.004h.41q.332 0 .467-.084a.28.28 0 0 0 .14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 0 1-.287.863q-.459.607-1.495.607h-.627q-.092 1.1-1.117 1.573a3.6 3.6 0 0 1-.937.265 6 6 0 0 1-.914.067V11.84q.918 0 1.38-.247.376-.198.376-.499h-.515q-.654 0-1.113-.339-.55-.41-.55-1.18 0-.732.367-1.24.444-.622 1.296-.622zm.533 2.226v-.364q0-.325-.143-.516a.46.46 0 0 0-.39-.187.48.48 0 0 0-.396.187.7.7 0 0 0-.136.449l.003.067q.011.188.177.283.14.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6zm-6.694 4.888h.03q.65-.014.937-.29.037.018.12.068l.074.039.081.042q.202.11.379.18.517.22.977.22a1.22 1.22 0 0 0 .87-.34q.45-.428.449-1.286a2.2 2.2 0 0 0-.335-1.145q-.448-.685-1.3-.685a1.56 1.56 0 0 0-1.242.575q-.169.198-.294.456-.048.092-.084.191l-.03.078-.022.06q-.154.463-.205.53-.108.136-.427.147-.185-.007-.256-.076-.085-.081-.085-.297V7l-1.201-.5v3.562q0 .392.143.703.107.237.29.413.184.177.43.28.297.127.665.136v.001zm2.752-1.014a.8.8 0 0 0 .044-.353.87.87 0 0 0-.165-.47q-.15-.201-.35-.201-.27 0-.447.31-.063.106-.114.262l-.04.12-.015.053-.015.046q.213.177.544.293.27.093.433.092.066 0 .125-.152"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
            </div>
            {hasDiscount && (
              <div className="flex items-center gap-1 border border-Primary rounded-xl px-3 py-2 text-Primary font-bold text-sm">
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
              </div>
            )}
          </div>
          <Link
            to={`/product/${product.id}`}
            className="mt-4 h-11 rounded-xl text-Primary bg-[#F9F9F9] hover:bg-Primary hover:text-white flex items-center justify-center gap-2 text-sm font-medium transition-all"
          >
            مشاهده قیمت
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              className="w-4 h-4 lg:w-5 lg:h-5"
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
          </Link>
        </div>
      </div>
    </div>
  );
}
