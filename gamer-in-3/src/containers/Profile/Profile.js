import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Profile.css';

import * as actionCreators from '../../store/actions/';

import Button from '../../components/Button/Button';
import Spinner from '../../components/Spinner/Spinner';
import GameList from '../../components/GameList/GameList';

class Profile extends Component {
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        posts: this.props.posts,
        user: this.props.userLoggedIn
    }

    componentWillReceiveProps(nextState) {
        this.setState({
            user: nextState.user,
            isUserLoggedIn: nextState.isUserLoggedIn
        });
    }


    onUserLoggedIn() {
        if (this.props.userLoggedIn) {
            let gameList = this.props.games.filter(game => {
                return this.props.userLoggedIn.games.find(userGame => game.id === userGame.id)
            });
            return (
                <div>
                    <div className={classes.profback}>
                        <img className={classes.profilepic} src={this.props.userLoggedIn.profilePic} alt={"profile pic"} />
                        <p>Logged in as: {this.props.userLoggedIn.email}</p>
                        <GameList games={gameList} noTitle={true} />
                    </div>
                </div>
            );
        } else {
            return <Spinner />
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className={classes.back}></div>
                <div className={classes.profback}>
                    <h1>
                        Welcome: {this.props.userLoggedIn.username} <br />
                    </h1>
                </div>
                {this.state.isUserLoggedIn ? this.onUserLoggedIn() : this.onUserLoggedOut()}
            </React.Fragment>
        );
    }
    onUserLoggedOut() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Welcome to this awesome app!</h1>
                <h2>If you already have an account please Log in</h2>
                <h2>Otherwise please sign up.</h2>
                <div className="home-page__button-section">
                    <Button label="Log in" linkTo='./login' type='primary' />
                    <Button label="Sign in" linkTo='./signin' type='secondary' />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        userLoggedIn: state.authenticationStore.userLoggedIn,
        loadingPosts: state.postsStore.loadingPosts,
        games: state.gamesStore.games
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSavePost: (post) => dispatch(actionCreators.savePost(post)),
        onFetchPosts: () => dispatch(actionCreators.fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);