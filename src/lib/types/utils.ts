import type { AvailableTLDs } from '../utils/TLDs';

export type ValuesOf<T extends Readonly<any[]>> = T[number];

export type ObjectKeys<T> = keyof T;

export type ObjectValues<T> = T[ObjectKeys<T>];

export type AvailableTLDsType = Lowercase<ValuesOf<typeof AvailableTLDs>>;
