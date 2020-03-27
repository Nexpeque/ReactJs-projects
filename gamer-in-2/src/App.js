import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/games" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
