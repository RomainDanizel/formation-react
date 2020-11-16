import { Link } from 'react-router-dom';

import src from '../../logo.svg';

import './Header.css';

function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <img src={src} alt="logo" width="100" />
      </Link>
    </div>
  );
}

export default Header;
