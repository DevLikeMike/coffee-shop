import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NEXT_URL } from "@/config/index";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [shippingAddress, setShippingAddress] = useState({});
  let cartItemsFromStorage;

  // Check for Items in localstorage
  // Set initial state to items in local storage or an empty array
  if (typeof window !== "undefined") {
    cartItemsFromStorage = localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [];
  }
  // Set cartItems
  const [cartItems, setCartItems] = useState(cartItemsFromStorage);

  // Add item to cart
  const addCartItem = (item) => {
    if (item !== {}) {
      // Every time an item is added to cart, save it to local storage
      setCartItems([...cartItems, item]);
    }
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [addCartItem]);

  const router = useRouter();

  // Delete item from cart
  const deleteCartItem = ({ item }) => {
    const name = item.name;
    let newCartItems = cartItems.filter((item) => item.name !== name);
    setCartItems(newCartItems);
  };

  // Add shipping address

  return (
    <CartContext.Provider value={{ cartItems, shippingAddress, addCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
