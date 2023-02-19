import { api, ITrack } from './utils';

export class Tracker {
	private buffer: ITrack[];
	private timer?: ReturnType<typeof setTimeout>;

	constructor(buffer: ITrack[] = []) {
		this.buffer = buffer;

		window.addEventListener('beforeunload', () => {
			this.clear();
		});
	}

	public track(event: string, ...tags: string[]) {
		this.append({
			event,
			tags,
			url: window.location.href,
			title: document.title,
			ts: Math.floor(Date.now() / 1000),
		});
	}

	private updateTimer(cb: () => void, ttl = 1000) {
		this.timer = setTimeout(() => {
			this.timer = undefined;
			cb();
		}, ttl);
	}

	private append(...payload: ITrack[]) {
		this.buffer.push(...payload);

		if (this.buffer.length >= 3) {
			this.clear();
		} else if (!this.timer) {
			this.updateTimer(() => this.clear());
		}
	}

	private async clear() {
		if (this.buffer.length > 0) {
			const pending = [...this.buffer];
			this.buffer = [];

			try {
				await api.sendTrack(pending);
			} catch {
				this.updateTimer(() => this.append(...pending));
			}
		}
	}
}
