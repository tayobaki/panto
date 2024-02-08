"use client";

import Slide from "./Slide";
import Products from "./Products";
import { useState } from "react";

export default function Filtered({ products }) {
  const [filteredProducts, setFilteredProducts] = useState(
    products.filter((item) => item.category === "Chair")
  );

  const handleCategoryClick = (category) => {
    setFilteredProducts(products.filter((item) => item.category === category));
  };

  return (
    <div>
      <>
        <Slide onCatgSelect={handleCategoryClick} />
      </>

      <div className=" mt-20 max-w-xs md:max-w-3xl  mx-auto">
        <div className="text-black grid md:grid-cols-3 lg:grid-cols-4 gap-y-16 relative gap-x-9">
          {filteredProducts.map((item) => (
            <div key={item._id} className="">
              <Products item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
