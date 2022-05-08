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
      <button id="remove-from-cart" onClick={RemoveFromCart}>
        X
      </button>
      <div className="item">
        <h3>{title}</h3>
        <span>{totalPrice}</span>
        <span>{price} kr</span>
      </div>
      <div className="item-action">
        <button id="increase-qty" onClick={IncreaseQuantity}>
          +
        </button>
        <h3>{quantity}</h3>
        <button id="decrease-qty" onClick={DecreaseQuantity}>
          -
        </button>
      </div>
    </div>
  );
}

export default ItemSummary;
