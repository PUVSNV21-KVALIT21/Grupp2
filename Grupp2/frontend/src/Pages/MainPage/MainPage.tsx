import './MainPage-style.css';
import HeaderComponent from '../../Header/HeaderComponent/Header';
import ProductPage from '../ProductPage/ProductPage';
import Categories from '../Categories/Categories';

function MainPage() {
  return (
    <div className="main-page-wrapper">
      <div className="header">
        <HeaderComponent />
      </div>
      <div className="main-page">
        <div className="categories">
          <Categories />
        </div>
        <ProductPage />
      </div>
    </div>
  );
}

export default MainPage;
