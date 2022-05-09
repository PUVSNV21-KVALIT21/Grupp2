import { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import './cart-summery.css';
import { Item, ShoppingCart } from '../../../../../../Models';

function CartSummery({ cart }: { cart: [] }) {
  const [itemTotalPrice, setItemTotalPrice] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const payBtn: any = useRef();

  let price = 0;

  const handleSelection = (event: any) => {
    console.log('handle selection');
    const deliveryWay = event.target.value;
    if (deliveryWay === 'store-pickup') {
      setDeliveryPrice(0);
      payBtn.current.style.opacity = '100%';
      payBtn.current.style.pointerEvents = 'auto';
    } else {
      setDeliveryPrice(39);
      payBtn.current.style.opacity = '100%';
      payBtn.current.style.pointerEvents = 'auto';
    }
  };

  useEffect(() => {
    cart.forEach((item: Item) => {
      price += item.qty * item.price;
    });
    setItemTotalPrice(price);
    payBtn.current.style.opacity = '50%';
    payBtn.current.style.pointerEvents = 'none';
    handleSelection;
  }, [cart]);

  return (
    <div className="cart-summery">
      <h2>Summa</h2>
      <div className="cart-collection">
        <li className="cart-item">
          <span>Summa varor</span>
          {/* round total to two decimals */}
          <span>{Math.round(itemTotalPrice * 100) / 100}</span>
        </li>
        <li className="cart-item">
          <div className="delivery">
            Välj leveranssätt:
            <div>
              <input
                type="radio"
                id="deliveryChoice1"
                name="delivery-option"
                value="delivery"
                onChange={handleSelection}
              />
              <label htmlFor="deliveryChoice1">Leverans</label>
            </div>
            <div>
              <input
                type="radio"
                id="deliveryChoice2"
                name="delivery-option"
                value="store-pickup"
                onChange={handleSelection}
              />
              <label htmlFor="deliveryChoice2">Hämta i butik</label>
            </div>
          </div>
        </li>
        <li className="cart-item">
          <span>Leverans</span>
          <span>{deliveryPrice} kr</span>
        </li>
        {/* <li className="cart-item reduced-price">
          <span>Avdrag</span>
          <span>-0 kr</span>
        </li> */}
        <li className="cart-item">
          <b>Totalt</b>
          {/* round total to two decimals */}
          <b>{Math.round((itemTotalPrice + deliveryPrice) * 100) / 100}</b>
        </li>
      </div>
      <div className="checkout">
        <button ref={payBtn} className="pay-button">
          Betala
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state: ShoppingCart) => {
  return {
    cart: state.shoppingCart,
  };
};

export default connect(mapStateToProps)(CartSummery);
