import './productpage-style.css';
import { useState } from 'react';
import productData from '../../assets/data.json';
import { useEffect } from 'react';
import Product from '../../Product-Component/product-component';
import { useDispatch } from 'react-redux';
import { store, ADD_ITEM } from '../../Redux/cartReducer';

function ProductPage() {
  // const [query, setQuery] = useState('');
  // const [newsItems, setNewsItems] = useState([]);

  // useEffect(() => {
  //   //Code from https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
  //   const shuffled: any = [...productData].sort(() => 0.5 - Math.random()).slice(10);
  //   setNewsItems(shuffled);
  // }, []);

  return (
    <div className="product-page">
      <div className="products">
        {productData.map((item) => {
          return (
            <Product
              key={item.id}
              title={item.title}
              price={item.price}
              category={item.category}
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
