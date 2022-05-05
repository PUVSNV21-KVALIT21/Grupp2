import { Link } from 'react-router-dom';
import logo from '../../../assets/graphics/Logonobackground.svg';
import './cart-header-style.css';

function CartHeader() {
  return (
    <div className="header-wrapper">
      <Link to={'/'}>
        <img src={logo} alt="hakims logo" className="header-logo"></img>
      </Link>
      <Link to="/" className="keep-shopping">
        <h1>Fortsätt shoppa</h1>
      </Link>
    </div>
  );
}

export default CartHeader;
