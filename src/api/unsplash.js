import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
 		Authorization: 
 			'Client-ID 2468bcf808efb426666bd8cb9080786470caa0d0fb27e3f51a15647d0bcea850'
 		}
});