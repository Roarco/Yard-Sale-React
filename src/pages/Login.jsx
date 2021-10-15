/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import logo from '@logos/logo_yard_sale.svg';
import '../styles/Login.scss';

const Login = () => {
  return (
    <div className='Login'>
      <div className='Login__form-container'>
        <img className='Login__img' src={logo} alt='logo' />
        <form action='/' className='Login__form'>
          <label htmlFor='email' className='Login__email'>Email address</label>
          <input type='text' id='email' placeholder='camilayokoo@gmail.com' className='input input-email' />
          <label htmlFor='re-enter-password' className='Login__password'>Password</label>
          <input type='password' id='re-enter-password' placeholder='**************' className='input input-password' />
          <input type='submit' value='Log in' className='Login__button primary-button' />
          <a href='/'>Forgot my password</a>
        </form>
        <button className='second-button'>Sign up</button>
      </div>
    </div>

  );
};

export default Login;
