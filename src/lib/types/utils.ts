export type ValuesOf<T extends Readonly<any[]>> = T[number];

export type ObjectKeys<T> = keyof T;

export type ObjectValues<T> = T[ObjectKeys<T>];
