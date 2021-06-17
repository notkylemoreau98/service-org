import React from 'react';
import './styles/Clinics.css';
import ServiceNav from './ServiceNav';

import clinicsImage from './styles/images/clinics.jpeg';


function Clinics() {
	return (
		<div className="clinics">
			<ServiceNav />

			<div className="clinics__container">

				<div className="clinics__image">
					<img src={clinicsImage} alt="Clinics Image"/>
				</div>

				<div className="clinics__textContainer">
					<div className="clinics__title">
						<h1>Clinics</h1>
						<p>Through generous donations by The World Bank we are able to set up health clinics in each of the 15 countries we operate in. These clinics are free for members of the community and all supplies and testing equipment is provided by UNICEF. In order to integrate these facilities into the community, members of the community will be able to partake in a training program and become staff of these clinics. </p>
					</div>

					<div className="clinics__list">
						<h2>We provide:</h2>
						<ul>
							<li>Complete physical examinations</li>
							<li>Essential medications</li>
							<li>Construction of medical facilities</li>
							<li>Testing equipment</li>
							<li>Trained staff</li>
						</ul>
					</div>

					<div className="clinics__missionStatement">
						<h3>We are at your service</h3>
						<p>We are constantly improving our services to provide world-class care.</p>
						<p>For more information about our programs, please feel free to contact us.</p>
					</div>

				</div>

			</div>
		</div>
	)
}

export default Clinics
