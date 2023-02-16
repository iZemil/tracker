import express from 'express';
import * as path from 'path';

async function bootstrap() {
	const app = express();

	app.use('/', express.static(path.join(__dirname, 'assets/public')));

	const port = process.env.PORT || 5000;
	const server = app.listen(port, () => console.log(`Client server on: http://localhost:${port}`));
	server.on('error', console.error);
}

bootstrap();
