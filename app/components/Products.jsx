import Image from "next/image";
import star from "@/assets/star.svg";
import forward from "@/assets/forward.svg";
import CustomButton from "./CustomButton";

export default function Products({ item }) {
  return (
    <>
      <div
        key={item._id}
        className="flex flex-col border border-white/20 cursor-pointer shadow items-start rounded-2xl bg-[#FFF]"
      >
        <div className="bg-[#FAFAFA] rounded-t-2xl">
          <Image
            src={item.image}
            width={290}
            height={250}
            alt={item.name}
            className=" object-cover aspect-square pb-4 px-9  -mt-10 "
          />
        </div>
        <div className=" flex flex-col gap-2 px-3 py-5 w-full">
          <small className=" text-gray-500">{item.category}</small>
          <h1 className=" font-medium tracking-tighter">{item.name}</h1>
          <div className="flex items-center ">
            <Image
              src={star}
              width={10}
              height={10}
              alt="star"
              className=" object-contain aspect-auto"
            />
            <Image
              src={star}
              width={10}
              height={10}
              alt="star"
              className=" object-contain aspect-auto"
            />
            <Image
              src={star}
              width={10}
              height={10}
              alt="star"
              className=" object-contain aspect-auto"
            />
            <Image
              src={star}
              width={10}
              height={10}
              alt="star"
              className=" object-contain aspect-auto"
            />
            <Image
              src={star}
              width={10}
              height={10}
              alt="star"
              className=" object-contain aspect-auto"
            />
          </div>
          <div className="mt-2 flex items-center justify-between w-full">
            <div className="flex gap-0.5 items-center font-bold">
              <h6 className="text-xs self-start ">₦</h6>
              <h1>
                {item.price}
                .00
              </h1>
            </div>
            <CustomButton product={item} />
          </div>
        </div>
      </div>
      <div className=" absolute z-40 -left-4 top-1/2 -translate-y-1/2 -right-4 hidden lg:flex items-center justify-between">
        <div className=" w-8 h-8 cursor-not-allowed flex items-center justify-center bg-white shadow rounded-full border border-white/20">
          <Image
            src={forward}
            width={26}
            height={26}
            alt="forward"
            className="-rotate-180 object-contain aspect-auto"
          />
        </div>
        <div className=" w-8 h-8 flex items-center cursor-not-allowed justify-center bg-white shadow rounded-full border border-white/20">
          <Image
            src={forward}
            width={26}
            height={26}
            alt="forward"
            className=" object-contain aspect-auto"
          />
        </div>
      </div>
    </>
  );
}
