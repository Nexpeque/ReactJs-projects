import React, { Component } from 'react';
import classes from "./Home.css"
import List from "../List/List"
import axios from '../../AxiosInstance';

class Home extends Component {
	state = {
		games: [],
		loading: false,
		error: false
	}
	componentDidMount() {
		this.setState({
			loading: true
		});
		axios.get("/games")
			.then(response => {
				this.setState({
					games: response.data
				});
			})
			.catch(error => {
				this.setState({
					error: true
				});
			})
			.then(() => {
				this.setState({
					loading: false
				});
			});
	}
	openPost = (postIndex) => {
		return this.state.posts[postIndex];
	}
	render() {
		var content;
		if (this.state.loading) {
			content = <h1>Loading...</h1>
		} else if (this.state.error) {
			content = <h1>Error loading data, please try again</h1>
		} else {
			content = <List games={this.state.games} />
		}

		return (
			<div className={classes.home}>
				<div className={classes["game-list"]}>
					<h1 className={classes["pc-title"]}>Games</h1>
					{content}
				</div>
			</div >
		);
	}
}

export default Home;