import './productpage-style.css';
import { useState } from 'react';
import data from '../../assets/data.json';
import { useEffect } from 'react';

function ProductPage() {
  const [query, setQuery] = useState('');
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    //Code from https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
    const shuffled: any = [...data].sort(() => 0.5 - Math.random()).slice(10);
    setNewsItems(shuffled);
  }, []);

  return (
    <div className="product-page">
      <div className="product">PRODUCT PAGE</div>
    </div>
  );
}

export default ProductPage;
