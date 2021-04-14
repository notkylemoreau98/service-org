import { useEffect, useState } from 'react';
import { db } from './firebase';
import validateInfo from './validateInfo';

const useContact = (callback) => {
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
			[name]: value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		setErrors(validateInfo(values));
		setSubmitting(true);

		if(validateInfo) {
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

	useEffect(() => {
		if(Object.keys(errors).length === 0 && submitting) {
			callback();
		}
	}, [errors]);

	return {handleChange, handleSubmit, values, errors};
}

export default useContact;