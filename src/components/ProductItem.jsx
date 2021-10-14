import React from 'react';
import '../styles/ProductItem.scss';

const ProductItem = () => {
  return (
    <div className='ProductItem'>
      <img src='https://cdn.pixabay.com/photo/2014/05/02/23/53/shed-336505_960_720.jpg' alt='bike' />
      <div className='product-info'>
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src='../assets/icons/bt_add_to_cart.svg' alt='add' />
        </figure>
      </div>
    </div>

  );
};

export default ProductItem;
