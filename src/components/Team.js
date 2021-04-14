import React from 'react';
import './styles/Team.css';
import TeamMember from './TeamMember';

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

				<TeamMember image="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" name="Lindsay Nichol" role="Founder" />

				<TeamMember image="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" name="Laura Bohannon" role="Leading Physician" />

				<TeamMember image="https://images.pexels.com/photos/5726783/pexels-photo-5726783.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" name="Jerald Pellham" role="Community Outreach Manager" />

				<TeamMember image="https://images.pexels.com/photos/3778602/pexels-photo-3778602.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" name="Aaron Vela" role="Fundraising Manager" />

				<TeamMember image="https://images.pexels.com/photos/3812742/pexels-photo-3812742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" name="Melissa Cintron" role="Food Bank President" />

				<TeamMember image="https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" name="Tracy Bergeron" role="Health Educator" />
				
			</section>

		</div>
	)
}

export default Team
