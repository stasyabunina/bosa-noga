import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../img/header-logo.png';
import CartIcon from './CartIcon';
import { updateSearchValue } from '../../features/catalog/catalogSlice';
import { loadCart } from '../../features/cart/cartSlice';
import config from '../../app/config';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [isSearchOpened, setIsSearchOpened] = useState(false);
  const { search } = useSelector(state => state.catalog);
  const { items } = useSelector((state) => state.cart);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      items !== cart.items && dispatch(loadCart(cart));
    }
  }, []); 

  const onSubmit = (e) => {
    e.preventDefault();

    if (search.trim() === '') {
      setIsSearchOpened(!isSearchOpened);
    } else {
      navigate(config.catalogUrl);
      setIsSearchOpened(!isSearchOpened);
      return;
    }

    if (isSearchOpened) {
      inputRef.current.focus();
    }
  }

  return (
    <header className='container'>
      <div className='row'>
        <div className='col'>
          <nav className='navbar navbar-expand-sm navbar-light bg-light'>
            <Link className='navbar-brand' to='/'>
              <img src={logo} alt='Bosa Noga' />
            </Link>
            <div className='collapse navbar-collapse' id='navbarMain'>
              <ul className='navbar-nav me-auto'>
                <li className='nav-item active'>
                  <NavLink className='nav-link' to='/'>Главная</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to={config.catalogUrl}>Каталог</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to={config.aboutUrl}>О магазине</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to={config.contactsUrl}>Контакты</NavLink>
                </li>
              </ul>
              <div>
                <div className='header-controls-pics'>
                  <button type='button' data-id='search-expander' className='border-0 bg-transparent header-controls-pic header-controls-search' onClick={onSubmit}></button>
                  <CartIcon />
                </div>
                <form data-id='search-form' className={`header-controls-search-form form-inline${isSearchOpened === false ? ' invisible' : ''}`} onSubmit={onSubmit}>
                  <input ref={inputRef} className='form-control' placeholder='Поиск' value={search} onChange={(e) => dispatch(updateSearchValue({ value: e.target.value }))} />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;