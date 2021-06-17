import React from 'react';
import './styles/Education.css';
import ServiceNav from './ServiceNav';

import educationImage from './styles/images/education.jpeg';

function Education() {
	return (
		<div className="education">
			<ServiceNav />

				<div className="education__container">

				<div className="education__image">
					<img src={educationImage} alt="Education Image"/>
				</div>

				<div className="education__textContainer">
					<div className="education__title">
						<h1>Community Education</h1>
						<p>To aid with acclimation to our services and facilities, we have educators who are available to provide communities with accurate health information. Through this, we hope to destigmatize diseases such as HIV and foster an environment where the community can take further prevention precautions. We also train members of the community to work as staff in our healthcare facilites.</p>
					</div>

					<div className="education__list">
						<h2>We provide:</h2>
						<ul>
							<li>Infectious disease education</li>
							<li>Malaria prevention workshops</li>
							<li>Sex education</li>
							<li>Prevention strategies</li>
							<li>Staff training</li>
						</ul>
					</div>

					<div className="education__missionStatement">
						<h3>We are at your service</h3>
						<p>We are constantly improving our services to provide world-class care.</p>
						<p>For more information about our programs, please feel free to contact us.</p>
					</div>

				</div>

			</div>
			
		</div>
	)
}

export default Education
