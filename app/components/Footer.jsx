import Image from "next/image";
import Text from "./Text";
import insta from "@/assets/instagram.svg";
import twitter from "@/assets/twitter.svg";
import facebook from "@/assets/facebook.svg";

export default function Footer() {
  return (
    <footer className=" bg-[#F7F7F7]  w-full z-50 md:pl-24 pl-8 pt-32 pb-20 text-black">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] items-start justify-between w-full gap-4">
        <div className=" space-y-1">
          <h1 className=" text-3xl font-semibold">Panto</h1>
          <div className=" opacity-80 text-sm text-balance leading-7">
            The advantage of hiring a workspace with us is that givees you
            comfortable service and all-around facilities.
          </div>
        </div>
        <div className=" space-y-1">
          <div className=" leading-9">
            <Text title={"Services"} />
          </div>
          <ul className=" text-sm ">
            {services.map((item, idx) => (
              <li key={idx} className=" leading-7">
                {item.link}
              </li>
            ))}
          </ul>
        </div>
        <div className=" space-y-1">
          <div className=" leading-9">
            <Text title={"Furniture"} />
          </div>
          <ul className=" text-sm">
            {furniture.map((item, idx) => (
              <li key={idx} className="leading-7">
                {item.link}
              </li>
            ))}
          </ul>
        </div>
        <div className=" space-y-1">
          <div className=" leading-9">
            <Text title={"Follow Us"} />
          </div>
          <ul className=" text-sm">
            {follow.map((item, idx) => (
              <li key={idx} className="leading-7">
                {item.link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

const services = [
  {
    link: "Email Marketing",
  },
  {
    link: "Campaigns",
  },
  {
    link: "Branding",
  },
];

const furniture = [
  {
    link: "Beds",
  },
  {
    link: "Chairs",
  },
  {
    link: "All",
  },
];

const follow = [
  {
    link: (
      <button className="flex items-center gap-2">
        <Image
          src={facebook}
          width={12}
          height={12}
          alt="Facebook"
          className="aspect-square object-contain"
        />
        <h1>Facebook</h1>
      </button>
    ),
  },
  {
    link: (
      <button className="flex items-center gap-2">
        <Image
          src={twitter}
          width={12}
          height={12}
          alt="Twitter"
          className=" aspect-square object-contain"
        />
        <h1>Twitter</h1>
      </button>
    ),
  },
  {
    link: (
      <button className="flex items-center gap-2">
        <Image
          src={insta}
          width={12}
          height={12}
          alt="Instagram"
          className="aspect-square object-contain"
        />
        <h1>Instagram</h1>
      </button>
    ),
  },
];
