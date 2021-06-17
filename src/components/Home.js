import React, { useState } from 'react';
import './styles/Home.css';
import { Modal } from './Modal'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import Mission from './homeComponents/Mission';
import Customers from './homeComponents/Customers';
import Services from './homeComponents/ServicesHome';
import Contact from './homeComponents/ContactHome';
import Testimonies from './homeComponents/Testimonies';
import Team from './homeComponents/TeamHome';

const promise = loadStripe("pk_test_51ISAxtHJNiQVOCCAFB9H8O89lSXoKxTiWvi74pglcDmUePobnGna59BzdcFpBiktaVL6BM7paj5fh1IrLkVTxc3x006yKenkUR");


function Home() {
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

			<Mission />
			<Customers />
			<Services />
			<Contact />
			<Testimonies />
			<Team />
		</div>
	)
}

export default Home
