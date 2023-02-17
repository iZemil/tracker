import { IPayload } from './types';
import { getTs, api } from './utils';

export class Manager {
	public queue: IPayload[];
	public lastRequestAt: number;

	constructor(queue: IPayload[] = []) {
		this.queue = queue;
		this.lastRequestAt = 0;

		window.addEventListener('beforeunload', () => {
			this.tryClear(true);
		});
	}

	public push(...payload: IPayload[]) {
		this.queue.push(...payload);
		this.tryClear();
	}

	public async tryClear(isForce = false) {
		const ttl = getTs() - this.lastRequestAt;
		const isValidTimeout = ttl > 1;
		const isMinimumSize = this.queue.length >= 3;
		const isValidSize = this.queue.length > 0;
		const canTry = isValidSize && (isValidTimeout || isMinimumSize || isForce);

		if (canTry) {
			const pendingQueue = [...this.queue];
			this.queue = [];
			this.lastRequestAt = getTs();

			let ok = false;
			try {
				const res = await api.sendTrack(pendingQueue);
				ok = res.ok;
			} catch (err) {
				console.warn('request', err);
			}

			if (!ok) {
				this.push(...pendingQueue);
			}
		}
	}
}
