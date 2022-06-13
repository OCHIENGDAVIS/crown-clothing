import { Route, Routes, useParams, Link, Outlet } from 'react-router-dom';

import { HomePage } from './pages/homepage/homepage';
import { ShopPage } from './pages/shop/shop';
import Header from './components/header/header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
