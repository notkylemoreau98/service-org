import React from 'react';
import './styles/ServiceNav.css';
import { Link } from 'react-router-dom';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

function serviceNav() {
	return (
		<div className="serviceNav">
			<ul>
				<Link to="/foodBank" className="serviceNav__link">
					<li className="serviceNav__item">Food Bank</li>
				</Link>

				<Link to="/clinics" className="serviceNav__link">
					<li className="serviceNav__item">Free Clinics</li>
				</Link>

				<Link to="/sustainability" className="serviceNav__link">
					<li className="serviceNav__item">Sustainability</li>
				</Link>

				<Link to="/vaccines" className="serviceNav__link">
					<li className="serviceNav__item">Vaccine Distribution</li>
				</Link>

				<Link to="/education" className="serviceNav__link">
					<li className="serviceNav__item">Community Education</li>
				</Link>

				<Link to="/transportation" className="serviceNav__link">
					<li className="serviceNav__item">Transportation</li>
				</Link>

			</ul>
		</div>
	)
}

export default serviceNav
