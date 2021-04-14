import React from 'react';
import './styles/Sustainability.css';
import ServiceNav from './ServiceNav';

function Sustainability() {
	return (
		<div className="sustainability">
			<ServiceNav />

			<div className="sustainability__container">

				<div className="sustainability__image">
					<img src="https://images.pexels.com/photos/5808/food-healthy-vegetables-village.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Sustainability Image"/>
				</div>

				<div className="sustainability__textContainer">
					<div className="sustainability__title">
						<h1>Sustainable Development</h1>
						<p>In all of our projects, we aim to create change that will last far beyond the time of the intervention. We aim to accomplish this goal by engaging with the community and providing the proper resources in order to achieve the desired outcome over an extended period of time. In all of our environmental projects we aim to use resources that are sustainable and we are continuosly striving to reduce our carbon footprint.</p>
					</div>

					<div className="sustainability__list">
						<h2>We provide:</h2>
						<ul>
							<li>Staff training for local clinics</li>
							<li>Community gardens with healthy food options</li>
							<li>Programs of which are free or low cost</li>
							<li>Recycling centers</li>
							<li>Community leadership progrmams</li>
						</ul>
					</div>

					<div className="sustainability__missionStatement">
						<h3>We are at your service</h3>
						<p>We are constantly improving our services to provide world-class care.</p>
						<p>For more information about our programs, please feel free to contact us.</p>
					</div>

				</div>

			</div>

		</div>
	)
}

export default Sustainability
