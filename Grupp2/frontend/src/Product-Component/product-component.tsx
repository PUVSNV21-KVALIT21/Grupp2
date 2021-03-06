import './product-component-style.css';

function Product({
  title,
  price,
  category,
  newsItem,
  description,
  AddItem,
}: {
  title: string;
  price: number;
  category: string;
  newsItem: string;
  description: string;
  AddItem: () => void;
}) {
  return (
    <div className="product-wrapper">
      <div className="product hovertext" data-hover={description}>
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
          <h4 id="news-item">{newsItem}</h4>
        </form>
        <p>{description.length < 30 ? description : description.substring(0, 27) + '...'}</p>
      </div>
      <button className="product-button" onClick={AddItem}>
        KÖP
      </button>
    </div>
  );
}

export default Product;
