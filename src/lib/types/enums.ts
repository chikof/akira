export const AvailableServicesURLS = <const>{
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
