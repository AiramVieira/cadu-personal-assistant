import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = (props) => (
  <aside className='Menu'>
    <nav>
      <ul>
        <li>
          <Link to='/inicio'>Home</Link>
        </li>
        <li>
          <Link to='/busca'>Search</Link>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Menu;
