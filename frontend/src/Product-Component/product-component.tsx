import './product-component-style.css';

function Product({
  title,
  price,
  category,
  description,
}: {
  title: string;
  price: string;
  category: string;
  description: string;
}) {
  return (
    <div className="product-wrapper">
      <div className="product">
        <h1>{title}</h1>
        <h2>{price}</h2>
        <h3>{category}</h3>
        <p>{description}</p>
        <button className="product-button">KÖP</button>
      </div>
    </div>
  );
}

export default Product;
