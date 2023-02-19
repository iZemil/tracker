import { Db } from 'mongodb';
import * as path from 'path';

import { TrackDTO } from './track.dto';
import { TrackSchema } from './track.schema';

export class TrackerService {
	constructor(private readonly db: Db, private readonly repo = db.collection<TrackSchema>('tracks')) {}

	public async getTrackerFile(): Promise<string> {
		return path.join(__dirname, '../tracker/main.js');
	}

	public async save(dtos: TrackDTO[]) {
		return this.repo.insertMany(dtos);
	}
}
