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
        <h1 id="product-title">{title}</h1>
        <div className="product-price-wrapper">
          <h2 id="product-price">{price}</h2>
          <h2 id="product-price-after">:-</h2>
        </div>
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
