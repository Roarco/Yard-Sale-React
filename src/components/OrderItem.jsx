/* eslint-disable import/no-unresolved */
import React from 'react';
import close from '@icons/icon_close.png';
import '../styles/OrderItem.scss';

const OrderItem = () => {
  return (
    <div className='OrderItem'>
      <figure>
        <img src='https://cdn.pixabay.com/photo/2014/05/02/23/53/shed-336505_960_720.jpg' alt='bike' />
        <p>Bike</p>
      </figure>
      <div>
        <p>$ 120,00</p>
        <img src={close} alt='close' />
      </div>
    </div>

  );
};

export default OrderItem;
