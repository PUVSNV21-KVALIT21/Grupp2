import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import './MainPage.css';
import HeaderComponent from '../../Header/HeaderComponent/Header';
import Products from '../../Products/Products';
import SearchBar from '../../Header/SearchBar/Searchbar';
import data from '../../assets/data.json';
import ProductPage from '../ProductPage/ProductPage';

function MainPage() {
  return (
    <div className="outer-element">
      <HeaderComponent />
      <div className="main-page">
        <ProductPage />
      </div>
    </div>
  );
}

export default MainPage;
