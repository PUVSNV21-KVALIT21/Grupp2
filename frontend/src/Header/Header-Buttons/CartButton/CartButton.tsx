import '../button-style.css';
import { Link } from 'react-router-dom';

function CartButton() {
  return (
    <div>
      <Link to={'/'}>
        <button className="button" id="cart-button">
          <p>Till Kassan</p>
        </button>
      </Link>
    </div>
  );
}

export default CartButton;
