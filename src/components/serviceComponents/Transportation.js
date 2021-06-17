import React from 'react';
import './styles/Transportation.css';
import ServiceNav from './ServiceNav';

import transportationImage from './styles/images/transportation.jpeg';

function Transportation() {
	return (
		<div className="transportation">
			<ServiceNav />

				<div className="transportation__container">

				<div className="transportation__image">
					<img src={transportationImage} alt="Transportation Image"/>
				</div>

				<div className="transportation__textContainer">
					<div className="transportation__title">
						<h1>Transportation</h1>
						<p>With many members of the communities we serve being located a great distance from a healthcare facility, we have created a patient transportation system that will bring patients back and forth from their homes. In order to ensure that trips are essential, community health workers are sent out two times a week to check in one patients and assess their needs.</p>
					</div>

					<div className="transportation__list">
						<h2>We provide:</h2>
						<ul>
							<li>Transportation to and from medical facilities</li>
							<li>Scheduling reminders for appointments and transportation times</li>
							<li>Community health worker chekups</li>
						</ul>
					</div>

					<div className="transportation__missionStatement">
						<h3>We are at your service</h3>
						<p>We are constantly improving our services to provide world-class care.</p>
						<p>For more information about our programs, please feel free to contact us.</p>
					</div>

				</div>

			</div>
			
		</div>
	)
}

export default Transportation
