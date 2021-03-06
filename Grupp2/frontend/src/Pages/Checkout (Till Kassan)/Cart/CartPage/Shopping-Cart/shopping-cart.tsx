import ItemSummary from './Item-Summary-Component/item-summary-component';
import { connect } from 'react-redux';
import './shopping-cart-page-style.css';
import {
  store,
  ADD_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_FROM_CART,
} from '../../../../../Redux/cartReducer';
import { CartItem } from '../../../../../Models';

function ShoppingCartPage({ cart }: { cart: [] }) {
  return (
    <div>
      <h2>Dina Varor</h2>
      <div className="items-in-shopping-cart">
        {cart.map((item: CartItem) => {
          return (
            <ItemSummary
              key={item.id}
              title={item.name}
              price={item.price}
              totalPrice={item.qty * item.price}
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

/* eslint-disable @typescript-eslint/no-explicit-any */
const mapStateToProps = (state: any) => {
  return {
    cart: state.shoppingCart,
  };
};
/* eslint-disable @typescript-eslint/no-explicit-any */

export default connect(mapStateToProps)(ShoppingCartPage);
