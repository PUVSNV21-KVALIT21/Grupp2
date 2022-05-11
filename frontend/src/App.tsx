import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import './App.css';
import CheckoutPage from './Pages/Checkout (Till Kassan)/Cart/CartPage/Checkout-Page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
