"use client";

import Text from "./Text";
import Image from "next/image";
import tOne from "@/assets/testimonial1.png";
import tTwo from "@/assets/testimonial2.png";
import tThree from "@/assets/testimonial3.png";
import forward from "@/assets/forward.svg";
import star from "@/assets/Star.svg";
import three from "@/assets/three.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Testimonials() {
  return (
    <div className=" max-w-4xl mx-auto py-36 px-5 md:px-14 lg:px-0 ">
      <div className=" uppercase text-xs text-center">
        <Text title={"Testimonials"} />
      </div>
      <h1 className=" text-center text-2xl leading-9 font-semibold">
        Our Client Reviews
      </h1>
      <div className=" mt-36 relative">
        <Swiper
          navigation={{
            prevEl: ".trendingButton-prev-slide",
            nextEl: ".trendingButton-next-slide",
          }}
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={2} // Adjust slides per view based on screen size
          breakpoints={{
            // Adjust slidesPerView and other options based on breakpoints
            640: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          className=""
        >
          {testimonial.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div key={idx} className="relative ">
                <Image
                  src={item.image}
                  width={370}
                  height={476}
                  alt={item.name}
                  className=" rounded-xl object-cover aspect-auto"
                />
                <div className=" bg-white absolute bottom-4 left-4 w-[90%]  rounded-2xl text-black text-xs">
                  <div className="flex flex-col p-3 relative items-center gap-0">
                    <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 bg-white p-2 rounded-full z-10">
                      <Image
                        src={item.profile}
                        width={40}
                        height={40}
                        alt="imageThree"
                        className=" rounded-full"
                      />
                    </div>
                    <h1 className=" leading-6 text-base font-semibold z-50 mt-4">
                      {item.name}
                    </h1>
                    <small className="">{item.location}</small>

                    <blockquote className=" my-4 text-center">
                      “{item.blockquote}“
                    </blockquote>
                    <div className="flex items-center ">
                      <Image src={star} width={10} height={10} alt="star" />
                      <Image src={star} width={10} height={10} alt="star" />
                      <Image src={star} width={10} height={10} alt="star" />
                      <Image src={star} width={10} height={10} alt="star" />
                      <Image src={star} width={10} height={10} alt="star" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className=" absolute z-40 -left-4 top-1/2 -translate-y-1/2 -right-4 hidden md:flex items-center justify-between">
          <button className="trendingButton-prev-slide w-8 h-8 flex items-center cursor-pointer justify-center bg-white shadow rounded-full border border-white/20">
            <Image
              src={forward}
              width={26}
              height={26}
              alt="forward"
              className="-rotate-180"
            />
          </button>
          <button className="trendingButton-next-slide w-8 h-8 flex items-center cursor-pointer justify-center bg-white shadow rounded-full border border-white/20">
            <Image
              src={forward}
              width={26}
              height={26}
              alt="forward"
              className=" "
            />
          </button>
        </div>
      </div>
    </div>
  );
}

const testimonial = [
  {
    name: "Bang Upin",
    image: tOne,
    location: "Karyawan Swasta",
    blockquote:
      "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    star: star,
    profile: three,
  },
  {
    name: "Ibuk Sukijan",
    image: tTwo,
    location: "Karyawan Swasta",
    blockquote:
      "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    star: star,
    profile: three,
  },
  {
    name: "Mpok Ina",
    image: tThree,
    location: "Karyawan Swasta",
    blockquote:
      "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    star: star,
    profile: three,
  },
  {
    name: "Bang Upin",
    image: tOne,
    location: "Karyawan Swasta",
    blockquote:
      "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    star: star,
    profile: three,
  },
];
