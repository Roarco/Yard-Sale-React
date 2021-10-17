/* eslint-disable import/no-unresolved */
import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MyOrder from '@container/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import cart from '@icons/icon_shopping_cart.svg';

const Header = () => {
  const [toogle, setToogle] = useState(false);
  const [toogleOrders, setToogleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToogle = () => {
    setToogle(!toogle);
  };
  return (
    <nav className='navbar'>
      <img src={menu} alt='menu' className='menu' />
      <div className='navbar-left'>
        <img src={logo} alt='logo' className='navbar-lef-logo' />
        <ul>
          <li><a href='/'>All</a></li>
          <li><a href='/'>Clothes</a></li>
          <li><a href='/'>Electronics</a></li>
          <li><a href='/'>Furniture</a></li>
          <li><a href='/'>Toys</a></li>
          <li><a href='/'>Others</a></li>
        </ul>
      </div>
      <div className='navbar-rigth'>
        <ul>
          <li onClick={handleToogle}>camilayakoo@gmail.com</li>
          <li className='navbar-shopping-cart' onClick={() => setToogleOrders(!toogleOrders)}>
            <img src={cart} alt='cart' />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      { toogle && <Menu />}
      { toogleOrders && <MyOrder />}
    </nav>

  );
};

export default Header;
