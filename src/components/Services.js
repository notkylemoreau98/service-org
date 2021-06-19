import React from 'react';
import './styles/Services.css';
import Service from './Service';

import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import HealingIcon from '@material-ui/icons/Healing';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';

function Services() {
	return (
		<div className="services">
			
			<section className="services__titleCard">
				<div>
					<h1>Services</h1>
				</div>
			</section>

			<section className="services__container">
				<Service 
					icon={<AccountBalanceIcon />} 
					service="Food Bank" 
					serviceUrl="/foodBank" 
					description="A centralized location where either individuals or organizations can access donated food to serve basic needs." 
					/>

				<Service 
					icon={<LocalHospitalIcon />} 
					service="Free Clinics" 
					serviceUrl="/clinics" 
					description="We partner with community leaders to create easily-accessible healthcare facilities where the community can access low-cost or free care." 
					/>

				<Service 
					icon={<EmojiPeopleIcon />} 
					service="Sustainability" 
					serviceUrl="/sustainability" 
					description="For all of our interventions we aim to engage the community in order to make our impacts long-lasting." 
					/>

				<Service 
					icon={<HealingIcon />} 
					service="Vaccine Distribution" 
					serviceUrl="/vaccines" 
					description="Through our partnership with GAVI we are able to provide at-risk communities with vaccines against diseases such as Malaria and Tuberculosis." 
					/>

				<Service 
					icon={<SupervisorAccountIcon />} 
					service="Community Education" 
					serviceUrl="/education" 
					description="Our educators aim to provide communities with current and accurate health information in order to promote healthy living." 
					/>

				<Service 
					icon={<AirportShuttleIcon />} 
					service="Transportation" 
					serviceUrl="/transportation" 
					description="We provide free transportation services to any of our clinics for those who reside in rural areas." 
					/>
					
			</section>

		</div>
	)
}

export default Services
