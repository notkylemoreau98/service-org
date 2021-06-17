import React from 'react';
import './styles/ServicesHome.css';
import Service from '../Service';
import { Link } from 'react-router-dom';

import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';


function ServicesHome() {
	return (
		<section className="servicesHome">
				<h2>Services</h2>

				<div className="servicesHome__container">
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

					<Service icon={<EmojiPeopleIcon />} 
						service="Sustainability" 
						serviceUrl="/sustainability" 
						description="For all of our interventions we aim to engage the community in order to make our impacts long-lasting." 
						/>
						
				</div> 

				<Link to="/services" className="servicesHome__exploreButton">
					<button>See More Here</button>
				</Link>
				
			</section>
	)
}

export default ServicesHome
