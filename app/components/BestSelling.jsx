import getProducts from "@/hooks/groq";
import Filtered from "./Filtered";

export default async function BestSelling() {
  const products = await getProducts();

  return (
    <div className="bg-[#F7F7F7] p-5 py-36">
      <h1 className=" text-xl text-center">Best Selling Product</h1>

      <Filtered products={products} />
    </div>
  );
}
