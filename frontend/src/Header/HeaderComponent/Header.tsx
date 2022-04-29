import { Link } from 'react-router-dom';
import flowertop from '../../assets/graphics/graphics-header.svg';
import CartButton from '../CartButton/CartButton';
import LogInButton from '../LogInButton/LogInButton';
import './style.css';

function HeaderComponent() {
  return (
    <div className="outer-element">
      <div className="inner-element">
        <Link to={'/'}>
          <img src={flowertop}></img>
        </Link>
        <input id="searchbar" type="search" placeholder={'Search...'} />
        <LogInButton />
        <CartButton />
      </div>
    </div>
  );
}

export default HeaderComponent;
