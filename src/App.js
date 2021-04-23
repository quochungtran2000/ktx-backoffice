import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './assets/css/styles.css';
import Dashboard from './pages/Dashboard';
import Post from './pages/Post';
import Page from './pages/Page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/posts" component={Post} />
          <Route exact path="/pages" component={Page} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
