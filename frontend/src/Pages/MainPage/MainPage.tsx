import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
import bag from '../../assets/graphics/bag.svg';
import SearchAndProduct from '../../Header/Components/SearchAndProduct/SearchAndProduct';
import HeaderComponent from '../../Header/HeaderComponent/Header';

function MainPage() {
  return (
    <div className="outer-element">
      <HeaderComponent />
    </div>
  );
}

export default MainPage;
