import React, { useRef, useState, useEffect } from 'react';
import './styles/Modal.css';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useHistory } from 'react-router-dom';
import axios from './axios'
import CurrencyFormat from 'react-currency-format';
import modalImage from './styles/images/modal.jpeg';


export const Modal = ({modal, setModal}) => {
	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState('');
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setClientSecret] = useState(null)
	const [donationAmount, setDonationAmount] = useState('');

	const modalRef = useRef();
	const history = useHistory();

	const stripe = useStripe();	
	const elements = useElements();


	useEffect(() => {
		const getClientSecret = async () => {
			const response = await axios({
				method: 'post',
				url: `/payments/create?total=${donationAmount * 100}`
			})
			setClientSecret(response.data.clientSecret);
		};

		if(modal) {
				getClientSecret();
				console.log(clientSecret)
		}
	}, [donationAmount])


	const closeModal = (e) => modalRef.current === e.target ? setModal(false) : '';

	const debounce = (func, timer) => {
		let timeId = null;
		return (...args) => {
			if(timeId) {
				clearTimeout(timeId)
			}

			timeId = setTimeout(() => {
				func(...args);
			}, timer);
		}
	};

	const setDonationValue = (e) => {
		 if (e.target.value.length > 6) {
     e.target.value = e.target.value.slice(0,6); 
    } else if (e.target.value < 0) {
					setDonationAmount(0);
				}

				setDonationAmount(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setProcessing(true);

		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement)
			}
			}).then(() => {
				setSucceeded(true);
				setError(null);
				setProcessing(false);
				setModal(false);
				setDonationAmount('');

				history.replace('/donationCheckout');
			})
		};

	const handleChange = (e) => {
		setDisabled(e.empty);
		setError(e.error ? e.error.message : '');
	};
	

	return (
		<>
			{modal ? (
				<div ref={modalRef} onClick={closeModal} className="modal__container">

					<div className="modal">

						<div className="modal__image">
							<img src={modalImage} alt="Woman holding child"/>
						</div>

						<div className="modal__content">
							<span onClick={() => setModal(false)} className="modal__close">X</span>
							<h1>Donations</h1>

							<form onSubmit={handleSubmit} className="modal__contentForm">
								<input type="text" placeholder="Name" />
								<input type="email" placeholder="Email" />
								<input type="number" onChange={debounce(setDonationValue, 1000)} placeholder="Donation Amount" />
								
								<CardElement onChange={handleChange} className="modal__cardElement" />

								 <div className='modal__priceContainer'>
										<CurrencyFormat
											renderText={(value) => (
												<h3>Donation Amount: {value}</h3>
											)}
											decimalScale={2}
											value={donationAmount}
											displayType={"text"}
											thousandSeparator={true}
											prefix={"$"}
										/>
										</div>

								<button disabled={processing || disabled || succeeded} type="submit">
									<span>{processing ? <p>Processing</p> : "Send Donation"}</span>
								</button>

								{error && <div>{error}</div>}

							</form>
						</div>


					</div>

				</div> ) : null }

				</>
	)
}
