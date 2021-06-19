import { useState, useEffect } from 'react';
import { db } from './firebase';
import validateInfo from './validateInfo';

const useContact = () => {
	const [values, setValues] = useState({
		name: '',
		date: '',
		email: '',
		phone: '',
		message: ''
	})

	const [errors, setErrors] = useState({});
	const [submitting, setSubmitting] = useState(false);

	const handleChange = (e) => {
		const{ name, value } = e.target
		setValues({
			...values,
			[name]: value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors({});

		setErrors(validateInfo(values));
		console.log(errors);
		setSubmitting(true);

		if(submitting && Object.keys(errors).length === 0 && values.name ) {
			db.collection('contact').add({
			name: values.name,
			date: values.date,
			email: values.email,
			phoneNumber: values.phone,
			message: values.message
		}).catch((error) => {alert(error.message)})

			setValues({
					name: '',
					date: '',
					email: '',
					phone: '',
					message: ''
			});
		}
	};

	return {handleChange, handleSubmit, values, errors };
}

export default useContact;