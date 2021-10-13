/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
import React from 'react';
import '../styles/RecoveryPassword.scss';

const RecoveryPassword = () => {
  return (
    <div className='login'>
      <div className='login__form-container'>
        <img className='login__img' src='../assets/logos/logo_yard_sale.svg' alt='logo' />
        <h1 className='login__title'>Email has been sent!</h1>
        <p className='login__subtitle'>Plase check your inbox for istructions on how to reset the password</p>
        <div className='email'>
          <img src='../assets/icons/email.svg' alt='Email' className='email__img' />
        </div>
        <button className='email__button'>Login</button>
        <p className='resend'>
          <span>Didn't receive the email?</span>
          <a href='/'>Resend</a>
        </p>
      </div>
    </div>

  );
};

export default RecoveryPassword;
