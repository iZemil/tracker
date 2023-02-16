import express, { Express } from 'express';
import * as path from 'path';

import { Payload } from '@tracker/types';

export class RootModule {
	public readonly app: Express;

	constructor() {
		this.app = express();
		this.app.use(express.json());

		this.app.get('/tracker', (req, res) => {
			res.sendFile('main.js', {
				// root: path.join(__dirname, '../tracker/src'),
				root: path.join(__dirname, '../tracker'),
			});
		});

		this.app.post('/track', (req, res) => {
			const body: Payload = req.body;
			console.log('BODY', body);
			console.log('track logic...');
			res.send('track');
		});
	}
}
