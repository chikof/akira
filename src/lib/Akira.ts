import { TioAnime } from './structure/services/TioAnime';
import { AvailableServicesURLS } from './types/enums';

export class Akira {
	public readonly TioAnime = new TioAnime(AvailableServicesURLS.TioAnime);
}
