import React, { useState } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { MenuData } from './MenuData';
import * as FaIcons from 'react-icons/fa';

function Menu() {
  const baseClassName = 'nav__text nav__list';
  const activeClassName = baseClassName + ' selected-route';

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const checkActiveUrl = () => {
    const path = window.location.pathname;

    for (let i = 0; i < MenuData.length; i++) {
      if (MenuData[i].path === path) {
        MenuData[i].cName = activeClassName;
      }
    }
  };
  checkActiveUrl();

  const setBackground = () => {
    let list = document.querySelectorAll('.nav__list');
    for (let i = 0; i < list.length; i++) {
      list[i].onclick = () => {
        let j = 0;
        while (j < list.length) {
          list[j++].className = baseClassName;
        }
        list[i].className = activeClassName;
      };
    }
  };
  setBackground();

  return (
    <>
      <div className='navbar'>
        <Link to='#' className='nav__menu__bars'>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav__menu active' : 'nav__menu'}>
        <ul className='nav__menu__items'>
          {MenuData.map((item, index) => {
            return (
              <li key={index} className='nav__li' onClick={(_) => setBackground()}>
                <Link to={item.path} className={item.cName}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
    // <aside className='Menu'>
    //   <nav>
    //     <ul>
    //       {MenuData.map((item, index) => {
    //         return (
    //           <li key={index} className={item.cName}>
    //             <Link to={item.path}>{item.title}</Link>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </nav>
    // </aside>
  );
}

export default Menu;
