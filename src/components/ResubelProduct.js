"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { MdAddShoppingCart } from "react-icons/md";

const ResubelProduct = ({ data }) => {
  const router = useRouter();
  console.log(data);

  if (!data) {
    console.error("Data is undefined or null.");
    return <div>No products available.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {data?.map((pro) => (
        <div
          key={pro.id}
          className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
        >
          <Image
            onClick={() => router.push(`/products/${pro?.id}`)}
            src={pro.image}
            width={300}
            height={300}
            alt={pro.description}
            className="cursor-pointer object-cover w-full h-48"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 truncate">
              {pro.title}
            </h2>
            <div className="flex justify-between items-center mt-2">
              <div>
                <p className="line-through text-sm text-gray-500">
                  {pro.oldPrice} $$$
                </p>
                <p className="text-xl font-bold text-red-600">
                  {pro.price} $$$
                </p>
              </div>
              <Link href={"/shop"}>
                <button
                  type="button"
                  className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <MdAddShoppingCart size={24} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResubelProduct;
