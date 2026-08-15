import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

const WishListContext = createContext();

export default function WishlistProvider({ children }) {
  /* States */
  const [wishlist, setWishList] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  /* Get Wishlist From LocalStorage */
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      try {
        const parsedWishList = JSON.parse(savedWishlist);
        setWishList(parsedWishList);
      } catch (error) {
        console.error("Error loading wishlist:", error);
        setWishList([]);
      }
    }
    setIsInitialized(true);
  }, []);

  /* Set WishList To LocalStorage */
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist, isInitialized]);

  /* Add To WishList Handler */
  const addToWishlist = (product) => {
    setWishList((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        toast.info("این محصول قبلاً در لیست علاقه‌مندی‌ها وجود دارد");
        return prev;
      }
      toast.success("محصول به علاقه‌مندی‌ها اضافه شد");
      return [...prev, { ...product, addedAt: Date.now() }];
    });
  };

  /* Remove From WishList */
  const removeFromWishList = (productId) => {
    setWishList((prev) => {
      const newList = prev.filter((item) => item.id !== productId);
      toast.success("محصول از علاقه‌مندی‌ها حذف شد");
      return newList;
    });
  };

  const toggleWishlist = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);
    if (exists) {
      removeFromWishList(product.id);
    } else {
      addToWishlist(product);
    }
  };

  /* Remove All WishList */
  const clearWishlist = () => {
    setWishList([]);
    toast.success("همه محصولات از علاقه‌مندی‌ها حذف شدند");
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  /* Count WishList */
  const getWishlistCount = () => wishlist.length;

  return (
    <WishListContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishList,
        toggleWishlist,
        clearWishlist,
        isInWishlist,
        wishlistCount: getWishlistCount(),
      }}
    >
      {children}
    </WishListContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishListContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
