"use client";

import Image from "next/image";
import union from "@/assets/Union.svg";
import check from "@/assets/check.svg";

import { useColorStore } from "@/store/useColor";

export default function Color() {
  const color = useColorStore((state) => state.color);
  const setColor = useColorStore((state) => state.setColor);
  return (
    <div className="relative w-fit">
      <Image
        src={union}
        style={{ width: "auto", height: "auto" }}
        width={112}
        height={55}
        alt="union"
        className="object-contain aspect-auto"
      />
      <div className="absolute left-4 top-1/2 -translate-y-[70%] flex-1 justify-between flex items-center gap-2">
        <div onClick={() => setColor("orange")} className=" relative">
          <div className="bg-[#e58411] h-5 w-5 rounded-full cursor-pointer" />
          {color === "orange" && (
            <Image
              src={check}
              style={{ width: "auto", height: "auto" }}
              width={18}
              height={18}
              alt="check"
              className=" absolute object-contain aspect-auto inset-0 flex items-center justify-center"
            />
          )}
        </div>
        <div onClick={() => setColor("teal")} className=" relative">
          <div className="bg-[#00D6C9] h-5 w-5 rounded-full cursor-pointer" />
          {color === "teal" && (
            <Image
              src={check}
              style={{ width: "auto", height: "auto" }}
              width={18}
              height={18}
              alt="check"
              className=" absolute object-contain aspect-auto inset-0 flex items-center justify-center"
            />
          )}
        </div>
        <div onClick={() => setColor("gray")} className=" relative">
          <div className="bg-[#7C7C7C] h-5 w-5 rounded-full cursor-pointer" />
          {color === "gray" && (
            <Image
              src={check}
              style={{ width: "auto", height: "auto" }}
              width={18}
              height={18}
              alt="check"
              className=" absolute object-contain aspect-auto inset-0 flex items-center justify-center"
            />
          )}
        </div>
      </div>
    </div>
  );
}
