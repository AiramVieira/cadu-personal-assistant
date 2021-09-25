import React from 'react';
import './Content.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import CustomSearch from '../../../pages/customSearch/CustomSearch';
import Assistant from '../../../pages/assistant/Assistant';
import NotFound from '../../../pages/not-found/NotFound';

const Content = (props) => (
  <main className='Content'>
    <Switch>
      <Route exact path='/'>
        <Redirect to='/busca' />
      </Route>
      <Route path='/inicio'>
        <Assistant />
      </Route>
      <Route path='/busca'>
        <CustomSearch />
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  </main>
);

export default Content;
