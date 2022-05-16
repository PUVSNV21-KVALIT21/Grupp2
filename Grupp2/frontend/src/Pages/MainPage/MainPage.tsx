import './MainPage-style.css';
import HeaderComponent from '../../Header/HeaderComponent/Header';
import ProductPage from '../ProductPage/ProductPage';
import Categories from '../Categories/Categories';
import Footer from '../Footer/footer';
import { Category, Item, SearchParam } from '../../Models';
import { getProducts } from '../../Helper/ApiHelper';
import React from 'react';

async function loadProducts(search?: string, sort?: SearchParam) {
  let itemResp: Item[] = [];
  const resp = await getProducts(search, sort);
  itemResp = resp;

  return itemResp;
}
function MainPage() {
  const [products, setProducts] = React.useState<Item[]>([]);
  const [category, setCategory] = React.useState<Category>({ id: '', name: 'news', imageLink: '' });
  React.useEffect(() => {
    setProducts([]);
    loadProducts(category.name).then((newItems) => {
      setProducts(newItems);
    });
  }, []);

  console.log(products);
  return (
    <div className="main-page-wrapper">
      <div className="header">
        <HeaderComponent />
      </div>
      <div className="main-page">
        <div className="categories">
          <Categories />
        </div>
        <ProductPage productsData={products} />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainPage;
