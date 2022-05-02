import { Link } from 'react-router-dom';
import logo from '../../assets/graphics/Logo no background.svg';
import CartButton from '../Header-Buttons/CartButton/CartButton';
import LogInButton from '../Header-Buttons/LogInButton/LogInButton';
import SearchBar from '../SearchBar/Searchbar';
import { useState } from 'react';
import './HeaderStyle.css';

function HeaderComponent() {
  const [text, setText] = useState('');

  return (
    <div className="infinite-header">
      <div className="header-wrapper">
        <div className="header-logo">
          <Link to={'/'}>{/* <img src={logo}></img> */}</Link>
        </div>
        <div className="header-searchbar">
          <SearchBar query={text} onQueryChange={setText} />
        </div>
        <div className="header-login-button">
          <LogInButton />
        </div>
        <div className="header-cart-button">
          <CartButton />
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
