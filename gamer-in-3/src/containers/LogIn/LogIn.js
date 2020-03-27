import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './LogIn.css';

import Spinner from '../../components/Spinner/Spinner';

import * as actionCreators from '../../store/actions/';

class LogIn extends Component {
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        userName: '',
        password: ''
    }

    componentDidUpdate() {
        if (this.state.isUserLoggedIn) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextState) {
        this.setState({
            isUserLoggedIn: nextState.isUserLoggedIn
        });
    }

    render() {
        return (
            <div>
                <div className={classes.margin}>
                    <div className={classes.back}></div>
                    <div className={classes["login__form"]}>
                        <form onSubmit={this.submitLoginForm}>
                            <h1 style={{ textAlign: 'center' }}>Log in</h1>
                            {this.props.error ? (<p>Error, please try again</p>) : ("")}
                            <div>
                                <p className={classes.text}>Username:</p>
                                <input type="email"
                                    className={classes.input}
                                    value={this.state.userName}
                                    onChange={(event) => { this.updateLoginInfo(event, 'userName') }}
                                />
                                <p className={classes.text}>Password:</p>
                                <input type="password"
                                    className={classes.input}
                                    value={this.state.password}
                                    onChange={(event) => { this.updateLoginInfo(event, 'password') }}
                                />
                                <br />
                                {this.renderButton()}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    renderButton() {
        let button = <button>Submit</button>;

        if (this.props.loadingAuth) {
            button = <Spinner />;
        }

        return button;
    }

    updateLoginInfo = (event, type) => {
        var updatedLoginInfo = {
            ...this.state
        }

        updatedLoginInfo[type] = event.target.value;

        this.setState({
            userName: updatedLoginInfo.userName,
            password: updatedLoginInfo.password
        });
    }

    submitLoginForm = (e) => {
        e.preventDefault();
        const userData = {
            email: this.state.userName,
            password: this.state.password
        }

        this.props.onUserLogin(userData, () => {
            this.props.history.push('/');
        });
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        loadingAuth: state.authenticationStore.loadingAuth,
        error: state.authenticationStore.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserLogin: (authData, onSuccessCallback) => dispatch(
            actionCreators.logIn(authData, onSuccessCallback)
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);