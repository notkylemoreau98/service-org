import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://us-central1-service-org.cloudfunctions.net/api',
	headers: {'X-Requested-With' : 'XMLHttpRequest'} // Possible solution to CORS error
})

export default instance;