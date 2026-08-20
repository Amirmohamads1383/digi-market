import React from "react";
import Breadcrumb from "../../component/Common/Breadcrump";
import SideBar from "../../component/Cart/SideBar";
import { useCart } from "../../context/CartContext";
import CartItemsContainer from "../../component/Cart/CartItemsContainer";
import EmptyCart from "../../component/Cart/EmptyCart";

export default function Cart() {
  const { cartItems } = useCart();

  return (
    <>
      <Breadcrumb />
      <section className="container pt-10 md:pt-12 lg:pt-16">
        {cartItems?.length > 0 ? (
          <div className="flex flex-col lg:flex-row items-start gap-6">
            {/* Cart Items */}
            <CartItemsContainer />
            {/* Aside */}
            <SideBar />
          </div>
        ) : (
          <EmptyCart />
        )}
      </section>
    </>
  );
}
