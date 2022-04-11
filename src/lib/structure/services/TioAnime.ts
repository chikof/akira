import { PageLocations, AvailableServicesURLS } from '../../types';
import type { ServiceOption } from '../../types';
import { StructureService } from '../ServiceStructure';

export class TioAnime extends StructureService {
	public constructor(public override url: ServiceOption = AvailableServicesURLS.TioAnime) {
		super(url);
	}

	public async lastAnimes(): Promise<string[]> {
		return this.getLatestAnimes(this.toString());
	}

	public async search(query: string): Promise<string[]> {
		const [page, browser] = await this.newPage(`${this.url}directorio?q=${query.split(' ').join('+')}`);
		const columns = page.locator(PageLocations[this.toString()].Search);
		const result = (await columns.allTextContents()).map((s) => this.removeEnters(s))[0];

		await browser.close();
		return result;
	}
}
