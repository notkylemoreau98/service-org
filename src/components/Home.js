import React, { useState } from 'react';
import './styles/Home.css';
import './styles/HomeMobile.css';
import useContact from './useContact';
import validate from './validateInfo'
import Service from './Service';
import { Modal } from './Modal'
import { Link } from 'react-router-dom';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51ISAxtHJNiQVOCCAFB9H8O89lSXoKxTiWvi74pglcDmUePobnGna59BzdcFpBiktaVL6BM7paj5fh1IrLkVTxc3x006yKenkUR");

function Home() {
	const {handleChange, handleSubmit, errors, values} = useContact(validate);

	const [modal, setModal] = useState(false);

	const showModal = () => setModal(!modal)

	return (
		<div className="home">

			<section className="home__landing">
				<h1>Food Security for the Future</h1>
				<p>Partners in Health is a non-profit organization focused on creating a more equitable world for all. Our mission is to provide efficient, low-cost health care through our many clinics and distribution centers in Haiti and Peru.</p>
				<button onClick={showModal}>Donate Today</button>

				<Elements stripe={promise}>
					<Modal modal={modal} setModal={setModal} className="home__modal" />
				</Elements>
			</section>


			<section className="home__missionStatement">
				<div className="home__missionStatementImage">
					<img src="https://images.pexels.com/photos/6647175/pexels-photo-6647175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Team"/>
				</div>

				<div className="home__missionStatementText">
					<span>Welcome</span>
					<h2>To Partners in Health</h2>
					<div className="home__missionStatementTitleUnderline"></div>
					<p>Our mission here at Partners in Heath is to create equitable healthcare for all. We strive to achieve this by providing the poorest countries and communities in the world with the proper facilities and resources for establishing a high-functioning healthcare systems. Through the compassionate efforts by our world-class team, we hope to creating lasting change for all of those in need.</p>
				
					<Link to="/about" className="home__missionStatementButton"><button>Learn More</button></Link>
				</div>
			</section>


			<section className="home__customers">
				<h2>Our Major Customers</h2>
				<div className="home__customersImages">
					<img src="https://upload.wikimedia.org/wikipedia/commons/8/84/USAID-Logo.svg" alt="USAID"/>
					<img src="https://www.rockefellerfoundation.org/wp-content/uploads/WHO-logo.png" alt="WHO"/>
					<img src="https://d2v9ipibika81v.cloudfront.net/uploads/sites/100/2015/06/Official_Post_Seal.png" alt="Embassy"/>
					<img src="https://www.un.org/ruleoflaw/wp-content/uploads/2015/04/uniceflogo.png" alt="Unicef"/>
					<img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHydh-JrRz7iQ/company-logo_200_200/0/1561119739766?e=2159024400&v=beta&t=nYcwUG43JBwPwqW0Z3egTsdDMZe8X034QDMCVb9Wk4w" alt="Global Fund"/>
				
				</div>
			</section>


			<section className="home__services">
				<h2>Services</h2>

				<div className="home__serviceContainer">
					<Service icon={<AccountBalanceIcon />} service="Food Bank" serviceUrl="/foodBank" description="A centralized location where either individuals or organizations can access donated food to serve basic needs." />
					<Service icon={<LocalHospitalIcon />} service="Free Clinics" serviceUrl="/clinics" description="We partner with community leaders to create easily-accessible healthcare facilities where the community can access low-cost or free care." />
					<Service icon={<EmojiPeopleIcon />} service="Sustainability" serviceUrl="/sustainability" description="For all of our interventions we aim to engage the community in order to make our impacts long-lasting." />
				</div> 

				

				<Link to="/services" className="home__servicesExploreButton"><button>See More Here</button></Link>
				
			</section>


			<section className="home__contact" id="contactForm">
				<div className="home__contactForm">
					<form onSubmit={handleSubmit}>
						<div className="home__contactFormField">
							<label>Name</label>
							<input 
								type="text" 
								name="name"
								value={values.name}
								onChange={handleChange} 
								required 
							/>
							{errors.name && <p>{errors.name}</p>}		
						</div>
				
						<div className="home__contactFormField">
							<label>Date</label>
							<input 
								type="date"
								name="date"
								value={values.date}
								onChange={handleChange}  
								required 
							/>
							{errors.date && <p>{errors.date}</p>}
						</div>
				
						<div className="home__contactFormField">
							<label>Email Address</label>
							<input 
								type="email"
								name="email" 
								value={values.email}
								onChange={handleChange} 
								required 
							/>	
							{errors.email && <p>{errors.email}</p>}
						</div>

						<div className="home__contactFormField">
							<label>Phone Number</label>
							<input 
								type="tel"
								name="phone"
								value={values.phone}
								onChange={handleChange} 
							/>	
							{errors.phone && <p>{errors.phone}</p>}
						</div>

						<div className="home__contactFormField" id="home__contactFormMessage">
							<label>Message</label>
							<textarea
								rows="5" columns="50" 
								name="message"
								value={values.message}
								onChange={handleChange}  
								/>
						</div>

						<button onClick={handleSubmit} className="home__contactFormButton" type="submit">Send</button>

					</form>
				</div>

				<div className="home__contactActionStatement">
					<p>Have any questions?</p>
					<h2>Contact Us</h2>
				</div>
			</section>


			<section className="home__testimonies">
				<div className="home__testimoniesHeader">
					<p>Testimonies</p>
					<h2>What People Are Saying</h2>
				</div>

				<div className="home__testimoniesCards">
					<div className="home__testimoniesCard">
						<p>"This organization did a fantastic job at listening to the needs of our community and provided vital services in the most professional fashion. They are truly focused soley on health equity for all."</p>
						<img src="https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
						<h3>Brendan Price</h3>
						<p>Haitian Community Health Worker</p>
					</div>
					<div className="home__testimoniesCard" id="home__testimoniesCardAlt">
						<p>"The clinics set up by this organization allowed us to do testing that was previosuly unheard of in the region. The process was quick and efficient and because of that our community is healthier than ever before."</p>
						<img src="https://images.pexels.com/photos/3789888/pexels-photo-3789888.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
						<h3>Charles Ashworth</h3>
						<p>Physician in Peru</p>
					</div>

					<div className="home__testimoniesCard">
						<p>"This organization did a great job assisting me with training members of the community to work in our new healthcare centers. By doing this, our community can now experience lasting change that starts with our peers."</p>
						<img src="https://images.pexels.com/photos/3807770/pexels-photo-3807770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
						<h3>Pamela Taylor</h3>
						<p>Midwife</p>
					</div>

				</div>
			</section>


			<section className="home__team">
				<div className="home__teamHeader">
					<h2>Meet our team</h2>
					<div className="home__teamHeaderUnderline"></div>
				</div>

				<div className="home__teamMembers">
					<div className="home__teamMember">
						<img src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
						<h3>Lindsay Nichol</h3>
						<p>Founder</p>
					</div>

					<div className="home__teamMember">
						<img src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
						<h3>Laura Bohannon</h3>
						<p>Leading Physician</p>
					</div>

					<div className="home__teamMember">
						<img src="https://images.pexels.com/photos/5726783/pexels-photo-5726783.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
						<h3>Jerald Pellham</h3>
						<p>Community Outreach Manager</p>
					</div>

					<div className="home__teamMember">
						<img src="https://images.pexels.com/photos/3778602/pexels-photo-3778602.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
						<h3>Aaron Vela</h3>
						<p>Fundraising Manager</p>
					</div>

				</div>

				<Link to="/team" className="home__teamButton"><button>See All</button></Link>

			</section>

		</div>
	)
}

export default Home
