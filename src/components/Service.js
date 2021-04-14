import React from 'react';
import './styles/Service.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';


function Service({icon, service, description, serviceUrl}) {
	return (
		<div className="service">
			<span className="service__icon">
				{icon}
			</span>

			<div className="service__text">
				<h2>{service}</h2>
				<p>{description}</p>
			</div>

			<Link to={serviceUrl} className="service__button"><button>Details <ArrowForwardIcon className="service__arrow" /></button></Link>
		</div>
	)
}

export default Service
