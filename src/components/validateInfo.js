export default function validateInfo(values) {
	let errors = {};
	// console.log(values);

	if(!values.name.trim()) {
		errors.name = "Name required"
	}

	if(!values.date) {
		errors.date = "Date required"
	}

	if(!values.email) {
		errors.email = "Email required"
	} else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = "Email address is invalid"
	}

	if(!values.phone) {
		errors.phone = "Phone number required"
	} else if(!/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})$/i.test(values.phone)) {
		errors.phone = "Phone number is invalid"
	}
	return errors;
}
