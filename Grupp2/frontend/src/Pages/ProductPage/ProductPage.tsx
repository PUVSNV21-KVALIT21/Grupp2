import './productpage-style.css';
import Product from '../../Product-Component/product-component';
import { store, ADD_ITEM } from '../../Redux/cartReducer';
import { Item } from '../../Models';
import Sort from '../../Header/Components/Sort/Sort';
import { useState } from 'react';

function ProductPage({ productsData: productsData }: { productsData: Item[] }) {
  const [sort, setSort] = useState('');

  if (sort === 'lowestPriceFirst') {
    productsData.sort((a: Item, b: Item) => a.price - b.price);
  }
  if (sort === 'highestPriceFirst') {
    productsData.sort((a: Item, b: Item) => b.price - a.price);
  }
  if (sort === 'AtoZ') {
    productsData.sort((a: Item, b: Item) => (a.name > b.name ? 1 : -1));
  }
  if (sort === 'ZtoA') {
    productsData.sort((a: Item, b: Item) => (b.name > a.name ? 1 : -1));
  } else {
    productsData;
  }

  return (
    <div className="product-page">
      <div className="sort">
        <Sort setSort={setSort} />
      </div>
      <div className="products">
        {productsData.map((item) => {
          return (
            <Product
              key={item.id}
              title={item.name}
              price={item.price}
              newsItem={item.isNewsProduct ? 'Nyhetsvara' : ''}
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
