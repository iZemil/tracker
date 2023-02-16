import { RootModule } from './modules/root.module';
import { WebModule } from './modules/web.module';

async function bootstrap() {
	const backPort = 8888;
	const { app: backApp } = new RootModule();
	backApp.listen(backPort, () => console.log(`Back is running on: http://localhost:${backPort}`));

	const publicPort = 5000;
	const { app: webApp } = new WebModule();
	webApp.listen(5000, () => console.log(`Web is running on: http://localhost:${publicPort}`));
}

bootstrap();
