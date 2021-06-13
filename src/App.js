import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/css/styles.css";
import Dashboard from "./pages/Dashboard";
import Post from "./pages/Post";
import Page from "./pages/Page";
import PageDetail from "./pages/PageDetail";
import Category from "./pages/Category";
import Location from "./pages/Location";
import User from "./pages/User";
import Banner from "./pages/Banner";
import { useUser } from "./context/userContext";
import Login from "./pages/Login";
import CreateStaticPage from "./pages/CreateStaticPage";
import UpdateStaticPage from "./pages/UpdateStaticPage";

function App() {
  const { user } = useUser();
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {!user ? <Redirect to="/login" /> : <Dashboard />}
          </Route>
          <Route exact path="/posts">
            {/* <Post /> */}
            {!user ? <Redirect to="/login" /> : <Post />}
          </Route>
          <Route exact path="/pages"  >
            {/* <Page /> */}
            {!user ? <Redirect to="/login" /> : <Page />}
          </Route>
          <Route exact path="/category"  >
            {/* <Category /> */}
            {!user ? <Redirect to="/login" /> : <Category />}
          </Route>
          <Route exact path="/location"  >
            {/* <Location /> */}
            {!user ? <Redirect to="/login" /> : <Location />}
          </Route>
          <Route exact path="/banner"  >
            {/* <Banner /> */}
            {!user ? <Redirect to="/login" /> : <Banner />}
          </Route>
          <Route exact path="/user"  >
            {/* <User /> */}
            {!user ? <Redirect to="/login" /> : <User />}
          </Route>
          <Route exact path="/pages/create"  >
            {/* <Login /> */}
            <CreateStaticPage />
          </Route>
          <Route path="/pages/update/:type"  >
            {/* <Login /> */}
            <UpdateStaticPage />
          </Route>
          <Route exact path="/login"  >
            {/* <Login /> */}
            {user ? <Redirect to="/" /> : <Login />}
          </Route>
          
          <Route path="/pages/:id"  >
            <PageDetail />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
