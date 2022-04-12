export const AvailableServicesURLS = {
	TioAnime: 'https://tioanime.com/',
	AnimixPlay: 'https://animixplay.to/'
} as const;

export type AvailableServicesURLSType = keyof typeof AvailableServicesURLS;

export interface BaseElements {
	LatestAnimes: string;
	Search: string;
}

export const PageLocations: Record<AvailableServicesURLSType, BaseElements> = {
	TioAnime: {
		LatestAnimes: '#tioanime > div > section:nth-child(1) > ul > li > article > a > h3',
		Search: '#tioanime > div > div.row.justify-content-between.filters-cont > main > ul > li > article > a > h3'
	},
	AnimixPlay: {
		LatestAnimes: '#resultplace > ul > li > a > div.details > p.name',
		Search: '#result11 > ul > li > div.details > p.name > a'
	}
};
