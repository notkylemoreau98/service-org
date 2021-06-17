import React from 'react';
import './styles/Mission.css';
import { Link } from 'react-router-dom';

import missionImage from './styles/images/home-mission-image.jpeg';

function Mission() {
	return (
		<section className="missionStatement">
				<div className="missionStatement__image">
					<img src={missionImage} alt="Team"/>
				</div>

				<div className="missionStatement__text">
					<span>Welcome</span>
					<h2>To Partners in Health</h2>
					<div className="missionStatement__titleUnderline"></div>
					<p>Our mission here at Partners in Heath is to create equitable healthcare for all. We strive to achieve this by providing the poorest countries and communities in the world with the proper facilities and resources for establishing a high-functioning healthcare systems. Through the compassionate efforts by our world-class team, we hope to creating lasting change for all of those in need.</p>
				
					<Link to="/about" className="missionStatement__button"><button>Learn More</button></Link>
				</div>

		</section>
	)
}

export default Mission
