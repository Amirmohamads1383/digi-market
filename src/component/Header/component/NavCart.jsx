import React from "react";
import { useCart } from "../../../context/CartContext";
import { Link } from "react-router";

export default function NavCart({ isCartOpen, setIsCartOpen }) {
  const {
    cartItems,
    getFinalPrice,
    getCartTotal,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const totalPrice = getCartTotal();

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsCartOpen(false)}
        className={`fixed inset-0 z-190 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />
      {/* Sidebar Cart */}
      <div
        className={`fixed top-0 left-0 p-6 z-200 h-dvh w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-Caption/20">
          <h3 className="text-lg font-bold text-Title">سبد خرید</h3>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2 py-1 bg-Primary/15 text-Primary rounded-md">
              {cartItems.length} کالا
            </span>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-Title hover:text-red-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
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
          </div>
        </div>
        {/* Body - Cart Items */}
        <div className="h-[calc(100dvh-180px)] py-4 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col gap-4 items-center justify-center h-full text-center">
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
              <p className="text-sm text-Caption">سبد خرید شما خالی است</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-sm font-bold text-Primary hover:underline"
              >
                ادامه خرید
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {cartItems.map((item) => {
                const finalPrice = getFinalPrice(item);
                return (
                  <div
                    key={`${item.id}-${item.selectedColor?.title || ""}-${item.size || ""}`}
                    className="relative flex gap-3 p-2 border-b last:border-b-0 border-b-Caption/35"
                  >
                    {/* Remove Button */}
                    <button
                      onClick={() =>
                        removeFromCart(item.id, item.selectedColor?.title)
                      }
                      className="absolute top-1 left-1 w-5 h-5 flex items-center justify-center rounded-full bg-white shadow-md text-Caption hover:text-red-500 transition-all z-10"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={14}
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
                      onClick={() => setIsCartOpen(false)}
                      className="shrink-0 w-20 h-20 rounded-lg bg-white border border-Caption/10 overflow-hidden"
                    >
                      <img
                        src={item.image?.[0] || item.image}
                        alt={item.title}
                        className="w-full h-full object-contain p-2"
                      />
                    </Link>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={() => setIsCartOpen(false)}
                        className="text-sm font-bold text-Title line-clamp-2 hover:text-Primary transition-colors"
                      >
                        {item.title}
                      </Link>

                      {/* Attributes */}
                      <div className="flex items-center gap-2 mt-1">
                        {item.selectedColor?.title && (
                          <span className="text-[10px] text-Caption flex items-center gap-1">
                            <span>رنگ:</span>
                            <span className="font-medium text-Title">
                              {item.selectedColor.title}
                            </span>
                            <span
                              className="w-3 h-3 rounded-full border border-Caption/20 inline-block"
                              style={{
                                backgroundColor: item.selectedColor.hexa,
                              }}
                            />
                          </span>
                        )}
                        {item.size && (
                          <span className="text-[10px] text-Caption">
                            سایز: {item.size}
                          </span>
                        )}
                        {item.hasWarranty && (
                          <span className="text-[10px] text-green-600 font-medium">
                            گارانتی
                          </span>
                        )}
                      </div>

                      {/* Bottom: Quantity & Price */}
                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-Caption/20 bg-white rounded-lg overflow-hidden">
                          <button
                            onClick={() =>
                              increaseQuantity(
                                item.id,
                                item.hasWarranty,
                                item.selectedColor?.title,
                              )
                            }
                            className="w-7 h-7 flex items-center justify-center text-Title hover:text-Primary hover:bg-Primary/5 transition-all"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
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
                            className="w-7 h-7 flex items-center justify-center text-Title hover:text-Primary hover:bg-Primary/5 transition-all"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
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
                        <div className="flex items-center gap-0.5">
                          <span className="text-sm font-bold text-Primary">
                            {(finalPrice * item.quantity).toLocaleString()}
                          </span>
                          <span className="text-[9px] text-Caption">تومان</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-Caption/20">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-Title">
                مجموع سبد خرید
              </span>
              <p className="flex items-center gap-0.5 font-bold text-Primary text-lg">
                {totalPrice.toLocaleString()}
                <span className="text-xs text-Caption font-normal">تومان</span>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="w-full font-bold text-center py-3 text-white bg-Primary rounded-xl hover:bg-Primary/90 transition-all text-sm"
              >
                تسویه حساب
              </Link>
              <Link
                to="/cart"
                onClick={() => setIsCartOpen(false)}
                className="w-full font-bold text-center py-3 text-Primary bg-transparent border border-Primary rounded-xl hover:bg-Primary/5 transition-all text-sm"
              >
                سبد خرید
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
