import React from 'react';
import classes from './FullGame.css';
import { withRouter } from 'react-router-dom';

var FullGame = (props) => {
    var openGame = props.openGame(props.match.params.gameIndex);
    console.log(openGame)
    return (
        <div className={classes["full-post"]}>
            <h2>{openGame.title}</h2>
            <img src={props.image} alt="Game" />
            <p>{openGame.description}</p>
        </div>
    )
}

export default withRouter(FullGame);