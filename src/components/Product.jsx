import React from "react";
import ResubelProduct from "./ResubelProduct";

const ProductW = ({ data, dataW, dataP }) => {
  return (
    <div className="containerM">
      <h1 className="text-[70px]">Texnika</h1>
      <ResubelProduct key={1} data={data} />
    </div>
  );
};

export default ProductW;
