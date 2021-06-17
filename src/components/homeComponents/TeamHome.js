import React from 'react';
import './styles/TeamHome.css';
import { Link } from 'react-router-dom';

import teamLindsay from './styles/images/team-member-lindsay.jpeg';
import teamLaura from './styles/images/team-member-laura.jpeg';
import teamJerald from './styles/images/team-member-jerald.jpeg';

function TeamHome() {
	return (
			<section className="teamHome">
				<div className="teamHome__header">
					<h2>Meet our team</h2>
					<div className="teamHome__headerUnderline"></div>
				</div>

				<div className="teamHome__members">
					<div className="teamHome__member">
						<img src={teamLindsay} alt="Linday Nichol"/>
						<h3>Lindsay Nichol</h3>
						<p>Founder</p>
					</div>

					<div className="teamHome__member">
						<img src={teamLaura} alt="Laura Bohannon"/>
						<h3>Laura Bohannon</h3>
						<p>Leading Physician</p>
					</div>

					<div className="teamHome__member">
						<img src={teamJerald} alt="Jerald Pellham"/>
						<h3>Jerald Pellham</h3>
						<p>Community Outreach Manager</p>
					</div>
				</div>

				<Link to="/team" className="teamHome__button"><button>See All</button></Link>

			</section>
	)
}

export {teamLindsay, teamLaura, teamJerald};

export default TeamHome;
