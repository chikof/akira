import type { AvailableTLDs } from '../utils/TLDs';

export type ValuesOf<T extends readonly any[]> = T[number];
export type AvailableTLDsType = ValuesOf<typeof AvailableTLDs>;
