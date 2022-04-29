import { Link } from 'react-router-dom';
import flowertop from '../../assets/graphics/graphics-header.svg';
import CartButton from '../CartButton/CartButton';
import LogInButton from '../LogInButton/LogInButton';
import SearchBar from '../SearchBar/Searchbar';
import './style.css';

function HeaderComponent() {
  return (
    <div className="outer-element">
      <div className="inner-element">
        <Link to={'/'}>
          <img src={flowertop}></img>
        </Link>
        {/* <SearchBar /> */}
        <input id="searchbar" type="text" placeholder={'Search...'}></input>
        <LogInButton />
        <CartButton />
      </div>
    </div>
  );
}

export default HeaderComponent;
