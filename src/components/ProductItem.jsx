/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import '../styles/ProductItem.scss';

import add from '@icons/bt_add_to_cart.svg';

const ProductItem = () => {
  const [cart, setCart] = useState('');

  const handleClick = () => {
    setCart('Hola Roberth');
  };
  return (
    <div className='ProductItem'>
      <img src='https://cdn.pixabay.com/photo/2014/05/02/23/53/shed-336505_960_720.jpg' alt='bike' />
      <div className='product-info'>
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure onClick={handleClick}>
          <img src={add} alt='add' />
        </figure>
        {cart}
      </div>
    </div>

  );
};

export default ProductItem;
