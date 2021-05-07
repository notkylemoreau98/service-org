import React, { useState } from 'react';
import './styles/Header.css';
import { Modal } from './Modal';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51ISAxtHJNiQVOCCAFB9H8O89lSXoKxTiWvi74pglcDmUePobnGna59BzdcFpBiktaVL6BM7paj5fh1IrLkVTxc3x006yKenkUR");

function Header() {
	const [modal, setModal] = useState(false);

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

				<nav className='header__mobileNav'>
					<ul>
						<button className="header__navButtons">
							<Link to="/" className="header__navLink"><li>Home</li></Link>
						</button>

						<button className="header__navButtons">
							<Link to="/services" className="header__navLink"><li>Services</li></Link>
						</button>

							<button className="header__navButtons">
									<Link to="/about" className="header__navLink"><li>About</li></Link>
							</button>

							<button className="header__navButtons">
								<Link to="/team" className="header__navLink"><li>Team</li></Link>
							</button>

							<button className="header__navButtons">
								<Link to="/contact" className="header__navLink"><li>Contact</li></Link>
							</button>

							<button className="header__navButtons">
								<Link to="#" className="header__navLink"><li onClick={showModal}>Donations</li></Link>
							</button>

						<Elements stripe={promise}>
							<Modal modal={modal} setModal={setModal} />
						</Elements>

					</ul>
				</nav>

			</div>
	
	)
}

export default Header
