import React, { Component } from "react";
import Card from "./Card/Card"
import "./List.css"
class List extends Component {
    render() {
        var cards = this.props.games.map((game, index) => {
            return (
                <React.Fragment key={index}>
                    <Card image={game.image} title={game.title} text={game.text} />
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
export default List;
