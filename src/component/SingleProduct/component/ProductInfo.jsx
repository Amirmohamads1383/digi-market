import React from "react";
import ProductTitle from "../template/ProductTitle";
import ProductComment from "../template/ProductComment";
import ProductWarranty from "../template/ProductWarranty";
import ProductColor from "../template/ProductColor";
import Purchase from "./Purchase";
import ProductFeatures from "../template/ProductFeatures";

export default function ProductInfo({ product }) {
  return (
    <div className="w-full lg:w-4/6 grid grid-cols-2 gap-4">
      {/* Title */}
      <ProductTitle
        productTitle={product?.title}
        productTitleEn={product?.title_en}
      />
      {/* Comment */}
      <ProductComment rate={product?.rate} />
      {/* warranty */}
      {product?.warranty && <ProductWarranty warranty={product?.warranty} />}
      <div className="flex gap-4 items-start col-span-2">
        <div className="flex flex-col gap-4 w-full">
          {/* Colors */}
          {product?.colors && <ProductColor colors={product.colors} />}
          {/* Features */}
          <ProductFeatures specs={product?.specs} />
        </div>
        {/* purchase */}
        <Purchase product={product} />
      </div>
    </div>
  );
}
