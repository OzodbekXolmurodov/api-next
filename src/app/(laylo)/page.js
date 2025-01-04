import Hero from "@/components/Hero";
import ProductW from "@/components/Product";
import { memo } from "react";

async function Home() {
  const data = await fetch("https://fakestoreapiserver.reactbd.com/walmart");
  const posts = await data.json();
  return (
    <div className="">
      <ProductW data={posts} />
    </div>
  );
}

export default memo(Home);
