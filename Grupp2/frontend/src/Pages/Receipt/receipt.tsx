import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Product from './ProductComponent/product-component';
import { Item, ShoppingCart } from '../../Models';
import React, { useEffect, useState } from 'react';
import { RESET, store } from '../../Redux/cartReducer';
import logo from '../../assets/graphics/Logoredbackground.svg';
import './receipt-style.css';

/* eslint-disable @typescript-eslint/no-explicit-any */
function Receipt({ cart }: { cart: [] }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [OCR, setOCR] = useState(0);
  const ref: any = React.createRef();

  let price = 0;
  useEffect(() => {
    cart.forEach((item: Item) => {
      price += item.qty * item.price;
      setTotalPrice(price);
      randomOCR();
    });
  }, []);

  function randomOCR() {
    const random = Math.floor(Math.random() * (990000 - 100000) + 100000);
    console.log(random);
    setOCR(random);
  }

  return (
    <div className="receipt-wrapper">
      <div className="receipt-header">
        <h1>Tack för din beställning!</h1>
        <button id="download-receipt-btn">Ladda ner faktura</button>
        <Link id="link-close" to={'/'}>
          <button id="ctn-shopping-btn" onClick={() => store.dispatch(RESET())}>
            Close
          </button>
        </Link>
      </div>
      <div className="receipt" ref={ref}>
        <img src={logo} alt="logo" id="logo"></img>
        <h2>Faktura</h2>
        <h3>
          <div className="adress-info">
            <h3>Hakims Livs, Stora Gatan 1</h3>
            <h3>111 22, Staden</h3>
          </div>
        </h3>
        <div className="headers">
          <h3>QTY</h3>
          <h3>Product</h3>
          <h3>Unit Price</h3>
        </div>
        {cart.map((item: Item) => {
          return <Product key={item.id} qty={item.qty} title={item.title} price={item.price} />;
        })}

        <div className="payment">
          <h4 id="total-price-header">Summa: </h4>
          <h4 id="total-price">{Math.round(totalPrice * 100) / 100} kr</h4>
          <br />
          <h4 id="ocr-header">Bankgiro: </h4>
          <h4 id="ocr-number">1234-567</h4>
          <br />
          <h4 id="ocr-header">OCR: </h4>
          <h4 id="ocr-number">{OCR}</h4>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: ShoppingCart) => {
  return {
    cart: state.shoppingCart,
  };
};
/* eslint-disable @typescript-eslint/no-explicit-any */

export default connect(mapStateToProps)(Receipt);
