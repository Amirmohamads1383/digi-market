import React from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router";
import DiscountForm from "./DiscountForm";

export default function SideBar() {
  const {
    cartItems,
    getCartTotal,
    getTotalDiscount,
    getFinalPrice,
    appliedDiscount,
    discountCode,
    removeDiscountCode,
  } = useCart();
  return (
    <div className="flex flex-col gap-4 w-full lg:w-1/4">
      <aside className="flex flex-col gap-4 p-4 bg-white border border-Caption/35 rounded-2xl">
        <h3 className="text-xl font-bold text-Title">خلاصه سفارش</h3>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-Title/65 font-bold">
              جمع کل محصولات ({cartItems.length})
            </span>
            <span className="text-Title font-bold">
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toLocaleString()}{" "}
              تومان
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-Title/65 font-bold">هزینه ارسال</span>
            <span className="font-bold text-green-700">رایگان</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-Title/65 font-bold">تخفیف</span>
            <span className="font-bold text-green-700">
              {getTotalDiscount() > 0
                ? `${getTotalDiscount().toLocaleString()}-`
                : "0"}{" "}
              تومان
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-3 border-t border-t-Caption/35">
          <div className="flex items-center justify-between">
            <span className="text-sm text-Title/65 font-bold">
              مبلغ قابل پرداخت
            </span>
            <span className="flex items-center gap-1 text-Title font-bold">
              {getCartTotal().toLocaleString()}
              <span className="text-xs font-medium">تومان</span>
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            <Link to={"/checkout"}>
              <button className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 text-sm sm:text-base text-white hover:text-Primary bg-Primary hover:bg-white rounded-xl cursor-pointer transition">
                ادامه فرایند خرید
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    className="sm:w-6 sm:h-6"
                  >
                    <path
                      d="m14 7-4 5 4 5"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </aside>
      <DiscountForm />
    </div>
  );
}
