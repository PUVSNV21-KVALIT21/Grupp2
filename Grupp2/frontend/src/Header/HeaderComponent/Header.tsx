import { Link } from 'react-router-dom';
import logo from '../../assets/graphics/Logonobackground.svg';
import CartButton from '../Header-Buttons/CartButton/CartButton';
import LogInButton from '../Header-Buttons/LogInButton/LogInButton';
import SearchBar from '../SearchBar/Searchbar';
import { useState } from 'react';
import './HeaderStyle.css';

function HeaderComponent() {
  const [text, setText] = useState('');

  return (
    <div className="header-wrapper">
      <Link to={'/'}>
        <img src={logo} alt="hakims logo" className="header-logo"></img>
      </Link>
      <div className="header-searchbar">
        <SearchBar query={text} onQueryChange={setText} />
      </div>
      <div className="header-buttons">
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
