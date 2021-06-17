import React from 'react';
import './styles/Team.css';
import TeamMember from './TeamMember';

import {teamLindsay, teamLaura, teamJerald} from './homeComponents/TeamHome';
import teamAaron from './styles/images/team-member-aaron.jpeg';
import teamMelissa from './styles/images/team-member-melissa.jpeg';
import teamTracy from './styles/images/team-member-tracy.jpeg';

function Team() {
	return (
		<div className="team">
		
		<section className="team__titleCard">
				<div>
					<h1>Our Team</h1>
				</div>
			</section>

			<section className="team__introText">
				<h2>Meet some members of our team</h2>
				<p>Partners in Health is a team full of empathetic difference makers. They all share a common mission of providing equitable and affordable healthcare for those in the poorest parts of the world.</p>
			</section>

			<section className="team__members">

				<TeamMember image={teamLindsay} name="Lindsay Nichol" role="Founder" />

				<TeamMember image={teamLaura} name="Laura Bohannon" role="Leading Physician" />

				<TeamMember image={teamJerald} name="Jerald Pellham" role="Community Outreach Manager" />

				<TeamMember image={teamAaron} name="Aaron Vela" role="Fundraising Manager" />

				<TeamMember image={teamMelissa} name="Melissa Ramirez" role="Food Bank President" />

				<TeamMember image={teamTracy} name="Tracy Bergeron" role="Health Educator" />
				
			</section>

		</div>
	)
}

export default Team
