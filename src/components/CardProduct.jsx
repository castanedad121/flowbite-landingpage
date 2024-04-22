import React from "react";
import { IoEyeSharp } from "react-icons/io5";

const CardProduct = ({ product }) => {
  const { img, size } = product && product;
  return (
    <div className="flex justify-center items-center flex-col h-56 ">
      <div className="h-full w-full flex justify-center items-center">
        <img src={img} alt="" className={`drop-shadow-xl ${size}`} />
      </div>
      <div className="h-8">
        <a
          href="#"
          className=" text-blue-700 flex gap-2 text-base justify-center items-center"
        >
          <span className="text-sub underline">Ver Ficha Técnica</span>
        </a>
      </div>
    </div>
  );
};

export default CardProduct;
