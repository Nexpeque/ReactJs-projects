import React from "react";
import "./Card.css"

function Card(props) {
	return (
		<div className="custom-card">
			<img src={props.image} alt="" className="cover" />
			<div className="card-body">
				<h5 className="card-title weight-sm">{props.title}</h5>
				<p className="card-text">{props.text}</p>
			</div>
		</div>
	);
}
export default Card;