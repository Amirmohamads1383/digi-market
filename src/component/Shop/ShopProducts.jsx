import React from "react";
import ProductCard from "../Common/ProductCard";

export default function ShopProducts({ products }) {
  return (
    <div className="w-full lg:w-3/4 flex flex-col gap-3">
      <div></div>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
