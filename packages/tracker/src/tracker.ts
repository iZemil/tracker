import { api, ITrack } from './utils';

export class Tracker {
	private buffer: ITrack[];
	private lastRequestAt = 0;

	constructor(buffer: ITrack[] = []) {
		this.buffer = buffer;

		window.addEventListener('beforeunload', () => {
			this.tryClear(true);
		});
	}

	public track(event: string, ...tags: string[]) {
		this.append({
			event,
			tags,
			url: window.location.href,
			title: document.title,
			ts: this.timestamp,
		});
	}

	private get timestamp(): number {
		return Math.floor(Date.now() / 1000);
	}

	private append(...payload: ITrack[]) {
		this.buffer.push(...payload);
		this.tryClear();
	}

	private async tryClear(isForce = false) {
		const ttl = this.timestamp - this.lastRequestAt;
		const isValidTimeout = ttl > 1;
		const isMinimumSize = this.buffer.length >= 3;
		const isValidSize = this.buffer.length > 0;
		const canTry = isValidSize && (isValidTimeout || isMinimumSize || isForce);

		if (canTry) {
			const pending = [...this.buffer];
			this.buffer = [];
			this.lastRequestAt = this.timestamp;

			let ok = false;
			try {
				const res = await api.sendTrack(pending);
				ok = res.ok;
			} catch (err) {
				console.warn('request', err);
			}

			if (!ok) {
				this.append(...pending);
			}
		}
	}
}
