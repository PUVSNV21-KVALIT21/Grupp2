import './product-component-style.css';

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
        <form id="category-link" method="get" action="/category">
          <input type="hidden" name="q" value={category} />
          <button>
            <h3>{category}</h3>
          </button>
        </form>
        <p>{description}</p>
      </div>
      <button className="product-button" onClick={AddItem}>
        KÖP
      </button>
    </div>
  );
}

export default Product;
