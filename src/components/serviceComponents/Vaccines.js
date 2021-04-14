import React from 'react';
import './styles/Vaccines.css';
import ServiceNav from './ServiceNav';

function Vaccines() {
	return (
		<div className="vaccines">
			<ServiceNav />

				<div className="vaccines__container">

				<div className="vaccines__image">
					<img src="https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Vaccine Image"/>
				</div>

				<div className="vaccines__textContainer">
					<div className="vaccines__title">
						<h1>Vaccine Distribution</h1>
						<p>Through our partnership with GAVI and the WHO, we are able to provide vaccines against Tuberculosis, COVID-19, Hepatitus, as well as numerous other infectious diseases. On top of vaccines, we are also able to provide communities with essential medicines and prevention equipment such as malaria nets. Vaccines are disbursed to other hospitals in the area to ensure maximum impact.</p>
					</div>

					<div className="vaccines__list">
						<h2>We provide:</h2>
						<ul>
							<li>Universal free access to vaccines against COVID-19</li>
							<li>Universal free access to vaccines against Tuberculosis</li>
							<li>ITN Nets</li>
							<li>Antiretrovirals</li>
							<li>Community Health Workers to monitor reactions to vaccines</li>
						</ul>
					</div>

					<div className="vaccines__missionStatement">
						<h3>We are at your service</h3>
						<p>We are constantly improving our services to provide world-class care.</p>
						<p>For more information about our programs, please feel free to contact us.</p>
					</div>

				</div>

			</div>

		</div>
	)
}

export default Vaccines
