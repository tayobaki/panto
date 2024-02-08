"use client";

import { useActive, useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";

export default function CartComponent() {
  const cartProduct = useCartStore((state) => state.cart);
  const cartTotal = useCartStore((state) => state.cartTotal);
  const removeCartIndex = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const totalItems = useCartStore((state) => state.totalItems);
  const { active, setActive } = useActive();

  return (
    <>
      {active && (
        <div className="absolute -top-full cursor-default h-[450px] overflow-y-hidden  text-black bg-white p-5 md:w-[500px] w-[300px] -right-full shadow-lg border border-black/15">
          {cartProduct.length < 1 && (
            <div className="mt-5 text-base font-mediumm  ">
              <span>Your cart is empty</span>
            </div>
          )}

          <div className=" font-bold pt-4 flex items-center flex-1 justify-between">
            <h1>Total Items ({totalItems})</h1>
          </div>

          {cartProduct.length >= 1 && (
            <button onClick={clearCart} className="text-xs mt-4 underline">
              Clear All
            </button>
          )}

          <div className=" space-y-6 mt-5 whitespace-nowrap h-[200px] overflow-y-scroll">
            {cartProduct.length >= 1 &&
              cartProduct.map((item) => (
                <div key={item._id} className="">
                  <div className="flex items-center text-sm gap-2">
                    <Image
                      src={item.image}
                      width={80}
                      height={80}
                      alt={item.name}
                      className=" bg-black/5 aspect-square object-contain p-2 rounded-md"
                    />
                    <div className=" flex flex-col gap-5">
                      <h1 className=" font-semibold">{item.name}</h1>
                      <div className="flex items-center gap-0.5 font-medium ">
                        <p className=" self-start text-xs">₦</p>
                        <p className=" ">{item.price}.00</p>
                      </div>
                    </div>
                    <div className=" flex-1 text-right mr-3">
                      <button onClick={() => removeCartIndex(item._id)}>
                        <AiOutlineDelete
                          size={20}
                          className=" hover:fill-red-400 duration-300"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className=" mt-5">
            <div className="flex items-center border rounded border-black/10 p-2 flex-1 justify-between">
              <h1>Subtotal:</h1>
              <div className="flex items-start gap-0.5 font-semibold">
                <p className=" text-xs">₦</p>
                <p>{cartTotal}.00</p>
              </div>
            </div>
            <div className="mt-5 border border-black/10 rounded p-2 flex items-center justify-between flex-1">
              <h1>Total:</h1>
              <div className="flex items-start gap-0.5 font-semibold">
                <p className=" text-xs">₦</p>
                <p>{cartTotal * 2}.00</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
