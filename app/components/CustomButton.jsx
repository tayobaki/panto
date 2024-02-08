"use client";

import { useCartStore } from "@/store/useCartStore";
import { useActive } from "@/store/useCartStore";

export default function CustomButton({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const { active, setActive } = useActive();
  return (
    <div className="">
      <button
        onClick={() => {
          addToCart({ product, quantity: 1 });
          setActive(true);
        }}
        className=" rounded-full w-7 h-7 flex items-center justify-center cursor-pointer bg-black text-white"
      >
        +
      </button>
    </div>
  );
}
