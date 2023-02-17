import { IPayload, ITracker } from './types';
import { getTs } from './utils';
import { Manager } from './manager';

export function tracker(): ITracker {
	const manager = new Manager();

	return {
		track(event: string, ...tags: string[]) {
			const payload: IPayload = {
				id: +Math.random().toString(8).slice(2, 9),
				event,
				tags,
				url: window.location.href,
				title: document.title,
				ts: getTs(),
			};

			manager.push(payload);
		},
	};
}
