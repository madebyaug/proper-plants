import { useState } from "react";
import { PLANTS as Data } from "./data.js";
import "./index.css";

// Components
import Plants from "./Plants.jsx";
import Cart from "./Cart.jsx";

// DOM Render
export default function App() {
  const [data, setData] = useState(Data);
  const [cart, setCart] = useState([]);

  /* I DIDN'T UNDERSTAND THIS LOGIC */
  // Add to Cart
  function addItem(item) {
    const existing = cart.find((cartItem) => cartItem.id === item.id);

    if (existing) {
      const newCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }

  /* I DIDN'T UNDERSTAND THIS LOGIC */
  // Remove from Cart
  function removeItem(item) {
    const existing = cart.find((cartItem) => cartItem.id === item.id);

    if (existing) {
      const newCart = cart
        .map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0);
      setCart(newCart);
    }
  }

  // const total = item.map((cartItem) => {
  //   cartItem.quantity;
  // });

  return (
    <>
      <h1>Proper Plants</h1>
      <div id="shop">
        <div id="plants">
          <h2>Plants</h2>
          <Plants data={data} addItem={addItem} />
        </div>
        <div id="cart">
          <h2>Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <Cart cart={cart} addItem={addItem} removeItem={removeItem} />
          )}
        </div>
      </div>
    </>
  );
}
