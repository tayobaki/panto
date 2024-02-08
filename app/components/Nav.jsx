"use client";

import Image from "next/image";
import down from "@/assets/down.svg";
import bag from "@/assets/Bag.svg";
import Bg from "./Bg";
import { useCartStore } from "@/store/useCartStore";
import CartComponent from "./Cart";
import { useActive } from "@/store/useCartStore";
import { CiCircleRemove } from "react-icons/ci";

export default function Nav() {
  const totalItems = useCartStore((state) => state.totalItems);
  const { active, setActive } = useActive();
  return (
    <nav className="flex w-full items-center justify-between flex-1 pl-6 py-4 text-white">
      <h1 className=" font-medium text-2xl">Panto</h1>
      <ul className=" md:flex items-center gap-5 text-sm hidden">
        {navLinks.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-1 cursor-pointer"
          >
            <li>{item.title}</li>
            <span>{item.item}</span>
          </div>
        ))}
      </ul>
      <div className="" />
      <div className="fixed z-50 top-4 right-6">
        <div
          onClick={() => setActive(true)}
          className="relative cursor-pointer "
        >
          <Image
            src={bag}
            width={30}
            height={30}
            alt="cartBag"
            className=" aspect-auto object-contain"
          />
          <Bg
            className={` rounded-full w-6 h-6 flex items-center justify-center absolute -right-2 top-1/2 animate-bounce -translate-y-1/2`}
            content={totalItems}
          />
          <>
            <CartComponent />
          </>
        </div>
      </div>
      {active && (
        <button
          onClick={() => setActive(false)}
          className=" z-50 fixed cursor-pointer top-0 right-0 m-5 mt-5"
        >
          <CiCircleRemove size={29} color="#000" />
        </button>
      )}
    </nav>
  );
}

const navLinks = [
  {
    title: "Furniture",
    item: (
      <Image
        src={down}
        width={20}
        height={20}
        alt="down"
        className=" object-contain aspect-auto"
      />
    ),
  },
  {
    title: "Shop",
  },
  {
    title: "About Us",
  },
  {
    title: "Contact",
  },
];
