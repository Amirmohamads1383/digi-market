import React, { useState } from "react";
import ProductTitle from "../template/ProductTitle";
import ProductComment from "../template/ProductComment";
import ProductWarranty from "../template/ProductWarranty";
import ProductColor from "../template/ProductColor";
import Purchase from "./Purchase";
import ProductFeatures from "../template/ProductFeatures";

export default function ProductInfo({ product }) {
  const [isCheckedWarranty, setIsCheckedWarranty] = useState(false);
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || null, // رنگ پیش‌فرض اولین رنگ موجود
  );

  return (
    <div className="w-full lg:w-4/6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Title */}
      <ProductTitle
        productTitle={product?.title}
        productTitleEn={product?.title_en}
      />
      {/* Comment */}
      <ProductComment rate={product?.rate} />
      {/* warranty */}
      {product?.warranty && (
        <ProductWarranty
          warranty={product?.warranty}
          isCheckedWarranty={isCheckedWarranty}
          setIsCheckedWarranty={setIsCheckedWarranty}
        />
      )}
      <div className="flex flex-col md:flex-row gap-4 items-start col-span-2">
        <div className="flex flex-col gap-4 w-full md:w-3/4">
          {/* Colors */}
          {product?.colors && (
            <ProductColor
              colors={product.colors}
              selectedColor={selectedColor}
              onColorSelect={setSelectedColor}
            />
          )}
          {/* Features */}
          <ProductFeatures specs={product?.specs} />
        </div>
        {/* purchase */}
        <Purchase
          product={product}
          isCheckedWarranty={isCheckedWarranty}
          selectedColor={selectedColor}
        />
      </div>
    </div>
  );
}
