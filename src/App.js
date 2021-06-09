import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './assets/css/styles.css';
import Dashboard from './pages/Dashboard';
import Post from './pages/Post';
import Page from './pages/Page';
import PageDetail from './pages/PageDetail';
import Category from './pages/Category';
import Location from './pages/Location';
import User from './pages/User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/posts" component={Post} />
          <Route exact path="/pages" component={Page} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/location" component={Location} />
          <Route exact path="/user" component={User} />
          <Route path="/pages/:id" component={PageDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
