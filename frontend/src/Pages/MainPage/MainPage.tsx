import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import './MainPage-style.css';
import HeaderComponent from '../../Header/HeaderComponent/Header';
import Products from '../../Products/Products';
import SearchBar from '../../Header/SearchBar/Searchbar';
import data from '../../assets/data.json';
import ProductPage from '../ProductPage/ProductPage';
import SearchPage from './SearchPage';
import Categories from '../Categories/Categories';

function MainPage() {
  return (
    <div className="main-page-wrapper">
      <div className="header">
        <HeaderComponent />
      </div>
      <div className="main-page">
        <div className="categories">
          <Categories />
        </div>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          {/* <Route path="/search" element={<SearchPage />} /> */}
        </Routes>
        mainpage
      </div>
    </div>
  );
}

export default MainPage;
