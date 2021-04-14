import React from 'react';
import './styles/Footer.css';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


function Footer() {
	return (
				<footer className="footer">
				<div className="footer__newsletter">
					<h3>Subscribe to our newsletter</h3>
					<p>To keep up with our latest projects and initiatives, SUBSCRIBE to our weekly newsletter</p>
					<form>
						<input type="email" placeholder="Enter your email address..."/>
						<button type="submit">Send</button>
					</form>
				</div>

				<div className="footer__links">
					<h3>Our Links</h3>
					<ul>
						<Link to="/" className="footer__link"><li>Home</li></Link>
						<Link to="/services" className="footer__link"><li>Services</li></Link>
						<Link to="/about" className="footer__link"><li>About Us</li></Link>
						<Link to="/team" className="footer__link"><li>Team</li></Link>
						<Link to="/contact" className="footer__link"><li>Contact</li></Link>
					</ul>
				</div>

				<div className="footer__contact">
					<h3>Our Contact</h3>

					<div className="footer__contactItem">
						<HomeIcon className="footer__icon" />
						8622 St. Petersburg Dr, Austin TX 77205
					</div>

					<div className="footer__contactItem">
						<PhoneIcon className="footer__icon" />
						(713)-207-1447
					</div>

					<div className="footer__contactItem">
						<EmailIcon className="footer__icon" />
						partnersinhealth@pih.org
					</div>

					<div className="footer__contactItem">
						<FacebookIcon className="footer__icon" />
						<TwitterIcon className="footer__icon" />
						<InstagramIcon className="footer__icon" />
						@PartnersInHealth
					</div>

				</div>
			</footer>

	)
}

export default Footer
