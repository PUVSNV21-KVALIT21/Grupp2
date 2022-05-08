import React, { Component } from 'react';
import { connect } from 'react-redux';
import './cart-summery.css';
class CartSummery extends Component {
  render() {
    return (
      <div className="cart-summery">
        <h2>Summa</h2>
        <div className="cart-collection">
          {/* Placeholders untill real code gets put in */}
          <li className="cart-item">
            <span>Summa varor</span>
            <span>750,00 kr</span>
          </li>
          <li className="cart-item">
            <label>
              <input type="checkbox" ref="shipping" />
              <span>Leverans?</span>
            </label>
          </li>
          <li className="cart-item">
            <span>Leverans</span>
            <span>39,00 kr</span>
          </li>
          <li className="cart-item reduced-price">
            <span>Avdrag</span>
            <span>-0 kr</span>
          </li>
          <li className="cart-item">
            <b>Totalt</b>
            <b>789,00 kr</b>
          </li>
        </div>
        <div className="checkout">
          <button className="pay-button">Betala</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    cart: state.shoppingCart,
    total: state.total,
  };
};

export default connect(mapStateToProps)(CartSummery);
