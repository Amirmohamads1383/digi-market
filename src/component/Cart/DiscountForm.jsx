import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { toast } from "sonner";

export default function DiscountForm() {
  const { applyDiscountCode, discountCode } = useCart();
  const [discountInput, setDiscountInput] = useState("");

  /* Check Length Input */
  const handleApplyDiscount = () => {
    if (discountInput.trim()) {
      applyDiscountCode(discountInput);
      setDiscountInput("");
    } else {
      toast.error("لطفاً کد تخفیف را وارد کنید");
    }
  };

  /* OK KeyBoard Handler */
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleApplyDiscount();
    }
  };

  return (
    <div className="flex flex-col gap-3 p-4 bg-white border border-Caption/35 rounded-xl">
      <span className="text-base sm:text-lg font-semibold text-Title text-center sm:text-right">
        کد تخفیف دارید ؟
      </span>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
        <input
          type="text"
          className="w-full sm:w-4/5 px-2 py-2.5 text-sm outline-0 border border-Caption/35 rounded-lg text-center sm:text-right"
          placeholder="کد تخفیف خود را وارد کنید"
          value={discountInput}
          onChange={(e) => setDiscountInput(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={!!discountCode}
        />
        <button
          className="flex items-center justify-center gap-2 shrink-0 px-4 py-2.5 w-full sm:w-auto text-sm text-white hover:text-Primary border border-Primary bg-Primary hover:bg-white rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          onClick={handleApplyDiscount}
          disabled={!!discountCode}
        >
          اعمال کد
        </button>
      </div>
      {discountCode && (
        <div className="text-xs sm:text-sm text-green-600 bg-green-50 p-2 rounded-lg text-center">
          کد تخفیف {discountCode} با موفقیت اعمال شد
        </div>
      )}
    </div>
  );
}
