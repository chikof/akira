import { AvailableServicesURLS } from '../../types';
import type { ServiceOption } from '../../types';
import { StructureService } from '../ServiceStructure';

export class AnimixPlay extends StructureService {
	public constructor(public override url: ServiceOption = AvailableServicesURLS.AnimixPlay) {
		super(url);
	}

	public async lastAnimes(): Promise<string[]> {
		return this.getLatestAnimes(this.toString());
	}

	public async search(query: string): Promise<string[]> {
		return this.getSearch(`?q=${query.split(' ').join('%20')}&sengine=al`);
	}
}
