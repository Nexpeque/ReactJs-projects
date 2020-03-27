import React, { Component } from 'react';
import "./Home.css"
import List from "./List/List"
class Home extends Component {
	render() {
		let pcgames = [
			{
				image: "https://nerdmacia.cl/wp-content/uploads/2019/05/lol.jpg",
				title: "League of legends",
				text: "League of legends lorem ipsum"
			},
			{
				image: "https://areajugones.sport.es/wp-content/uploads/2018/01/Dota-2.jpg",
				title: "DOTA 2",
				text: "Dota 2 lorem ipsum"
			},
			{
				image: "https://static-assets-prod.epicgames.com/fortnite/static/webpack/8f9484f10eb14f85a189fb6117a57026.jpg",
				title: "Fornite",
				text: "Fornite lorem ipsum"
			},
			{
				image: "https://f.rpp-noticias.io/2019/01/24/204920_743066.jpg",
				title: "PUBG",
				text: "PUBG lorem ipsum"
			},
			{
				image: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop191x100.1200w.jpg",
				title: "APEX legends",
				text: "Apex legends lorem ipsum"
			}
		]
		let consolegames = [
			{
				image: "https://static-assets-prod.epicgames.com/fortnite/static/webpack/8f9484f10eb14f85a189fb6117a57026.jpg",
				title: "Fornite",
				text: "Fornite lorem ipsum"
			},
			{
				image: "https://www.madboxpc.com/wp-content/uploads/2018/10/FIFA-19-Screenshot-2018.10.01-21.11.06.60-1920x1080.png",
				title: "FIFA 19",
				text: "FIFA lorem ipsum"
			},
			{
				image: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/04/580150-dark-souls-3-primer-jefe-localizacion-como-derrotarlo.png",
				title: "Dark souls",
				text: "Dark souls lorem ipsum"
			}
		]
		return (
			<div className='home'>
				<div className="game-list">
					<h1 className="pc-title">Pc Games</h1>
					<List games={pcgames} />
				</div>
				<div className="game-list">
					<h1 className="pc-title">Console games</h1>
					<List games={consolegames} />
				</div>
			</div>
		);
	}
}

export default Home;