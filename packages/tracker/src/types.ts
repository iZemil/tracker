export interface Tracker {
	track(event: string, ...tags: string[]): void;
}

export interface Payload {
	// название события
	event: string;
	// дополнительные информация по событию
	tags: string[];
	//  полный адрес страницы
	url: string;
	// содержимое <title> текущей страницы
	title: string;
	// локальное время пользователя в секундах unixtime
	ts: number;
}