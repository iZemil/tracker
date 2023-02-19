import { IsString, IsInt, validate, Min, IsUrl } from 'class-validator';

export class TrackDTO {
	@IsString()
	public event: string;

	@IsString({ each: true })
	public tags: string[];

	@IsUrl({ require_tld: false })
	public url: string;

	@IsString()
	public title: string;

	@IsInt()
	@Min(1_666_666_666)
	public ts: number;

	public static toDTO(data: TrackDTO): TrackDTO {
		const dto = new TrackDTO();

		dto.event = data.event;
		dto.tags = data.tags;
		dto.url = data.url;
		dto.title = data.title;
		dto.ts = data.ts;
		return dto;
	}

	public static parseArray(str: string | TrackDTO[]): TrackDTO[] {
		let data: TrackDTO[];
		if (typeof str === 'string') {
			try {
				data = JSON.parse(str);
			} catch {
				data = [];
			}
		}

		return data.map((it: TrackDTO) => TrackDTO.toDTO(it));
	}

	public static async validate(...dtos: TrackDTO[]): Promise<boolean> {
		if (dtos.length === 0) {
			return false;
		}

		for (const dto of dtos) {
			const errors = await validate(dto);
			if (errors.length > 0) {
				return false;
			}
		}
		return true;
	}
}
