import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';

import * as actionCreators from './store/actions/';

import HomePage from './containers/HomePage/HomePage'
import LogIn from './containers/LogIn/LogIn';
import SignIn from './containers/SignIn/SignIn';
import NotFound from './containers/NotFound/NotFound';

class App extends Component {

  componentDidMount() {
    this.props.onPersistAuthentication();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/login' component={LogIn} />
          <Route path='/signin' component={SignIn} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPersistAuthentication: () => dispatch(actionCreators.persistAuthentication())
  };
};

export default connect(null, mapDispatchToProps)(App);
