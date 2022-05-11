import './product-component-style.css';

function Product({
  title,
  price,
  category,
  description,
  AddItem,
}: {
  title: string;
  price: string;
  category: string;
  description: string;
  AddItem: any;
}) {
  return (
    <div className="product-wrapper">
      <div className="product">
        <h1>{title}</h1>
        <h2>{price}</h2>
        <h3>{category}</h3>
        <p>{description}</p>
      </div>
      <button className="product-button" onClick={AddItem}>
        KÖP
      </button>
    </div>
  );
}

export default Product;
