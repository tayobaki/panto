"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Slide({ onCatgSelect }) {
  const [activeSlide, setActiveSlide] = useState("Chair");

  const handleCategoryClick = (category) => {
    if (category !== "Beds" && category !== "Sofa") {
      // Explicitly exclude "Bed" && "Sofa"
      onCatgSelect(category);
    }
    setActiveSlide(category);
  };
  return (
    <div className="max-w-fit mx-auto flex justify-between mt-10 px-2 text-sm rounded-full items-center overflow-hidden h-10 bg-[#EEE] shadow-lg  shadow-black/20 gap-1">
      {bestSellerIndex.map((item, idx) => (
        <div
          key={idx}
          onClick={() => {
            handleCategoryClick(item.title);
          }}
          className={`h-8 w-20 p-1 relative cursor-pointer rounded-full  flex items-center justify-center`}
        >
          <button
            className={`${
              (item.title === "Beds" || item.title === "Sofa") &&
              " cursor-not-allowed"
            } z-40 text-black`}
          >
            {item.title}
          </button>
          <motion.div
            style={{
              backgroundColor: activeSlide === item.title ? "white" : "",
            }}
            initial={{ x: activeSlide === item.title }}
            animate={{
              x: activeSlide === item.title ? 0 : "-110%",
              transition: {
                duration: 0.4,
                ease: "easeOut",
              },
            }}
            className={`absolute z-30 text-black  inset-0 rounded-full`}
          />
        </div>
      ))}
    </div>
  );
}

const bestSellerIndex = [
  {
    title: "Chair",
  },
  {
    title: "Beds",
  },
  {
    title: "Sofa",
  },
  {
    title: "Lamp",
  },
];
