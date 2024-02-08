import Text from "./Text";
import Image from "next/image";
import mOne from "@/assets/material1.jpg";
import mTwo from "@/assets/material2.jpg";
import mThree from "@/assets/material3.jpg";

export default function Materials() {
  return (
    <div className="md:py-44 py-16 px-5 md:px-24">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-14">
        <div className="flex-1 mt-4">
          <div className=" uppercase tracking-wide">
            <Text title={"Materials"} />
          </div>
          <h1 className=" capitalize text-xl md:text-3xl my-5 font-semibold">
            Very serious materials for making furniture
          </h1>
          <p className=" md:leading-[185%] mb-6 md:text-base text-sm">
            You don’t have to worry about the result because all of these
            interiors are made by people who are professionals in their fields
            with an elegant and lucurious style and with premium quality
            materials
          </p>
          <div className=" text-sm">
            <Text title={"More info"} />
          </div>
        </div>
        <div className=" h-full">
          <div className="flex items-end h-full gap-4">
            <div className="flex flex-col gap-6">
              <Image
                src={mOne}
                width={223}
                height={223}
                alt="mOne"
                className=" rounded-xl aspect-square object-cover  hidden md:block"
              />
              <Image
                src={mTwo}
                width={223}
                height={317}
                alt="mOne"
                className=" rounded-xl aspect-square object-cover hidden md:block"
              />
            </div>
            <Image
              src={mThree}
              width={303}
              height={429}
              alt="mOne"
              className=" rounded-xl aspect-square object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
