import express from 'express';
import * as path from 'path';

/**
 * Module to serve html static files
 */
export class WebModule {
	constructor(public readonly app = express()) {
		this.app.get('/', (req, res) => res.redirect('/1.html'));
		this.app.use('/', express.static(path.join(__dirname, 'public')));
	}
}
