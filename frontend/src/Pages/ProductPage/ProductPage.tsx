import './productpage-style.css';
import { useState } from 'react';
import productData from '../../assets/data.json';
import { useEffect } from 'react';
import Product from '../../Product-Component/product-component';

function ProductPage() {
  const [query, setQuery] = useState('');
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    //Code from https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
    const shuffled: any = [...productData].sort(() => 0.5 - Math.random()).slice(10);
    setNewsItems(shuffled);
  }, []);

  return (
    <div className="product-page">
      <div className="products">
        <Product
          title={productData[1].title}
          price={productData[1].price}
          category={productData[1].category}
          description={productData[1].description}
        />
      </div>
    </div>
  );
}

export default ProductPage;
