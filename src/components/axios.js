import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://www.pihtribute.com/'
})

export default instance;