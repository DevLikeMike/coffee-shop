import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NEXT_URL } from "@/config/index";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Define cartItemsFromStorage to allow it to be in the scope of the function
  let cartItemsFromStorage;

  // Check for Items in localstorage
  // Set initial state to items in local storage or an empty array
  if (typeof window !== "undefined") {
    cartItemsFromStorage = localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [];
  }
  // Set cartItems via localstorage or empty array intially
  const [cartItems, setCartItems] = useState(cartItemsFromStorage);

  // Add item to cart
  const addCartItem = (item) => {
    // Make sure item is not an empty obj
    if (item !== {}) {
      // Every time an item is added to cart, save it to local storage
      setCartItems([...cartItems, item]);
    }
  };

  // Set local storage cartItems
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [addCartItem]);

  const router = useRouter();

  // Delete item from cart
  const deleteCartItem = (item) => {
    const name = item.name;
    let filterdItems = cartItems.filter((item) => item.name !== name);
    setCartItems(filterdItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, addCartItem, deleteCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
