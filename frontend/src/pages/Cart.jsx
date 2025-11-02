import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {
  const { products, currency, cartItem } = useContext(ShopContext);
  return <div>Cart</div>;
};

export default Cart;
