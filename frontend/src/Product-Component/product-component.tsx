import './product-component-style.css';
import { Link } from 'react-router-dom';

function Product({
  title,
  price,
  category,
  description,
  AddItem,
}: {
  title: string;
  price: number;
  category: string;
  description: string;
  AddItem: () => void;
}) {
  return (
    <div className="product-wrapper">
      <div className="product">
        <h1>{title}</h1>
        <h2>{price} kr</h2>
        <Link id="category-link" to={'/' + category}>
          <h3>{category}</h3>
        </Link>
        <p>{description}</p>
      </div>
      <button className="product-button" onClick={AddItem}>
        KÖP
      </button>
    </div>
  );
}

export default Product;
