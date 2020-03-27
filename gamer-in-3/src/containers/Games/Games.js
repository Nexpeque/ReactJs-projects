import React, { Component } from 'react'
import classes from './Games.css';
import GameList from '../../components/GameList/GameList';
import { connect } from 'react-redux';
import Loader from '../../components/Spinner/Spinner';
class Games extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selector: 0,
            games: this.props.games,
            searchQuery: ""
        }
    }

    UNSAFE_componentWillReceiveProps(nextState) {
        this.setState({
            ...this.state,
            games: nextState.games,
            gamesSearch: this.props.games[0]
        });
    }

    render() {
        return (
            <div>
                <div>
                    <div className={classes.margin}>
                        <div className={classes.back}></div>
                        <div className={classes.info}>
                            <h1 className={classes.infoTitle}>Gamer In</h1>
                            <h2 className={classes.infoSubTitle}>Stuff again</h2>
                        </div>
                    </div>
                    <div className={classes['top-panel']}>
                        <div className={classes['button-box']}>
                            {this.renderSelector()}
                        </div>
                        <div>
                            <input type="text" placeholder="Search query" className={classes.searchBar} onChange={this.handleSearch} />
                        </div>
                    </div>
                    {this.renderGameList()}
                </div>
            </div>
        )
    }
    handleSearch = (e) => {
        this.setState({
            searchQuery: e.target.value
        });
    }
    renderLoader = () => {
        return <Loader />
    }
    renderSelector = () => {
        const render = this.state.games.map((game, index) => {
            return (
                <button key={index} className={`${classes.button} ${index === this.state.selector ? (classes['button-selected']) : ("")}`} onClick={() => this.changeSelector(index)}>{game[0].platform}</button>
            )
        })
        return (
            <React.Fragment>
                {render}
            </React.Fragment>
        )
    }
    renderGameList = () => {
        var games
        if (this.state.searchQuery !== "" && this.state.games) {
            games = this.state.games[this.state.selector].filter(game => game.title.toUpperCase().includes(this.state.searchQuery.toUpperCase()));
        } else {
            games = this.state.games[this.state.selector];
        }
        return games ? (<GameList games={games} noTitle={true} />) : ("")
    }
    changeSelector = (index) => {
        this.setState({
            selector: index
        });
    }
}
const mapStateToProps = state => {
    return {
        games: state.gamesStore.gamesGroup,
        loadingGames: state.gamesStore.loadingGames
    }
}

export default connect(mapStateToProps)(Games)