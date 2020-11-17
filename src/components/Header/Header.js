import { useContext } from 'react';
import { Link } from 'react-router-dom';

import cartContext from '../../contexts/cart';

import src from '../../logo.svg';

import './Header.css';

function Header() {
  const cart = useContext(cartContext);
  const total = cart.reduce(
    (acc, item) => item.price * item.quantity + acc,
    0
  );
  return (
    <div className="Header">
      <Link to="/">
        <img src={src} alt="logo" width="100" />
      </Link>
      <div>{total}</div>
    </div>
  );
}

export default Header;
