import "./index.css";

export default function Plants({ data, addItem }) {
  return (
    <>
      <ul>
        {data.map((plant) => (
          <li key={plant.id}>
            <figure>{plant.image}</figure>
            <h3>{plant.name}</h3>
            <button onClick={() => addItem(plant)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </>
  );
}
