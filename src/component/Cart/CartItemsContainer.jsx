import React from "react";
import { useCart } from "../../context/CartContext";

export default function CartItemsContainer() {
  const {
    cartItems,
    getFinalPrice,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalPrice
  } = useCart();

  return (
    <div className="w-full lg:w-3/4 p-4 bg-white border border-Caption/35 rounded-2xl">
      <div className="flex flex-col gap-6">
        {cartItems.map((cartItem) => {
          const finalPrice = getFinalPrice(cartItem);
          const totalPrice = getTotalPrice(cartItem)
          return (
            <div
              key={cartItem.id}
              className="flex items-center justify-between px-3 py-2.5 border border-Caption/35 rounded-2xl"
            >
              {/* Image */}
              <div className="flex items-center gap-3">
                <div className="w-20 h-20">
                  <img
                    src={cartItem.image[0]}
                    className="w-full h-full"
                    alt={cartItem.title}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-sm font-bold text-Title">
                    {cartItem.title}
                  </h2>
                  {cartItem.selectedColor?.title && (
                    <span className="text-xs font-normal text-Caption flex items-center gap-1.5">
                      <span>رنگ:</span>
                      <span className="font-semibold text-Title">
                        {cartItem.selectedColor.title}
                      </span>
                      <span
                        className="w-3 h-3 rounded-full border border-Caption/20 inline-block"
                        style={{ backgroundColor: cartItem.selectedColor.hexa }}
                      />
                    </span>
                  )}
                  <span className="text-xs font-medium text-green-700">
                    موجود در انبار
                  </span>
                </div>
              </div>
              {/* Price */}
              <div className="text-sm font-bold text-Title">{finalPrice.toLocaleString()} تومان</div>
              {/* Counter */}
              <div className="w-25 flex items-center justify-center gap-3 px-4 py-2 border border-Caption/35 rounded-xl">
                <span
                  className="text-Primary hover:text-Title cursor-pointer transition-all"
                  onClick={() =>
                    increaseQuantity(
                      cartItem.id,
                      cartItem.hasWarranty,
                      cartItem.selectedColor?.title,
                    )
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18 12.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75"
                      fill="currentColor"
                    />
                    <path
                      d="M12 18.75c-.41 0-.75-.34-.75-.75V6c0-.41.34-.75.75-.75s.75.34.75.75v12c0 .41-.34.75-.75.75"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="text-sm font-bold text-Title pointer-events-none">
                  {cartItem.quantity}
                </span>
                <span
                  className="text-Primary hover:text-Title cursor-pointer transition-all"
                  onClick={() =>
                    decreaseQuantity(
                      cartItem.id,
                      cartItem.hasWarranty,
                      cartItem.selectedColor?.title,
                    )
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18 12.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </div>
              {/* Total Price */}
              <div className="text-sm font-bold text-Title">{totalPrice.toLocaleString()} تومان</div>
              {/* Remove */}
              <span
                className="p-2 text-red-600 hover:bg-red-100 rounded-full cursor-pointer transition-all"
                onClick={() =>
                  removeFromCart(cartItem.id, cartItem.selectedColor?.title)
                }
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
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
