import type { AvailableTLDsType } from './utils';
export type UrlType = `https://${Lowercase<string>}.${AvailableTLDsType}${'/' | `/${string}`}`;

export const AvailableServicesURLS: Record<string, UrlType> = <const>{
	TioAnime: 'https://tioanime.com/'
};
export type AvailableServicesURLSType = keyof typeof AvailableServicesURLS;

export interface BaseElements {
	LatestAnimes: string;
}

export const PageLocations: Record<AvailableServicesURLSType, BaseElements> = {
	TioAnime: {
		LatestAnimes: '#tioanime > div > section:nth-child(1) > ul'
	}
};
