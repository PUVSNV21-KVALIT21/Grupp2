import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
import bag from '../../assets/graphics/bag.svg';
import SearchAndProduct from '../../Header/Components/SearchAndProduct/SearchAndProduct';

function MainPage() {
  return (
    <div className="outer-element">
      <div className="header">
        <Link to={'/'}>
          <div className="logo">logo goes here. Click to home page</div>
        </Link>
        <Link to={'/about'}>
          <button>About</button>
        </Link>
        <img id="photo" src={bag}></img>
        Cart. Click to unfold
      </div>
      <div className="menu-page">
        <div className="product-page">
          <SearchAndProduct />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
