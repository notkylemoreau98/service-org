import React from 'react';
import './styles/Contact.css';
import useContact from './useContact';
import validateInfo from './validateInfo';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

function Contact() {
	const { handleChange, handleSubmit, errors, values} = useContact(validateInfo);

	return (
		<div className="contact">

			<section className="contact__titleCard">
				<div>
					<h1>Contact Us</h1>
				</div>
			</section>

			<div className="contact__heading">
				<h2>Have any questions?</h2>
				<p>Leave us a message below and a member from our service team will get back to you as soon as possible.</p>
			</div>

			<section className="contact__container">

				<section className="contact__left">
					<div className="contact__form">
						<form onSubmit={handleSubmit}>

							<div className="contact__formItem" id="contact__formItemTop">
								<label>Name</label>
								<input 
									type="text" 
									name="name"
									value={values.name}
									onChange={handleChange} 
								/>
								{errors.name && <p>{errors.name}</p>}
							</div>

							<div className="contact__formItem" id="contact__formItemTop">
								<label>Date</label>
								<input 
									type="date"
									name="date" 
									value={values.date}
									onChange={handleChange} 
								/>
								{errors.date && <p>{errors.date}</p>}
							</div>

							<div className="contact__formItem">
								<label>Email</label>
								<input 
									type="email"
									name="email" 
									value={values.email}
									onChange={handleChange} 
								/>
								{errors.email && <p>{errors.email}</p>}
							</div>

							<div className="contact__formItem">
								<label>Phone Number</label>
								<input 
									type="tel"
									name="phone" 
									value={values.phone}
									onChange={handleChange} 
								/>
								{errors.phone && <p>{errors.phone}</p>}
							</div>

							<div className="contact__formItem">
								<label>Message</label>
								<textarea cols="30" rows="10" 
									name="message"
									value={values.message}
									onChange={handleChange} 
								/>
							</div>

							<button type="submit" onSubmit={handleSubmit} className="contact__formButton">Submit</button>

						</form>
					</div>
				</section>

				<section className="contact__right">
					<h2>Contact Information</h2>
					<p>Have more questions? Reach out to us below.</p>

					<div className="contact__infoItem">
						<h3>Our Office</h3>
						<div className="contact__infoSubtitle">
							<HomeIcon className="contact__subtitleIcon" />
							<p>8622 St. Petersburg Dr, Austin TX 77205</p>
						</div> 
					</div>

					<div className="contact__infoItem">
						<h3>Phone</h3>
						<div className="contact__infoSubtitle">
							<PhoneIcon className="contact__subtitleIcon" />
							<p>(713)-207-1447</p>
						</div>
					</div>

					<div className="contact__infoItem">
						<h3>Email Address</h3>
						<div className="contact__infoSubtitle">
							<EmailIcon className="contact__subtitleIcon" />
							<p>partnersinhealth@pih.org</p>
						</div>
					</div>

				</section>

			</section>

		</div>
	)
}

export default Contact
