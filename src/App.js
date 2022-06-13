import { Route, Routes, useParams, Link, Outlet } from 'react-router-dom';

import { HomePage } from './pages/homepage/homepage';
import { ShopPage } from './pages/shop/shop';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
