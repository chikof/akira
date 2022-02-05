import { PageLocations } from '../../types/enums';
import type { ServiceOptions } from '../../types/options';
import { StructureService } from '../ServiceStructure';

export class TioAnime extends StructureService {
	public constructor(public override url: ServiceOptions) {
		super(url);
	}

	public async lastAnimes(): Promise<string[]> {
		const [page, browser] = await this.newPage();
		const collumns = page.locator(PageLocations[this.toString()].LatestAnimes);
		const result = (await collumns.allTextContents())[0].split(/\n/g).filter((w) => w.length > 2);

		await browser.close();
		return result;
	}

	public override toString(): string {
		return 'TioAnime';
	}
}
