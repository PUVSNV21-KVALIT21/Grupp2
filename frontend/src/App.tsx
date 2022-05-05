import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import './App.css';
import Cart from './Pages/Cart/CartPage/Cart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
