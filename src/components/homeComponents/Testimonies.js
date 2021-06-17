import React from 'react';
import './styles/Testimonies.css';

import teamBrendan from './styles/images/team-member-brendan.jpeg';
import teamCharles from './styles/images/team-member-charles.jpeg';
import teamPamela from './styles/images/team-member-pamela.jpeg';

function Testimonies() {
	return (
		<section className="testimonies">
				<div className="testimonies__header">
					<p>Testimonies</p>
					<h2>What People Are Saying</h2>
				</div>

				<div className="testimonies__cards">
					<div className="testimonies__card">
						<p>"This organization did a fantastic job at listening to the needs of our community and provided vital services in the most professional fashion. They are truly focused soley on health equity for all."</p>
						<img src={teamBrendan} />
						<h3>Brendan Price</h3>
						<p>Haitian Community Health Worker</p>
					</div>
					
					<div className="testimonies__card testimonies__cardAlt">
						<p>"The clinics set up by this organization allowed us to do testing that was previosuly unheard of in the region. The process was quick and efficient and because of that our community is healthier than ever before."</p>
						<img src={teamCharles} />
						<h3>Charles Ashworth</h3>
						<p>Physician in Peru</p>
					</div>

					<div className="testimonies__card">
						<p>"This organization did a great job assisting me with training members of the community to work in our new healthcare centers. By doing this, our community can now experience lasting change that starts with our peers."</p>
						<img src={teamPamela} />
						<h3>Pamela Taylor</h3>
						<p>Midwife</p>
					</div>

				</div>
			</section>
	)
}

export default Testimonies
