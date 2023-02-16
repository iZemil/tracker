import express, { Express } from 'express';
import * as path from 'path';

export class RootModule {
	public readonly app: Express;

	constructor() {
		this.app = express();
		this.app.use('/assets', express.static(path.join(__dirname, 'assets')));
		this.app.get('/api', (req, res) => {
			res.send({ message: 'Welcome to back!' });
		});
	}
}
