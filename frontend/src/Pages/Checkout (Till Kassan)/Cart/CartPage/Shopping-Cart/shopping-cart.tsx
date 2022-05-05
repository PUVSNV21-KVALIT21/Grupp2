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

function ShoppingCartPage({ cart }: { cart: [] }) {
  const [totalPrice, setTotalPrice] = useState(0);

  // useEffect(() => {}, [cart]);

  return (
    <div className="shopping-cart-page">
      <h1>Dina Varor</h1>
      <div className="items-in-shopping-cart">
        item in shopping cart
        {cart.map((item: any) => {
          return (
            <ItemSummary
              key={item.id}
              title={item.title}
              price={item.price}
              IncreaseQuantity={() => store.dispatch(ADD_QUANTITY(item))}
              quantity={item.qty}
              DecreaseQuantity={() => store.dispatch(DECREASE_QUANTITY(item))}
              RemoveFromCart={() => store.dispatch(REMOVE_FROM_CART(item))}
            />
          );
        })}
        ;
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
