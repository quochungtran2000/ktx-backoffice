import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './assets/css/styles.css';
import Dashboard from './pages/Dashboard';
import Post from './pages/Post';
import Page from './pages/Page';
import PageDetail from './pages/PageDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/posts" component={Post} />
          <Route exact path="/pages" component={Page} />
          <Route path="/pages/:id" component={PageDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
