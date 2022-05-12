import '../button-style.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { ShoppingCart } from '../../../Models';

/* eslint-disable rule-name */
function CartButton({ cart }: { cart: [] }) {
  const cartBtn: any = useRef();
  const [totalItems, setTotalItems] = useState(0);

  let itemsTotal = 0;
  useEffect(() => {
    cart.forEach((item: any) => {
      itemsTotal += item.qty;
    });

    setTotalItems(itemsTotal);

    if (cart.length === 0) {
      cartBtn.current.style.opacity = '50%';
      cartBtn.current.style.pointerEvents = 'none';
    } else {
      cartBtn.current.style.opacity = '100%';
      cartBtn.current.style.pointerEvents = 'auto';
    }
  }, [cart, totalItems, setTotalItems]);

  return (
    <div className="cart-button">
      <Link to="/cart" ref={cartBtn}>
        <button ref={cartBtn} className="button" id="cart-button">
          <p>Till Kassan</p>
        </button>
      </Link>
      <div className="counter">
        <span id="counter">{totalItems}</span>
      </div>
    </div>
  );
}
/* eslint-disable rule-name */

const mapStateToProps = (state: ShoppingCart) => {
  return {
    cart: state.shoppingCart,
  };
};

export default connect(mapStateToProps)(CartButton);
