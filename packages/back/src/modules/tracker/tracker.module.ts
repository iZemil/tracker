import { Express } from 'express';
import { Db } from 'mongodb';

import { TrackerService } from './tracker.service';
import { TrackDTO } from './track.dto';

export class TrackerModule {
	constructor(
		public readonly app: Express,
		public readonly db: Db,
		public readonly service = new TrackerService(db)
	) {
		this.initControllers();
	}

	initControllers() {
		this.app.get('/tracker', async (req, res) => {
			const file = await this.service.getTrackerFile();

			res.sendFile(file);
		});

		this.app.post('/track', async (req, res) => {
			const dtos = TrackDTO.parseArray(req.body);
			const isValid = await TrackDTO.validate(...dtos);

			res.sendStatus(isValid ? 200 : 422);

			if (isValid) {
				this.service.save(dtos);
			}
		});
	}
}
