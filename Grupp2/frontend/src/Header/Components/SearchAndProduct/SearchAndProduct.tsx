import productData from '../../../assets/data.json';
import { useState, useEffect } from 'react';
import Sort from '../Sort/Sort';
import './style.css';

export default function SearchAndProduct() {
  const [query, setQuery] = useState('');
  const [count, setCount] = useState(0);
  const [newsItems, setNewsItems] = useState([]);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    if (count !== 0) {
      setCount(count - 1);
    }
  }

  useEffect(() => {
    //Code from https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
    const shuffled: any = [...productData].sort(() => 0.5 - Math.random()).slice(10);
    setNewsItems(shuffled);
    console.log(shuffled);
  }, []);

  return (
    <div>
      <input placeholder="Search..." onChange={(event) => setQuery(event.target.value)} />
      <Sort />
      {newsItems
        .filter((item: any) => {
          if (query === '') {
            return item;
          } else if (item.Title.toLowerCase().includes(query.toLowerCase())) {
            //returns filtered array
            return item;
          } else if (item.Description.toLowerCase().includes(query.toLowerCase())) {
            //returns filtered array
            return item;
          }
        })
        .map((item: any) => (
          <div className="product" key={item.id}>
            <ul>
              <li>
                <button onClick={increase}>Increase</button>
                <button onClick={decrease}>Decrease</button>
                <button>Köp</button>
                <label>{count}</label>
                <h1>Title: {item.Title}</h1>
                <h2>Discount Price: {item['Discount Price']}</h2>
                <h3>Full Price: {item['Full Price']}</h3>
                <p>Description: {item.Description}</p>
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
}
