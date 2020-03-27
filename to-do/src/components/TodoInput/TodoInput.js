import React, { Component } from 'react';
import classes from './TodoInput.css';
export default class TodoInput extends Component {
	render() {
		const { item, handleChange, handleSubmit, editItem } = this.props;
		return (
			<div className={classes.block}>
				<form onSubmit={handleSubmit}>
					<div>
						<input
							type="text"
							placeholder="Add a to do item"
							className={classes.input}
							value={item}
							onChange={handleChange}
						/>
						<button
							className={editItem ? classes.buttonEdit : classes.button}>
							<i className={`${editItem ? 'fas fa-pencil-alt' : 'fas fa-plus'} ${classes.addIcon}`} ></i>
						</button>
					</div>
				</form>
			</div>
		)
	}
}
