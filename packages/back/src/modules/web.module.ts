import express, { Express } from 'express';
import * as path from 'path';

export class WebModule {
	public readonly app: Express;

	constructor() {
		this.app = express();
		this.app.use('/', express.static(path.join(__dirname, 'assets/')));
	}
}
