import '../button-style.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

function CartButton({ cart }: { cart: [] }) {
  const cartBtn: any = useRef();
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let itemsTotal = 0;

    cart.forEach((item: any) => {
      itemsTotal += item.qty;
    });

    setTotalItems(itemsTotal);

    // if (cart.length === 0) {
    //   cartBtn.current.style.opacity = '70%';
    //   cartBtn.current.style.pointerEvents = 'none';
    // }
  }, [cart, totalItems, setTotalItems]);

  return (
    <div>
      <Link to="/cart">
        <button ref={cartBtn} className="button" id="cart-button">
          <p>Till Kassan</p>
        </button>
      </Link>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    cart: state.shoppingCart,
  };
};

export default connect(mapStateToProps)(CartButton);
