import './item-summary-component-style.css';
import trash from '../../../../../../assets/graphics/trash.svg';

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
        <img id="remove-from-cart-image" src={trash}></img>
      </button>
      <div className="item">
        <h3>{title}</h3>
        <span>Enhetspris: {price} kr</span>
        <span>Totalpris: {totalPrice} kr</span>
      </div>
      <div className="item-action">
        <button id="decrease-qty" onClick={DecreaseQuantity}>
          -
        </button>
        <h3 id="count">{quantity}</h3>
        <button id="increase-qty" onClick={IncreaseQuantity}>
          +
        </button>
      </div>
    </div>
  );
}

export default ItemSummary;
