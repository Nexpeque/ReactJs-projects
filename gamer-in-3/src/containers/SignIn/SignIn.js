import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './SignIn.css';

import Spinner from '../../components/Spinner/Spinner';

import * as actionCreators from '../../store/actions/';

class SignIn extends Component {
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
                    <div className={classes["sign-in__form"]}>
                        <form onSubmit={this.submitSignInForm}>
                            <h1 style={{ textAlign: 'center' }}>Sign in</h1>
                            {this.props.error ? (<p>Error, please try again</p>) : ("")}
                            <div>
                                <p className={classes.text}>Username:</p>
                                <input type="email"
                                    className={classes.input}
                                    value={this.state.userName}
                                    onChange={(event) => { this.updateSignInInfo(event, 'userName') }}
                                />
                                <p className={classes.text}>Password:</p>
                                <input type="password"
                                    className={classes.input}
                                    value={this.state.password}
                                    onChange={(event) => { this.updateSignInInfo(event, 'password') }}
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
        let button = <button onClick={this.submitSignInForm}>Submit</button>;

        if (this.props.loadingAuth) {
            button = <Spinner />;
        }

        return button;
    }

    updateSignInInfo = (event, type) => {
        var updatedLoginInfo = {
            ...this.state
        }

        updatedLoginInfo[type] = event.target.value;

        this.setState({
            userName: updatedLoginInfo.userName,
            password: updatedLoginInfo.password
        });
    }

    submitSignInForm = (e) => {
        e.preventDefault();
        const userData = {
            email: this.state.userName,
            password: this.state.password
        }

        this.props.onUserSignIn(userData, () => {
            this.props.history.push('/');
        });
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        loadingAuth: state.authenticationStore.loadingAuth,
        error: state.authenticationStore.signInError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserSignIn: (authData, onSuccessCallback) => dispatch(
            actionCreators.signIn(authData, onSuccessCallback)
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);