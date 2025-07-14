import "./index.css";

/* I DIDN'T UNDERSTAND THIS LOGIC - cart = [] */
export default function Cart({ cart, addItem, removeItem }) {
  return (
    <>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <figure>{item.image}</figure>
            <h5>{item.name}</h5>
            <div id="buttons">
              <button onClick={() => addItem(item)}>+</button>
              <h4>{item.quantity}</h4>
              <button onClick={() => removeItem(item)}>-</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
