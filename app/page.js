import Header from "./components/Header";
import BestSelling from "./components/BestSelling";
import Experience from "./components/Experience";
import Materials from "./components/Materials";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className=" ">
      <Header />
      <div className=" max-w-7xl mx-auto">
        <BestSelling />
        <Experience />
        <Materials />
        <Testimonials />
      </div>
    </main>
  );
}

// const headerInfo = [
//   {
//     title: "Luxury Facilities",
//     p: "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.",
//     button: (
//       <button>
//         <h1>More info</h1>
//       </button>
//     ),
//   },
//   {
//     title: "Affordable Prices",
//     p: "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.",
//     button: (
//       <button>
//         <h1>More info</h1>
//       </button>
//     ),
//   },
//   {
//     title: "Many Choices",
//     p: "We provide many unique work space choices so that you can choose the workspace to your liking.",
//     button: (
//       <button>
//         <h1>More info</h1>
//       </button>
//     ),
//   },
// ];

// <div className="  h-screen flex items-center px-6">
// <div className="grid grid-cols-[0.8fr_2fr]  items-center text-black">
//   <h1 className=" capitalize text-3xl font-semibold">
//     Why choosing us
//   </h1>
//   <div className=" grid grid-cols-3">
//     {headerInfo.map((item) => (
//       <div key={item.title} className=" flex flex-col gap-4">
//         <h1>{item.title}</h1>
//         <p>{item.p}</p>
//         <button className=" self-start text-orange-300 font-light">
//           {item.button}
//         </button>
//       </div>
//     ))}
//   </div>
// </div>
// </div>
