import React, { Component } from 'react';
import CardList from "../CardList/CardList";
import { Route } from "react-router-dom";
import axios from "../../AxiosInstance";
import classes from "./Home.css";
import FullGame from "../FullGame/FullGame";

export default class Home extends Component {
    state = {
        games: [],
        gamesLog: [],
        loading: false,
        error: false,
        search: " "
    }
    componentDidMount() {
        this.setState({
            loading: true
        });
        axios.get("/games")
            .then(response => {
                this.setState({
                    games: response.data,
                    gamesLog: response.data
                });
            })
            .catch(error => {
                this.setState({
                    error: true
                });
            })
            .then(() => {
                this.setState({
                    loading: false
                });
            });
    }
    openGame = (gameIndex) => {
        return this.state.games.filter(game => game.id === gameIndex)[0];
    }
    handleSearch = (e) => {
        var filter = e.target.value;
        this.setState({
            search: e.target.value
        });
        this.setState({
            games: [...this.state.gamesLog]
        });
        var newArray = this.state.games.filter((game) => {
            return game.title.toUpperCase().includes(filter.toUpperCase());
        });
        this.setState({
            games: newArray
        });
        if (filter === "") {
            this.setState({
                games: [...this.state.gamesLog]
            });
        }
    }
    render() {
        var content;
        if (this.state.loading) {
            content = <h1>Loading...</h1>
        } else if (this.state.error) {
            content = <h1>Error loading data, please try again</h1>
        } else {
            content = (
                <React.Fragment>
                    <h1 className={classes.title}>Pc Games</h1>
                    <CardList games={this.state.games.filter(game => game.platform === "PC")} />
                    <h1 className={classes.title}>Console Games</h1>
                    <CardList games={this.state.games.filter(game => game.platform === "Console")} />
                </React.Fragment>
            )
        }
        return (
            <React.Fragment>
                <Route path="/game/:gameIndex" exact render={() => {
                    return (<FullGame openGame={(gameIndex) => this.openGame(gameIndex)} />)
                }} />
                <div className={classes.home}>
                    <div className={classes["game-list"]}>
                        <input type="text" placeholder="Search" className={classes.searchBar} onChange={this.handleSearch} />
                        {content}
                    </div>
                </div >
            </React.Fragment>
        );
    }
}
