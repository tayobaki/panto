import Nav from "./Nav";
import search from "@/assets/search.svg";
import Image from "next/image";
import Color from "./Color";
import Bg from "./Bg";

export default function Header() {
  return (
    <header className=" bg-center text-balance lg:bg-contain bg-cover bg-[url(../assets/header.png)] relative text-white w-full">
      <Nav />
      <div className=" mt-7 md:mt-14 z-50 w-full max-w-4xl mx-auto p-3 text-center space-y-3">
        <h1 className=" text-3xl md:text-7xl capitalize font-normal ">
          Make your interior more minimalistic & modern
        </h1>
        <p className=" opacity-80 max-w-md mx-auto pb-4">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>
        <div className="flex items-center py-2 pl-5 pr-2 justify-between rounded-full backdrop-blur-sm bg-white/15 border border-white/60 max-w-80 mx-auto">
          <h1 className=" opacity-70">Search furniture</h1>
          <Bg
            className={`p-3 flex items-start gap-3  rounded-full`}
            content={
              <Image
                src={search}
                width={18}
                height={18}
                alt="search"
                className=" object-contain aspect-auto"
              />
            }
          />
        </div>
      </div>
      <div className=" w-fit ml-44 flex items-start  flex-col gap-4">
        <Color />
        <div className=" border mx-auto border-white/60 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center w-9 h-9 ">
          <div className=" w-3 h-3 rounded-full bg-white animate-pulse" />
        </div>
      </div>
    </header>
  );
}
