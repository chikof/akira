import { PageLocations, AvailableServicesURLS } from '../../types/enums';
import type { ServiceOption } from '../../types/options';
import { StructureService } from '../ServiceStructure';

export class TioAnime extends StructureService {
	public constructor(public override url: ServiceOption = AvailableServicesURLS.TioAnime) {
		super(url);
	}

	public async lastAnimes(): Promise<string[]> {
		const [page, browser] = await this.newPage();
		const columns = page.locator(PageLocations[this.toString() as 'TioAnime'].LatestAnimes);
		const result = this.removeEnters((await columns.allTextContents())[0]);

		await browser.close();
		return result;
	}

	public async search(query: string): Promise<string[]> {
		const [page, browser] = await this.newPage(`${this.url}directorio?q=${query.split(' ').join('+')}`);
		const columns = page.locator(PageLocations[this.toString() as 'TioAnime'].Search);
		const result = (await columns.allTextContents()).map((s) => this.removeEnters(s))[0];

		await browser.close();
		return result;
	}

	private removeEnters(text: string) {
		return text.split(/\n/g).filter((w) => w.length > 2);
	}
}
