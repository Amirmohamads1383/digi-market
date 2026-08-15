import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

const CartContext = createContext();

export function CartProvider({ children }) {
  /* Load Cart From LocalStorage */
  const loadCartFromStorage = () => {
    try {
      const savedCart = localStorage.getItem("shopping-cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
      return [];
    }
  };

  /* Load Discount From LocalStorage */
  const loadDiscountFromStorage = () => {
    try {
      const savedDiscount = localStorage.getItem("discount-code");
      return savedDiscount ? JSON.parse(savedDiscount) : null;
    } catch (error) {
      console.error("Error loading discount from localStorage:", error);
      return null;
    }
  };

  /* States */
  const [cartItems, setCartItems] = useState(loadCartFromStorage);
  const [discountCode, setDiscountCode] = useState(loadDiscountFromStorage);
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  /* Discount Codes */
  const validDiscountCodes = {
    SAVE10: 10,
    SAVE20: 20,
    SUMMER50: 50,
    WELCOME15: 15,
  };

  /* Set Cart LocalStorage */
  useEffect(() => {
    try {
      localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [cartItems]);

  /* Set Discount LocalStorage */
  useEffect(() => {
    try {
      if (discountCode) {
        localStorage.setItem("discount-code", JSON.stringify(discountCode));
      } else {
        localStorage.removeItem("discount-code");
      }
    } catch (error) {
      console.error("Error saving discount to localStorage:", error);
    }
  }, [discountCode]);

  /* Update Applied Discount */
  useEffect(() => {
    if (discountCode && cartItems.length > 0) {
      const discountPercent = validDiscountCodes[discountCode];
      if (discountPercent) {
        const subtotal = cartItems.reduce((total, item) => {
          return total + getTotalPrice(item);
        }, 0);
        const discountAmount = (subtotal * discountPercent) / 100;
        setAppliedDiscount(discountAmount);
      }
    } else {
      setAppliedDiscount(0);
    }
  }, [cartItems, discountCode]);

  /* Final Price */
  const getFinalPrice = (product) => {
    let basePrice = product.price;

    if (product.hasWarranty && product.warranty?.price) {
      basePrice += product.warranty.price;
    }

    if (product.discountPercent && product.discountPercent > 0) {
      return basePrice - (basePrice * product.discountPercent) / 100;
    }
    return basePrice;
  };

  const getDiscountAmount = (product) => {
    let basePrice = product.price;

    if (product.hasWarranty && product.warranty?.price) {
      basePrice += product.warranty.price;
    }

    if (product.discountPercent && product.discountPercent > 0) {
      return (basePrice * product.discountPercent) / 100;
    }
    return 0;
  };

  const getTotalProductDiscount = () => {
    return cartItems.reduce((total, item) => {
      return total + getDiscountAmount(item) * item.quantity;
    }, 0);
  };

  const getTotalPrice = (product) => {
    return getFinalPrice(product) * product.quantity;
  };

  const getCartTotal = () => {
    const subtotal = cartItems.reduce((total, item) => {
      return total + getTotalPrice(item);
    }, 0);
    return subtotal - appliedDiscount;
  };

  const getTotalDiscount = () => {
    const productDiscount = getTotalProductDiscount();
    return productDiscount + appliedDiscount;
  };

  const applyDiscountCode = (code) => {
    const normalizedCode = code.trim().toUpperCase();
    if (validDiscountCodes[normalizedCode]) {
      const discountPercent = validDiscountCodes[normalizedCode];
      const subtotal = cartItems.reduce((total, item) => {
        return total + getTotalPrice(item);
      }, 0);

      const discountAmount = (subtotal * discountPercent) / 100;
      setAppliedDiscount(discountAmount);
      setDiscountCode(normalizedCode);
      toast.success(`کد تخفیف با موفقیت اعمال شد! (${discountPercent}% تخفیف)`);
      return true;
    } else {
      toast.error("کد تخفیف نامعتبر است!");
      return false;
    }
  };

  const removeDiscountCode = () => {
    setAppliedDiscount(0);
    setDiscountCode(null);
    localStorage.removeItem("discount-code");
    toast.info("کد تخفیف لغو شد");
  };

  /* Add to Cart with Color Support */
  const addToCart = (product, quantity = 1, hasWarranty = false) => {
    if (discountCode) {
      setAppliedDiscount(0);
      setDiscountCode(null);
      localStorage.removeItem("discount-code");
    }

    setCartItems((prev) => {
      // Check if product exists with same id, warranty, and color
      const exist = prev.find(
        (item) =>
          item.id === product.id &&
          item.hasWarranty === hasWarranty &&
          item.selectedColor?.title === product.selectedColor?.title,
      );

      if (exist) {
        // Update quantity if exists
        const updatedItems = prev.map((item) =>
          item.id === product.id &&
          item.hasWarranty === hasWarranty &&
          item.selectedColor?.title === product.selectedColor?.title
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item,
        );
        return updatedItems;
      }

      // Add new item
      const newItems = [
        ...prev,
        {
          ...product,
          quantity,
          hasWarranty: hasWarranty,
          // Ensure color info is preserved
          selectedColor: product.selectedColor || null,
          colorTitle: product.selectedColor?.title || null,
          colorHexa: product.selectedColor?.hexa || null,
        },
      ];
      return newItems;
    });
  };

  /* Remove from Cart */
  const removeFromCart = (id, colorTitle = null) => {
    if (discountCode) {
      setAppliedDiscount(0);
      setDiscountCode(null);
      localStorage.removeItem("discount-code");
    }

    setCartItems((prev) => {
      if (colorTitle) {
        // Remove specific color variant
        return prev.filter(
          (item) =>
            !(item.id === id && item.selectedColor?.title === colorTitle),
        );
      }
      // Remove all variants of product
      return prev.filter((item) => item.id !== id);
    });

    toast.warning("محصول از سبد خرید حذف شد");
  };

  /* Increase Quantity with Color Support */
  const increaseQuantity = (id, hasWarranty = false, colorTitle = null) => {
    if (discountCode) {
      setAppliedDiscount(0);
      setDiscountCode(null);
      localStorage.removeItem("discount-code");
    }

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id &&
        item.hasWarranty === hasWarranty &&
        item.selectedColor?.title === colorTitle
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  /* Decrease Quantity with Color Support */
  const decreaseQuantity = (id, hasWarranty = false, colorTitle = null) => {
    if (discountCode) {
      setAppliedDiscount(0);
      setDiscountCode(null);
      localStorage.removeItem("discount-code");
    }

    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id &&
          item.hasWarranty === hasWarranty &&
          item.selectedColor?.title === colorTitle
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  /* Clear Cart */
  const clearCart = () => {
    setCartItems([]);
    setAppliedDiscount(0);
    setDiscountCode(null);
    localStorage.removeItem("shopping-cart");
    localStorage.removeItem("discount-code");
    toast.info("سبد خرید خالی شد");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        getFinalPrice,
        getDiscountAmount,
        getTotalProductDiscount,
        getTotalPrice,
        getCartTotal,
        getTotalDiscount,
        appliedDiscount,
        discountCode,
        applyDiscountCode,
        removeDiscountCode,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
