import { IPayload } from '../types';

const API_URL = 'http://localhost:8888';

export const api = {
	sendTrack: async (body: IPayload[], path = '/track') =>
		fetch(`${API_URL}${path}`, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'text/plain',
			},
			body: JSON.stringify(body),
		}),
};
