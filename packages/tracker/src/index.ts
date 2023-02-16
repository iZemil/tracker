interface Tracker {
	track(event: string, ...tags: string[]): void;
}

(function () {
	const tracker: Tracker = {
		track(event: string, ...tags: string[]) {
			console.log(event, ...tags);
		},
	};

	window.tracker = tracker;
})();
