import { TioAnime } from './structure/services/TioAnime';
import { AvailableServicesURLS } from './types';

export class Akira {
	/**
	 * TioAnime services
	 * @since 0.0.2
	 */
	public readonly TioAnime: TioAnime = new TioAnime(AvailableServicesURLS.TioAnime);
}
