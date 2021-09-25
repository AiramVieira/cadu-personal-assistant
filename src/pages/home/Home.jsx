import React from 'react';
import Menu from '../../components/layouts/menu/Menu';
import Content from '../../components/layouts/content/Content';
import { BrowserRouter as Router } from 'react-router-dom'
import './Home.css';

function Home() {
  return (
    <div className='Home'>
      <Router>
        <Menu/>
        <Content/>
      </Router>
    </div>
  );
}

export default Home;
