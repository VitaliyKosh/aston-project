export interface Cell {
    id: string
    key: ComparisonKeys
    value: string | undefined
}

export interface Row {
    key: ComparisonKeys
    values: Cell[]
}

export const keys = {
    title: 'title',
    img: 'img',
    os: 'os',
    cpu: 'cpu',
    year: 'year'
} as const;

export type ComparisonKeys = keyof typeof keys;
