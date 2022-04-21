import { AvailableServicesURLS } from '../../types';
import type { ServiceOption } from '../../types';
import { StructureService } from '../ServiceStructure';

export class TioAnime extends StructureService {
	public constructor(public override url: ServiceOption = AvailableServicesURLS.TioAnime) {
		super(url);
	}

	public async latestAnimes(): Promise<string[]> {
		return this.getLatestAnimes(this.toString());
	}

	public async search(query: string): Promise<string[]> {
		return this.getSearch(`directorio?q=${query.split(' ').join('+')}`);
	}
}
