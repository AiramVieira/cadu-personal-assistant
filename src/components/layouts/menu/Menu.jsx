import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

function Menu() {
  return (
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
}

export default Menu;
