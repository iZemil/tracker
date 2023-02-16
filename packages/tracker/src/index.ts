import { Tracker } from './types';

(function () {
	const tracker: Tracker = {
		track(event: string, ...tags: string[]) {
			console.log(event, ...tags);
		},
	};
	window.exports = {};
	window.tracker = tracker;
})();
