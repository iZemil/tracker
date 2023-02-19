import { AppModule } from './modules/app.module';
import { WebModule } from './modules/web.module';
import { CONFIG } from './config';

async function bootstrap() {
	const { app, web } = CONFIG;
	const { app: appModule } = new AppModule();
	const { app: webApp } = new WebModule();

	appModule.listen(app.port, () => console.log(`Back is running on: http://localhost:${app.port}`));
	webApp.listen(web.port, () => console.log(`Web is running on: http://localhost:${web.port}`));
}
bootstrap();
