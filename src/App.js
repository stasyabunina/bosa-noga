import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import HomePage from './pages/HomePage';
import Page404 from './pages/Page404';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import CatalogPage from './pages/CatalogPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main className='container'>
        <div className='row'>
          <div className='col'>
            <Banner />
            <Routes>
              <Route path='/' exact element={<HomePage />} />
              <Route path={process.env.REACT_APP_ABOUT_PATH} element={<AboutPage />} />
              <Route path={process.env.REACT_APP_CONTACTS_PATH} element={<ContactsPage />} />
              <Route path={process.env.REACT_APP_CART_PATH} element={<CartPage />} />
              <Route path={process.env.REACT_APP_PRODUCT_PATH} element={<ProductPage />} />
              <Route path={process.env.REACT_APP_CATALOG_PATH} element={<CatalogPage />} />
              <Route path='*' element={< Page404 />} />
            </Routes>
          </div>
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
