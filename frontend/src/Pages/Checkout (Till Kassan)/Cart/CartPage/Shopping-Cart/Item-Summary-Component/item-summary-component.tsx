import './item-summary-component-style.css';

function ItemSummary({
  title,
  totalPrice,
  price,
  IncreaseQuantity,
  quantity,
  DecreaseQuantity,
  RemoveFromCart,
}: {
  title: string;
  totalPrice: number;
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
        <h2>{totalPrice}</h2>
        <h3>{price} kr</h3>
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
