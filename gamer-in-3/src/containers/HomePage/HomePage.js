import React, { Component } from 'react'
import GameList from '../../components/GameList/GameList';
import classes from './HomePage.css';
import { connect } from 'react-redux';

class HomePage extends Component {
    state = {
        games: []
    }
    render() {
        return (
            <div>
                <div className={classes.margin}>
                    <div className={classes.back}></div>
                    <div className={classes.info}>
                        <h1 className={classes.infoTitle}>Gamer In</h1>
                        <h2 className={classes.infoSubTitle}>Stuff again</h2>
                    </div>
                </div>
                <div className={classes.wrapper}>
                    <div>
                        <h1 className={classes.featured}>Featured</h1>
                    </div>
                    {this.props.games.map((gameType, index) => {
                        return <GameList games={gameType.slice(0, 4)} title={gameType[0].platform} key={index} />
                    })}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        games: state.gamesStore.gamesGroup,
        loadingGames: state.gamesStore.loadingGames
    }
}

export default connect(mapStateToProps)(HomePage);
