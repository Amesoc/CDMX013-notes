import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className='headerApp'>
      <h3>My notes</h3>
      <img className='logoHome'
        src={require('../img/logoNote2.png')}
        alt='close' />

      <div>

      </div>

    </header>
  )
}
export default Header;