import { ITrack } from './types';

const apiUrl = (path = '/') => `http://localhost:8888${path}`;

export const api = {
	sendTrack: async (body: ITrack[]) =>
		fetch(apiUrl('/track'), {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'text/plain',
			},
			body: JSON.stringify(body),
		}),
};
