import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';

import * as actionCreators from './store/actions/';

import HomePage from './containers/HomePage/HomePage'
import LogIn from './containers/LogIn/LogIn';
import SignIn from './containers/SignIn/SignIn';
import NotFound from './containers/NotFound/NotFound';
import Profile from './containers/Profile/Profile';
import Layout from './containers/Layout/Layout';
import GameInfo from './containers/GameInfo/GameInfo';
import Games from './containers/Games/Games';
class App extends Component {

  componentDidMount() {
    this.props.onPersistAuthentication();
    this.props.onFetchGames();
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path='/' component={HomePage} exact />
            <Route path='/home' component={HomePage} exact />
            <Route path='/login' component={LogIn} />
            <Route path='/signin' component={SignIn} />
            <Route path='/profile' component={Profile} />
            <Route path='/games' component={Games} />
            <Route path='/game/:gameIndex' component={GameInfo} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPersistAuthentication: () => dispatch(actionCreators.persistAuthentication()),
    onFetchGames: () => dispatch(actionCreators.fetchGames())
  };
};

export default connect(null, mapDispatchToProps)(App);
