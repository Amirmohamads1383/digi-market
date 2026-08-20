import React, { useEffect, useState } from "react";
import Breadcrumb from "../../component/Common/Breadcrump";
import Sidebar from "../../component/Shop/Sidebar";
import ShopProducts from "../../component/Shop/ShopProducts";

export default function Shop() {
  /* States */
  const [products, setProducts] = useState([]);

  /* Fetch Products From Json File */
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/product.json");
      const data = await res.json();
      setProducts(data);
    };

    fetchData();
  }, []);
  
  return (
    <>
      <Breadcrumb />
      <section className="container flex flex-col lg:flex-row items-start gap-6 pt-10 md:pt-12 lg:pt-16">
        <Sidebar />
        <ShopProducts products={products}/>
      </section>
    </>
  );
}
