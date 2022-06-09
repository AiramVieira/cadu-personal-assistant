import React, { useEffect, useState } from 'react';
import './Menu.css';
import { Link, useLocation } from 'react-router-dom';
import { MenuData } from './MenuData';
import * as FaIcons from 'react-icons/fa';
import { EventEmitter } from '../../../utils/EventEmitter';

function Menu() {
  const baseClassName = 'nav__text nav__list ';
  const activeClassName = baseClassName + ' selected-route';

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    EventEmitter.emit('opened-sidebar', !sidebar);
    setSidebar(!sidebar);
  };

  const checkActiveUrl = () => {
    const path = window.location.pathname;

    for (let i = 0; i < MenuData.length; i++) {
      if (MenuData[i].path === path) {
        MenuData[i].cName = activeClassName;
      } else {
        MenuData[i].cName = baseClassName;
      }
    }
  };
  checkActiveUrl();
  
  const location = useLocation();
  useEffect(() => {
    checkActiveUrl()
  }, [location]);

  return (
    <>
      <div className='navbar'>
        <Link to='#' className='nav__menu__bars'>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav__menu active' : 'nav__menu'} id='sidebar'>
        <ul className='nav__menu__items'>
          {MenuData.map((item, index) => {
            return (
              <li key={index} className='nav__li'>
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
  );
}

export default Menu;
