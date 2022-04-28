import { Route, Routes } from 'react-router-dom';
import About from './Header/About/About';
import MainPage from './Pages/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
