"use client";

import { useColorStore } from "@/store/useColor";

export default function Bg({ className, content }) {
  const color = useColorStore((state) => state.color);
  return (
    <div
      className={`${className} ${
        (color === "orange" && " bg-orange-500") ||
        (color === "teal" && " bg-[#00D6C9]") ||
        (color === "gray" && " bg-[#7C7C7C]")
      }`}
    >
      {content}
    </div>
  );
}
