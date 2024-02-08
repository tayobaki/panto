"use client";

import { useColorStore } from "@/store/useColor";

export default function Text({ title }) {
  const color = useColorStore((state) => state.color);
  return (
    <div
      className={`${
        (color === "orange" && " text-[#e58411]") ||
        (color === "teal" && " text-[#00D6C9]") ||
        (color === "gray" && " text-[#7C7C7C]")
      }`}
    >
      {title}
    </div>
  );
}
