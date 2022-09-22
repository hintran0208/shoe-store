import React from 'react';
import './styles.scss';

Header.propTypes = {};

function Header(props) {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <img src="https://thanh-quy-minh-luan-cap-stone-api-bc-33.vercel.app/img/image%203.png" alt="" />
        </div>
        <div className="login-register">
          <i className="fa-solid fa-cart-shopping">(1)</i>
          <a href="#">Login</a>
          <a href="https://thanh-quy-minh-luan-cap-stone-api-bc-33.vercel.app/page/register.html">Register</a>
        </div>
      </div>
      <div className="header-bottom">
        <nav>
          <a className="home" href="#">
            Home
          </a>
          <a href="#">Men</a>
          <a href="#">Woman</a>
          <a href="#">Kid</a>
          <a href="#">Sport</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
