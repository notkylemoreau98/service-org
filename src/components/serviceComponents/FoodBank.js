import React from 'react';
import './styles/FoodBank.css';
import ServiceNav from './ServiceNav';

function FoodBank() {
	return (
		<div className="foodBank">
			<ServiceNav />

			<div className="foodBank__container">

				<div className="foodBank__image">
					<img src="https://images.pexels.com/photos/890507/pexels-photo-890507.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Food Bank Image"/>
				</div>

				<div className="foodBank__textContainer">
					<div className="foodBank__title">
						<h1>Food Bank</h1>
						<p>Our food bank program extends throughout 15 countries and supplies food insecure communities with the adequate nutrition options they need. Smaller versions of the food bank can be found at one of our satellite offices located throughout multiple cities in each country. We also have a large central food bank located in San Francisco, Calfornia where leaders may call in and request a number of shipments of quality food to their communites on a regular schedule.</p>
					</div>

					<div className="foodBank__list">
						<h2>We provide:</h2>
						<ul>
							<li>Access to food storage for individuals</li>
							<li>Access to food storage for groups and organizations</li>
							<li>Stockpile of fresh and healthy food options</li>
							<li>Installment plans</li>
							<li>Distribution center for large deliveries</li>
						</ul>
					</div>

					<div className="foodBank__missionStatement">
						<h3>We are at your service</h3>
						<p>We are constantly improving our services to provide world-class care.</p>
						<p>For more information about our programs, please feel free to contact us.</p>
					</div>

				</div>

			</div>
		</div>
	)
}

export default FoodBank;
