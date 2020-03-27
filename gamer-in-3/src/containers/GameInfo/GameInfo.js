import React, { Component } from 'react'
import classes from './GameInfo.css'
import { connect } from 'react-redux';
import Loader from '../../components/Spinner/Spinner';

class GameInfo extends Component {
    onFull = (game) => {

        return (
            <div>
                <div className={classes.margin}>
                    <div className={classes.back} style={{ backgroundImage: `url(${game.image})` }}>
                        <div className={classes.layer}></div>
                    </div>
                    <div className={classes.info}>
                        <h1 className={classes.infoTitle}>{game ? game.title : ""}</h1>
                    </div>
                </div >
                <div className={classes["text-align-center"]}>
                    <p className={classes.description}>{game.description}</p>
                </div>
                {this.showInfo()}
            </div>
        );
    }
    charge = () => {
        return <Loader />
    }
    renderStats = (game) => {
        return (
            <div>
                Tus estadisticas
                <div>
                    ROL : {game.Rol} <br />
                    username: {game.username}
                </div>
            </div>
        )
    }
    showInfo = () => {
        if (this.props.isUserLoggedIn && this.props.userLoggedIn) {
            const game = this.props.userLoggedIn.games.find(game => game.id + "" === this.props.match.params.gameIndex)
            console.log(game);
            return (
                <div>
                    {
                        game ?
                            (this.renderStats(game)) :
                            (<div>
                                <button>Quieres jugar?</button>
                            </div>
                            )
                    }


                </div>
            )
        } else {
            return (
                <div>Inicia sesion para agregar este juego a tu lista</div>
            )
        }
    }
    render() {
        const game = this.props.games.find(game => game.id + "" === this.props.match.params.gameIndex);
        return (
            <div>
                {game ? this.onFull(game) : this.charge()}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        games: state.gamesStore.games,
        userLoggedIn: state.authenticationStore.userLoggedIn,
    }
}

export default connect(mapStateToProps)(GameInfo);
