import { Item } from './item';

export interface ApiResponceData {
    etag: string
    items: Item[]
    kind: string
    nextPageToken: string
    pageInfo: {
        totalResults: number, 
        resultsPerPage: number
    }
    regionCode: string
}
