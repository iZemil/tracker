import { RootModule } from './modules/root.module';

async function bootstrap() {
	const { app } = new RootModule();
	const port = process.env.PORT || 8888;

	const server = app.listen(port, () => {
		console.log(`Back is running on: http://localhost:${port}/api`);
	});
	server.on('error', console.error);
}

bootstrap();
