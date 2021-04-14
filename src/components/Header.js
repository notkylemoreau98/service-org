import React, { useState, useRef } from 'react';
import './styles/Header.css';
import { Modal } from './Modal';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Fix responsiveness around 1100px mark
// Close mobile nav on click off

const promise = loadStripe("pk_test_51ISAxtHJNiQVOCCAFB9H8O89lSXoKxTiWvi74pglcDmUePobnGna59BzdcFpBiktaVL6BM7paj5fh1IrLkVTxc3x006yKenkUR");

function Header() {
	const [mobileNav, setMobileNav] = useState(false);
	const [modal, setModal] = useState(false);

	const headerRef = useRef();

	const showNav = () => setMobileNav(!mobileNav);

	const showModal = () => setModal(!modal);

	return (
		<div className="header">
			<div className="header__title">
				<Link to='/' className="header__logoLink">
					<h1>Partners in <span className='header__titleSpan'>Health</span></h1> 
				</Link>
			</div>

			<nav className="header__nav">
				<ul>
				<Link to="/" className="header__navLink"><li>Home</li></Link>
				<Link to="/services" className="header__navLink"><li>Services</li></Link>
				<Link to="/about" className="header__navLink"><li>About Us</li></Link>
				<Link to="/team" className="header__navLink"><li>Team</li></Link>
				<Link to="/contact" className="header__navLink"><li>Contact</li></Link>
			</ul>

				<button onClick={showModal} className="header__donationButton">Donate Today</button>
				
				<Elements stripe={promise}>
					<Modal modal={modal} setModal={setModal} />
				</Elements>
			</nav>

			<div className="header__mobile">
				<div>
					<Link>
						<MenuIcon onClick={showNav} className="header__mobileIcon" />
					</Link>
				</div>

				<nav className={mobileNav ? 'header__mobileNav active' : "header__mobileNav"}>
					<ul onClick={showNav}>
						<Link to="/" className="header__navLink"><li>Home</li></Link>
						<Link to="/services" className="header__navLink"><li>Services</li></Link>
						<Link to="/about" className="header__navLink"><li>About Us</li></Link>
						<Link to="/team" className="header__navLink"><li>Team</li></Link>
						<Link to="/contact" className="header__navLink"><li>Contact</li></Link>
						<Link to="#" className="header__navLink"><li onClick={showModal}>Donations</li></Link>

						<Elements stripe={promise}>
							<Modal modal={modal} setModal={setModal} />
						</Elements>

			</ul>
				</nav>
			</div>
	
		</div>
	)
}

export default Header
