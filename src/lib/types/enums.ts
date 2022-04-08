export const AvailableServicesURLS = <const>{
	TioAnime: 'https://tioanime.com/'
};
export type AvailableServicesURLSType = keyof typeof AvailableServicesURLS;

export interface BaseElements {
	LatestAnimes: string;
	Search: string;
}

export const PageLocations: Record<AvailableServicesURLSType, BaseElements> = {
	TioAnime: {
		LatestAnimes: '#tioanime > div > section:nth-child(1) > ul',
		Search: '#tioanime > div > div.row.justify-content-between.filters-cont > main > ul'
	}
};
