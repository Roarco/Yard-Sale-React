/* eslint-disable import/no-unresolved */
import React from 'react';
import '@styles/Header.scss';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import cart from '@icons/icon_shopping_cart_notification.svg';

const Header = () => {
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
          <li>camilayakoo@gmail.com</li>
          <li className='navbar-shopping-cart'>
            <img src={cart} alt='cart' />
            <div>20</div>
          </li>
        </ul>
      </div>
    </nav>

  );
};

export default Header;
