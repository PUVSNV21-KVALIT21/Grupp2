import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import './App.css';
import CheckoutPage from './Pages/Checkout (Till Kassan)/Cart/CartPage/Checkout-Page';
import Receipt from './Pages/Receipt/receipt';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:search" element={<MainPage />} />
        <Route path="/:category" element={<MainPage />} />
        <Route path="/cart" element={<CheckoutPage />} />
        <Route path="/receipt" element={<Receipt />} />
      </Routes>
    </div>
  );
}

export default App;
