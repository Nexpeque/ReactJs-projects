import React from "react";
import classes from "./Card.css";
import { Link } from "react-router-dom";
export default function Card(props) {
    return (
        <Link to={"/game/" + props.index}>
            <div className={classes["custom-card"]}>
                <img src={props.image} alt="" className={classes.cover} />
                <div className={classes["card-body"]}>
                    <h5 className={classes["weight-sm"]}>{props.title}</h5>
                    <p className={classes["card-text"]}>{props.text}</p>
                </div>
            </div>
        </Link>
    );
}
