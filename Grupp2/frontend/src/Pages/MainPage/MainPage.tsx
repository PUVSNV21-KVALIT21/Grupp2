import './MainPage-style.css';
import HeaderComponent from '../../Header/HeaderComponent/Header';
import ProductPage from '../ProductPage/ProductPage';
import Categories from '../Categories/Categories';
import Footer from '../Footer/footer';
import { Category, Item, SearchParam } from '../../Models';
import { getCategoryProducts, getNewsArticles, getSearchProducts } from '../../Helper/ApiHelper';
import React from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';

async function loadProducts(controller?: string, query?: string, sort?: SearchParam) {
  let itemResp: Item[] = [];
  let resp: Item[] = await getNewsArticles();
  if (controller == 'category') {
    resp = await getCategoryProducts(query);
  } else if (controller == 'products') {
    resp = await getSearchProducts(query);
  }
  itemResp = resp;

  return itemResp;
}
function MainPage() {
  const location = useLocation();
  const [products, setProducts] = React.useState<Item[]>([]);
  const [category, setCategory] = React.useState<Category>({ id: '', name: 'news', imageLink: '' });
  React.useEffect(() => {
    const url = location.pathname.toLowerCase().trim();
    let controller = '';
    let query = '';
    if (location.pathname.startsWith('/search')) {
      controller = 'products';
      query = location.search.split('?q=')[1];
    } else if (location.pathname.startsWith('/category'))
    {
      const newUrl = url.split('/');
      controller = newUrl[1];
      query = newUrl[2];
    } 
    console.log(url);
    console.log(controller);
    console.log(query);
    setProducts([]);
    loadProducts(controller, query).then((newItems) => {
      setProducts(newItems);
    });
    console.log(location.pathname);
  }, [location]);

  return (
    <div className="main-page-wrapper">
      <div className="header">
        <HeaderComponent />
      </div>
      <div className="main-page">
        <div className="categories">
          <Categories />
        </div>
        <h2>{category.name}</h2>
        <Routes>
          <Route path="/" element={<ProductPage productsData={products} />} />
        </Routes>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainPage;
