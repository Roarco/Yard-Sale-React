import React from 'react';
import '../styles/Header.scss';

const Header = () => {
  return (
    <nav className='navbar'>
      <img src='../assets/icons/icon_menu.svg' alt='menu' className='menu' />
      <div className='navbar-left'>
        <img src='../assets/logos/logo_yard_sale.svg' alt='logo' className='logo' />
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
            <img src='../assets/icons/icon_shopping_cart_notification.svg' alt='cart' />
            <div>20</div>
          </li>
        </ul>
      </div>
    </nav>

  );
};

export default Header;
