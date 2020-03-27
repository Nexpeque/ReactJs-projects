import React from "react";
import classes from "./Card.css"

function Card(props) {
	return (
		<div className={classes["custom-card"]}>
			<img src={props.image} alt="" className={classes.cover} />
			<div className={classes["card-body"]}>
				<h5 className={classes["weight-sm"]}>{props.title}</h5>
				<p className={classes["card-text"]}>{props.text}</p>
			</div>
		</div>
	);
}
export default Card;