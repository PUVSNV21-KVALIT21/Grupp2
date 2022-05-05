import './item-summary-component-style.css';

function ItemSummary({
  title,
  price,
  IncreaseQuantity,
  quantity,
  DecreaseQuantity,
  RemoveFromCart,
}: {
  title: string;
  price: number;
  IncreaseQuantity: () => void;
  quantity: number;
  DecreaseQuantity: () => void;
  RemoveFromCart: () => void;
}) {
  return (
    <div className="item-summary-wrapper">
      <h1>{title}</h1>
      <h2>{price} kr</h2>
      <button onClick={IncreaseQuantity}></button>
      <h3>{quantity}</h3>
      <button onClick={DecreaseQuantity}></button>
      <button onClick={RemoveFromCart}></button>
    </div>
  );
}

export default ItemSummary;
