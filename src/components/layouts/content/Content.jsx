import React from 'react';
import './Content.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import CustomSearch from '../../../pages/custom-search/CustomSearch';
import Assistant from '../../../pages/assistant/Assistant';
import NotFound from '../../../pages/not-found/NotFound';
import { EventEmitter } from '../../../utils/EventEmitter';
import ChatSystem from '../../../pages/chat-system/ChatSystem';

function Content() {
  const baseClassName = 'Content';
  EventEmitter.listen('opened-sidebar', (openedSidebar) => {
    const el = document.getElementById('content');
    if (el) {
      if (openedSidebar) {
        el.className = baseClassName + ' opened-sidebar';
      } else {
        el.className = baseClassName;
      }
    }
  });

  return (
    <main className={baseClassName} id='content'>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/inicio' />
        </Route>
        <Route path='/inicio'>
          <Assistant />
        </Route>
        <Route path='/busca'>
          <CustomSearch />
        </Route>
        <Route path='/chat'>
          <ChatSystem />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </main>
  );
}

export default Content;
