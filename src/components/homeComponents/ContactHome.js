import React from 'react';
import './styles/ContactHome.css';
import useContact from '../useContact';
import validate from '../validateInfo'

function ContactHome() {
		const {handleChange, handleSubmit, errors, values} = useContact(validate);

	return (
		<section className="contactHome" id="contactForm">
				<div className="contactHome__form">
					<form onSubmit={handleSubmit}>
						<div className="contactHome__formField">
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
				
						<div className="contactHome__formField">
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
				
						<div className="contactHome__formField">
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

						<div className="contactHome__formField">
							<label>Phone Number</label>
							<input 
								type="tel"
								name="phone"
								value={values.phone}
								onChange={handleChange} 
							/>	
							{errors.phone && <p>{errors.phone}</p>}
						</div>

						<div className="contactHome__formField contactHome__formMessage">
							<label>Message</label>
							<textarea
								rows="5" columns="50" 
								name="message"
								value={values.message}
								onChange={handleChange}  
								/>
						</div>

						<button className="contactHome__formButton" type="submit">Send</button>

					</form>
				</div>

				<div className="contactHome__actionStatement">
					<p>Have any questions?</p>
					<h2>Contact Us</h2>
				</div>
			</section>
	)
}

export default ContactHome
