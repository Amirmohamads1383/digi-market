import React from "react";
import { useCart } from "../../../context/CartContext";
import { Link } from "react-router";

export default function MiniCart({ isShowMiniCart }) {
  const {
    cartItems,
    getFinalPrice,
    getCartTotal,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div
        className={`absolute top-16 left-0 w-96 p-4 overflow-y-auto bg-white rounded-2xl shadow-md border border-Caption/35 transition-all z-100 ${isShowMiniCart ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <span className="flex flex-col gap-4 items-center justify-center text-base font-semibold text-Title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={80}
            height={80}
            viewBox="0 0 80 80"
            fill="none"
          >
            <path
              d="M34.233 70c0 2.3-1.866 4.167-4.166 4.167-2.297 0-4.184-1.867-4.184-4.167s1.85-4.167 4.15-4.167h.034c2.3 0 4.166 1.867 4.166 4.167m22.5-4.167H56.7c-2.3 0-4.15 1.867-4.15 4.167s1.883 4.167 4.183 4.167S60.9 72.3 60.9 70s-1.867-4.167-4.167-4.167M72.35 28.307 68.97 48.86c-.876 4.82-3.057 10.307-12.303 10.307H29.113c-4.53 0-8.433-3.384-9.073-7.87L15.007 16.08a4.186 4.186 0 0 0-4.124-3.577H10a2.5 2.5 0 0 1 0-5h.887c4.53 0 8.433 3.384 9.073 7.87l.306 2.13h43.067c2.727 0 5.294 1.2 7.04 3.294a9.14 9.14 0 0 1 1.977 7.51m-5.82-4.31a4.16 4.16 0 0 0-3.2-1.497H20.977l4.013 28.09a4.186 4.186 0 0 0 4.123 3.577h27.554c5.323 0 6.62-1.987 7.376-6.157l3.38-20.557c.23-1.26-.1-2.506-.893-3.456m-15.597 7.57a2.5 2.5 0 0 0-3.536 0L44.163 34.8l-3.233-3.233a2.501 2.501 0 0 0-3.537 3.536l3.234 3.234-3.234 3.233a2.5 2.5 0 0 0 3.533 3.537l3.234-3.234 3.233 3.234a2.494 2.494 0 0 0 3.533 0 2.5 2.5 0 0 0 0-3.537l-3.233-3.233 3.233-3.234c.984-.98.984-2.56.007-3.536"
              fill="#606060"
            />
          </svg>
          سبد خرید شما در حال حاضر خالی است!
        </span>
      </div>
    );
  }
  const totalPrice = getCartTotal();

  return (
    <div
      className={`absolute top-16 left-0 w-96 p-4 overflow-y-auto bg-white rounded-2xl shadow-md border border-Caption/35 transition-all z-100 ${isShowMiniCart ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      {/* Header Mini Cart */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-Title">سبد خرید شما</span>
        <span className="text-xs font-bold p-2 bg-Primary/15 text-Primary rounded-md">
          {cartItems.length} کالا
        </span>
      </div>
      {/* Body Mini Cart */}
      <div className="max-h-80 py-3 my-3 overflow-y-auto border-y border-y-Caption/35">
        <div className="flex flex-col gap-3">
          {cartItems.map((item) => {
            const finalPrice = getFinalPrice(item);
            return (
              <div
                key={`${item.id}-${item.color || ""}-${item.size || ""}`}
                className="relative flex gap-3 py-3 border-b last:border-0 border-b-Caption/35"
              >
                {/* Remove */}
                <button
                  onClick={() =>
                    removeFromCart(item.id, item.selectedColor?.title)
                  }
                  className="absolute top-0 left-0 w-6 h-6 flex items-center justify-center rounded-full text-Caption hover:text-red-500 transition-all cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75m0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75"
                      fill="currentColor"
                    />
                    <path
                      d="M9.17 15.58c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l5.66-5.66c.29-.29.77-.29 1.06 0s.29.77 0 1.06L9.7 15.36c-.14.15-.34.22-.53.22"
                      fill="currentColor"
                    />
                    <path
                      d="M14.83 15.58c-.19 0-.38-.07-.53-.22L8.64 9.7a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l5.66 5.66c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                {/* Product Image */}
                <Link
                  to={`/product/${item.id}`}
                  className="shrink-0 w-19.5 h-19.5 rounded-xl bg-white border border-Caption/10 overflow-hidden"
                >
                  <img
                    src={item.image[0]}
                    alt={item.title}
                    className="w-full h-full object-contain p-2"
                  />
                </Link>
                {/* Product Info */}
                <div className="flex flex-1 flex-col justify-between min-w-0">
                  <Link
                    to={`/product/${item.id}`}
                    className="text-sm font-bold text-Title line-clamp-2 leading-6 hover:text-Primary transition-colors pl-5"
                  >
                    {item.title}
                  </Link>
                  {/* Attributes */}
                  <div className="flex items-center gap-2 mt-1">
                    {item.selectedColor?.title && (
                      <span className="text-[11px] text-Caption flex items-center gap-1.5">
                        <span>رنگ:</span>
                        <span className="font-medium text-Title">
                          {item.selectedColor.title}
                        </span>
                        <span
                          className="w-3 h-3 rounded-full border border-Caption/20 inline-block"
                          style={{ backgroundColor: item.selectedColor.hexa }}
                        />
                      </span>
                    )}
                  </div>
                  {/* Bottom */}
                  <div className="flex items-center justify-between gap-2 mt-2">
                    {/* Quantity */}
                    <div className="flex items-center border border-Caption/20 bg-white rounded-lg overflow-hidden">
                      <button
                        onClick={() =>
                          increaseQuantity(
                            item.id,
                            item.hasWarranty,
                            item.selectedColor?.title,
                          )
                        }
                        className="w-7 h-7 flex items-center justify-center text-Title hover:text-Primary hover:bg-Primary/5 transition-all cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M6 12h12m-6 6V6"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <span className="w-7 text-center text-xs font-bold text-Title">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          decreaseQuantity(
                            item.id,
                            item.hasWarranty,
                            item.selectedColor?.title,
                          )
                        }
                        className="w-7 h-7 flex items-center justify-center text-Title hover:text-Primary hover:bg-Primary/5 transition-all cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M6 12h12"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    {/* Price */}
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-bold text-Primary">
                        {(finalPrice * item.quantity).toLocaleString()}
                      </span>
                      <span className="text-[10px] text-Caption">تومان</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Footer Mini Cart */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-Title">مجموع سبد خرید</span>
          <p className="flex items-center gap-0.5 font-bold text-Primary">
            {totalPrice.toLocaleString()}
            <span className="text-Title">
              <svg
                fill="#4357BE"
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
            </span>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 items-center">
          <Link to={"/checkout"}>
            <button className="w-full font-bold flex items-center justify-center py-3 text-white hover:text-Primary bg-Primary hover:bg-white rounded-xl border border-Primary cursor-pointer transition-all">
              تسویه حساب
            </button>
          </Link>
          <Link to={"/cart"}>
            <button className="w-full font-bold flex items-center justify-center py-3 text-Primary bg-transparent rounded-xl border border-Primary cursor-pointer transition-all">
              سبد خرید
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
