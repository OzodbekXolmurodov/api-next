import ProductW from "@/components/Product";
import { fetchExternalImage } from "next/dist/server/image-optimizer";
import React from "react";

async function Product() {
  const data = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const posts = await data.json();

  return (
    <>
      <ProductW data={posts} />
    </>
  );
}

export default Product;
