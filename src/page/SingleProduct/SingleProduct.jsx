import React, { useEffect, useState } from "react";
import Breadcrumb from "../../component/Common/Breadcrump";
import ProductHero from "../../component/SingleProduct/ProductHero";
import { useParams } from "react-router";
import SimilarProducts from "../../component/SingleProduct/SimilarProducts";
import Features from "../../component/SingleProduct/Features";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [currentCat, setCurrentCat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("/data/product.json");

        if (!res.ok) {
          throw new Error("خطا در دریافت داده");
        }

        const data = await res.json();
        const mainProduct = data.find(
          (product) => product.id === parseInt(id) || product.id === id,
        );

        const categoryProducts = data.filter(
          (product) => product.category == mainProduct.category,
        );

        if (!mainProduct) {
          throw new Error("محصول یافت نشد");
        }

        setProduct(mainProduct);
        setCurrentCat(categoryProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Breadcrumb />
      <ProductHero product={product} />
      <SimilarProducts currentCat={currentCat} currentProductId={product?.id}/>
      <Features product={product}/>
    </>
  );
}
