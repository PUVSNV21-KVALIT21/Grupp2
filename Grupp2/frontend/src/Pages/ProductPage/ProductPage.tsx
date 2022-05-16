import './productpage-style.css';
import Product from '../../Product-Component/product-component';
import { store, ADD_ITEM } from '../../Redux/cartReducer';
import { CartItem, Item, SearchParam } from '../../Models';

function ProductPage({ productsData: productsData }: { productsData: Item[] }) {
  return (
    <div className="product-page">
      <div className="products">
        {productsData.map((item) => {
          return (
            <Product
              key={item.id}
              title={item.name}
              price={item.price}
              category={item.category != null ? item.category.name : 'okänt'}
              description={item.description}
              AddItem={() => store.dispatch(ADD_ITEM(item))}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductPage;
