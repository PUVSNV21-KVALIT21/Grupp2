import React, { useState, useEffect } from 'react';
import ItemSummary from './Item-Summary-Component/item-summary-component';
import { connect } from 'react-redux';
import './shopping-cart-page-style.css';
import {
  store,
  ADD_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_FROM_CART,
} from '../../../../../Redux/cartReducer';
import { Item } from '../../../../../Models';

function ShoppingCartPage({ cart }: { cart: [] }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    cart.forEach((item: Item) => {
      setTotalPrice(item.qty * item.price);
    });
  }, [cart]);

  return (
    <div>
      <h2>Dina Varor</h2>
      <div className="items-in-shopping-cart">
        {cart.map((item: Item) => {
          return (
            <ItemSummary
              key={item.id}
              title={item.title}
              totalPrice={totalPrice}
              price={item.price}
              IncreaseQuantity={() => store.dispatch(ADD_QUANTITY(item))}
              quantity={item.qty}
              DecreaseQuantity={() =>
                store.dispatch(item.qty > 1 ? DECREASE_QUANTITY(item) : REMOVE_FROM_CART(item))
              }
              RemoveFromCart={() => store.dispatch(REMOVE_FROM_CART(item))}
            />
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    cart: state.shoppingCart,
  };
};

export default connect(mapStateToProps)(ShoppingCartPage);
