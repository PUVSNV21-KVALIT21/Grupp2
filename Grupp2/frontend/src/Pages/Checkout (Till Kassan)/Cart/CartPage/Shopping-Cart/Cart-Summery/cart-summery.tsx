import { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import './cart-summery.css';
import { CartItem, ShoppingCart } from '../../../../../../Models';
import { Link } from 'react-router-dom';

/* eslint-disable @typescript-eslint/no-explicit-any */
function CartSummery({ cart }: { cart: [] }) {
  const [cartSum, setCartSum] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [delivery, setDelivery] = useState(Boolean);
  const [user, setUser] = useState([{}]);
  const payBtn: any = useRef();
  const deliveryText: any = useRef();
  const noItemsText: any = useRef();
  const notLoggedInUser: any = useRef();

  //Run once on mount
  useEffect(() => {
    payBtn.current.style.opacity = '50%';
    payBtn.current.style.pointerEvents = 'none';
    deliveryText.current.style.display = 'block';
    noItemsText.current.style.display = 'none';
    getUser();
  }, []);

  let totalPrice = 0;
  //Run when cart- and delivery state is updated
  useEffect(() => {
    cart.forEach((item: CartItem) => {
      totalPrice += item.qty * item.price;
    });
    setCartSum(totalPrice);
    checkCart();
  }, [cart, delivery]);

  let userResponse: any;

  async function getUser() {
    const response = await fetch('/user', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    userResponse = await response.json();
    console.log(userResponse);
    setUser(userResponse);
    if (userResponse.length > 0) {
      notLoggedInUser.current.style.display = 'none';
    } else {
      notLoggedInUser.current.style.display = 'block';
    }
  }

  function checkCart() {
    if (cart.length === 0) {
      payBtn.current.style.opacity = '50%';
      payBtn.current.style.pointerEvents = 'none';
      noItemsText.current.style.display = 'block';
    } else if (cart.length > 0 && delivery && user.length > 0) {
      console.log('cart.length > 0 && delivery');
      payBtn.current.style.opacity = '100%';
      payBtn.current.style.pointerEvents = 'auto';
      noItemsText.current.style.display = 'none';
    }
  }

  async function handleSelection(event: any) {
    const deliveryWay = event.target.value;

    if (deliveryWay) {
      deliveryText.current.style.display = 'none';
      await setDelivery(true);
      if (deliveryWay === 'store-pickup') {
        setDeliveryPrice(0);
      } else if (deliveryWay === 'delivery') {
        setDeliveryPrice(39);
      }
    }
  }

  return (
    <div className="cart-summery">
      <h2>Summa</h2>
      <div className="cart-collection">
        <li className="cart-item">
          <span>Summa varor</span>
          {/* round total to two decimals */}
          <span>{Math.round(cartSum * 100) / 100} kr</span>
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
              <label htmlFor="deliveryChoice1" id="online-delivery">
                Leverans
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="deliveryChoice2"
                name="delivery-option"
                value="store-pickup"
                onChange={handleSelection}
              />
              <label htmlFor="deliveryChoice2" id="pickup-in-store">
                Hämta i butik
              </label>
            </div>
          </div>
        </li>
        <li className="cart-item">
          <span>Leverans</span>
          <span>{deliveryPrice} kr</span>
        </li>
        <li className="cart-item">
          <b>Totalt</b>
          {/* round total to two decimals */}
          <b>{Math.round((cartSum + deliveryPrice) * 100) / 100} kr</b>
        </li>
      </div>
      <div className="checkout">
        <Link to={'/receipt'} ref={payBtn}>
          <button ref={payBtn} className="pay-button">
            Betala
          </button>
        </Link>
      </div>
      {/* error text to handle 0 items in cart and user not having selected delivery way  */}
      <span id="delivery-error-text" ref={deliveryText}>
        Välj leveranssätt för att gå vidare till betalning
      </span>
      <span id="empty-cart-error-text" ref={noItemsText}>
        Lägg till varor för att gå vidare till betalning
      </span>
      <span id="notlogged-user-error-text" ref={notLoggedInUser}>
        Du måste logga in för att slutföra ditt köp
      </span>
    </div>
  );
}

const mapStateToProps = (state: ShoppingCart) => {
  return {
    cart: state.shoppingCart,
  };
};
/* eslint-disable @typescript-eslint/no-explicit-any */

export default connect(mapStateToProps)(CartSummery);
