import Text from "./Text";
import Image from "next/image";
import experience from "@/assets/experiece.jpg";

export default function Experience() {
  return (
    <div className=" py-16 md:py-44 px-5 md:px-24">
      <div className="flex flex-col lg:flex-row items-start justify-between  w-full text-left gap-14">
        <div className=" relative ">
          <Image
            src={experience}
            width={550}
            height={400}
            alt="experience"
            priority
            className=" rounded-xl aspect-auto object-cover"
          />
          <div className=" absolute top-4 -right-6 rounded-xl bottom-[40%] bg-black/5 shadow -z-50 w-full" />
          <div className=" absolute  bottom-0 w-[90%] left-4 top-[40%] -z-50 bg-gradient-to-b from-black to-yellow-200 rounded-xl drop-shadow-full shadow-xl shadow-yellow-200" />
          <div className=" absolute left-4 -top-6 rounded-xl bottom-[40%] bg-black/5 shadow -z-50 w-[90%] " />
        </div>
        <div className="flex-1 mt-4">
          <div className=" uppercase tracking-wide">
            <Text title={"Experiences"} />
          </div>
          <h1 className=" capitalize text-xl md:text-3xl my-5 font-semibold">
            We provide you the best experience
          </h1>
          <p className=" leading-[185%] mb-6  md:text-base text-sm">
            You don’t have to worry about the result because all of these
            interiors are made by people who are professionals in their fields
            with an elegant and lucurious style and with premium quality
            materials
          </p>
          <div className=" text-sm">
            <Text title={"More info"} />
          </div>
        </div>
      </div>
    </div>
  );
}
