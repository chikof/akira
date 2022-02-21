import { PageLocations } from '../../types/enums';
import type { ServiceOption } from '../../types/options';
import { StructureService } from '../ServiceStructure';

export class TioAnime extends StructureService {
	public constructor(public override url: ServiceOption) {
		super(url);
	}

	public async lastAnimes(): Promise<string[]> {
		const [page, browser] = await this.newPage();
		const columns = page.locator(PageLocations[<'TioAnime'>this.toString()].LatestAnimes);
		const result = (await columns.allTextContents())[0].split(/\n/g).filter((w) => w.length > 2);

		await browser.close();
		return result;
	}
}
