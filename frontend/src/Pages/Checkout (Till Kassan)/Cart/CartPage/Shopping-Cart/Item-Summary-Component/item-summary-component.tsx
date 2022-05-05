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
      <div className="item">
        <h1>{title}</h1>
        <h2>{price} kr</h2>
        <button id="increase-qty" onClick={IncreaseQuantity}>
          +
        </button>
        <h3>{quantity}</h3>
        <button id="decrease-qty" onClick={DecreaseQuantity}>
          -
        </button>
        <button id="remove-from-cart" onClick={RemoveFromCart}>
          X
        </button>
      </div>
    </div>
  );
}

export default ItemSummary;
