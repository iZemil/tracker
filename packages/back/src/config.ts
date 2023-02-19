const {
	APP_PORT: appPort,
	WEB_PORT: webPort,
	DB_USER: dbUser,
	DB_PASS: dbPass,
	DB_PORT: dbPort,
	DB_HOST: dbHost,
	DB_NAME: dbName,
} = process.env;

export const CONFIG = {
	app: {
		port: appPort,
	},
	web: {
		port: webPort,
	},
	db: {
		user: dbUser,
		pass: dbPass,
		port: dbPort,
		host: dbHost,
		name: dbName,
	},
} as const;
