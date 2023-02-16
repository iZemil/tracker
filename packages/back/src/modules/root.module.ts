import express, { Express } from 'express';
import * as path from 'path';

export class RootModule {
	public readonly app: Express;

	constructor() {
		this.app = express();

		this.app.get('/tracker', (req, res) => {
			res.sendFile('index.js', {
				root: path.join(__dirname, '../tracker/src'),
			});
		});
	}
}
