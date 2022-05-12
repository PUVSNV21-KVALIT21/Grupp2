import './item-summary-component-style.css';
import trash from '../../../../../../assets/graphics/trash.svg';

function ItemSummary({
  title,
  category,
  price,
  totalPrice,
  IncreaseQuantity,
  quantity,
  DecreaseQuantity,
  RemoveFromCart,
}: {
  title: string;
  category: string;
  price: number;
  totalPrice: number;
  IncreaseQuantity: () => void;
  quantity: number;
  DecreaseQuantity: () => void;
  RemoveFromCart: () => void;
}) {
  return (

    <div className="item-summary">
      <button id="remove-from-cart" onClick={RemoveFromCart}>
        <img id="remove-from-cart-image" src={trash}></img>
      </button>
      <div className="item">
        <h1>{title}</h1>
        <h2>{category}</h2>
        <div className="price-section">
          <h3>Enhetspris: </h3>
          <h3 id="unit-price">{price} kr</h3>
        </div>
        <div className="price-section">
          <h3>Summa: </h3>
          <h3 id="total-unit-price">{totalPrice} kr</h3>
        </div>
      </div>
      <div className="item-action">
        <button className="decrease-qty" onClick={DecreaseQuantity}>
          <p>-</p>
        </button>
        <span id="count">{quantity}</span>
        <button className="increase-qty" onClick={IncreaseQuantity}>
          <p>+</p>
        </button>
      </div>
    </div>
  );
}

export default ItemSummary;
