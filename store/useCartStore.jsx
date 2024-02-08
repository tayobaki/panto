import { create } from "zustand";
import { persist } from "zustand/middleware";

function calculateCartTotal(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function calculateTotalItems(cart) {
  return cart.reduce((total, item) => total + 1, 0);
}

export const useActive = create((set) => ({
  active: false,
  setActive: (active) => set({ active }),
}));

export const useCartStore = create(
  persist(
    (set) => ({
      totalItems: 0,
      cart: [],
      cartTotal: 0,

      addToCart: ({ product, quantity }) =>
        set((state) => {
          const existingProductIndex = state.cart.findIndex(
            (item) => item._id === product._id
          );

          if (existingProductIndex !== -1) {
            const updatedCart = [...state.cart];
            updatedCart[existingProductIndex].quantity += quantity;

            return {
              cart: updatedCart,
              totalItems: state.totalItems + quantity,
              cartTotal: state.cartTotal + product.price * quantity,
            };
          }

          const updatedCart = [
            ...state.cart,
            {
              ...product,
              quantity: quantity,
              totalItems: quantity,
            },
          ];

          return {
            cart: updatedCart,
            totalItems: state.totalItems + quantity,
            cartTotal: state.cartTotal + product.price * quantity,
          };
        }),

      removeFromCart: (productId) =>
        set((state) => {
          const updatedCart = state.cart.filter(
            (item) => item._id !== productId
          );

          return {
            cart: updatedCart,
            cartTotal: calculateCartTotal(updatedCart),
            totalItems: calculateTotalItems(updatedCart),
          };
        }),

      clearCart: () => set({ cart: [], cartTotal: 0, totalItems: 0 }),
    }),
    {
      name: "cart store",
    }
  )
);
