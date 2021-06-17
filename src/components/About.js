import React from 'react';
import './styles/About.css';

import globalDoctorImage from './styles/images/about-doctor.jpeg';
import groupImage from './styles/images/about-group.jpeg';

function About() {
	return (
		<div className="about">

			<section className="about__titleCard">
				<div>
					<h1>About Us</h1>
				</div>
			</section>

			<section className="about__topContainer">

				<div className="about__topContainerImage">
					<img src={globalDoctorImage} alt="Global Doctor" />
				</div>

				<div className="about__topContainerText">
					<div className="about__textContent">
						<h2>We push health forward</h2>
						<p>Here at Partners in Health, we dedicate our lives to fighting for the rights of the poor. Millions of deaths each year are a cause of preventable disease and we work tirelessly to provide world-class healthcare for those in the poorest parts of the world. Through the generous contributions of our donors, we are able to set up health care facilities and programs that can be used by communities for generations. Join us today in our mission of creating a healthy world for all.</p>
					</div>

					<div className="about__separationLine"></div>

					<div className="about__textContent">
						<h2>Our Origin Story</h2>
						<p>Starting from the garage of founder Lindsay Nichol, Partners in Health was created following the discovery of the poor health statistics of vulnerable communities throughout the world. Nichol noticed that many deaths in these countries were preventable with medical treatment. This discovery led to her deciding to create the organization now known as Partners in Health. </p>
					</div>
				
				</div>
			</section>

			<section className="about__bottomContainer">

				<div className="about__bottomContainerText">
					<div className="about__textContent">
						<h2>Our Mission</h2>
						<p>Our mission here at Partners in Health is to ensure equitable healthcare for poor populations all throughout the world. With your support, we aim to save millions of lives through the treatment of preventable diseases.</p>
					</div>

					<div className="about__separationLine"></div>

					<div className="about__textContent">
						<h2>How We Operate</h2>
						<p>Through the creation of our many clinics spread throughout 15 countries we are able to provide essential health services to communities in need. We work with the community in order to ensure that we fully understand their needs. Opportunities are also available for community members to get involved as staff in our programs in order to create a long-lasting impact.</p>
					</div>

			</div>
				
				<div className="about__bottomContainerImage">
					<img src={groupImage} alt="Group Image"/>
				</div>
			</section>

		</div>
	)
}

export default About
