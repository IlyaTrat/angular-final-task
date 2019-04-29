import { Snippet } from './snippet';

export interface Item {
    etag: string
    id: {
        kind: string, 
        videoId: string
    }
    kind: string
    snippet: Snippet
}
