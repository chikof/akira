import type { Awaitable } from '@sapphire/utilities';
import { Browser, chromium, type Page } from 'playwright';
import { AvailableServicesURLSType, PageLocations, ServiceOption } from '../types';

/**
 * Class to extend when creating a new service
 * @since 0.0.2
 */
export abstract class StructureService {
	public constructor(public url: ServiceOption) {}

	/**
	 * The method to get the latest anime releases
	 * @since 0.0.2
	 */
	public abstract lastAnimes(): Awaitable<unknown>;

	/**
	 * The method to search for an anime
	 * @since 0.0.2
	 */
	public abstract search(query: string): Promise<unknown>;

	/**
	 * The method to get the service name
	 * @since 0.0.2
	 */
	public toString(): Readonly<AvailableServicesURLSType> {
		return this.constructor.name as AvailableServicesURLSType;
	}

	protected async newPage(url?: string): Promise<[Page, Browser]> {
		const browser = await chromium.launch();
		const page = await browser.newPage();
		await page.goto(url || this.url);

		return [page, browser];
	}

	protected async getLatestAnimes(service: AvailableServicesURLSType) {
		const [page, browser] = await this.newPage();
		const columns = page.locator(PageLocations[service].LatestAnimes);
		const result = await columns.allTextContents();

		await browser.close();
		return result;
	}

	protected async getSearch(query: string) {
		const [page, browser] = await this.newPage(`${this.url}${query}`);
		await this.waitForSearch(page);
		const columns = page.locator(PageLocations[this.toString()].Search);
		const result = await columns.allTextContents();

		await browser.close();
		return result;
	}

	protected removeEnters(text: string): string[] {
		return text.split(/\n/g).filter((w) => w.length > 2);
	}

	protected async waitForSearch(page: Page) {
		return page.waitForSelector(PageLocations[this.toString()].Search);
	}
}
