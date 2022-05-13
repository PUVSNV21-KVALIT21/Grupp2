import './MainPage-style.css';
import HeaderComponent from '../../Header/HeaderComponent/Header';
import ProductPage from '../ProductPage/ProductPage';
import Categories from '../Categories/Categories';
import Footer from '../Footer/footer';

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
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainPage;
