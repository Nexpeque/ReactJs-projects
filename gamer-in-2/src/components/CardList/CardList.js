import React, { Component } from "react";
import Card from "../Card/Card"
import "./CardList.css"

export default class CardList extends Component {
    render() {
        var cards = this.props.games.map((game, index) => {
            return (
                <React.Fragment key={index}>
                    <Card image={game.image} title={game.title} text={game.text} index={game.id} />
                </React.Fragment>
            );
        });
        return (
            <div>
                {cards}
            </div>
        );
    }
}
