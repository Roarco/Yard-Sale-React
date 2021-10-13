/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import '../styles/Login.scss';

const Login = () => {
  return (
    <div className='login'>
      <div className='login__form-container'>
        <img className='login__img' src='../assets/logos/logo_yard_sale.svg' alt='logo' />
        <h1 className='login__title'>Create a new password</h1>
        <p className='login__subtitle'>Enter a new password for your account</p>
        <form action='/' className='login__form'>
          <label htmlFor='password' className='login__password'>Password</label>
          <input type='password' id='password' placeholder='**************' className='input input-password' />
          <label htmlFor='re-enter-password' className='login__password login__re-enter-password'>Re-enter password</label>
          <input type='password' id='re-enter-password' placeholder='**************' className='input input-re-enter password' />
          <input type='submit' value='Confirm' className='login__button primary-button' />
        </form>
      </div>
    </div>

  );
};

export default Login;
