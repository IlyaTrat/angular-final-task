import { Tumbnail } from './tumbnail';

export interface Snippet {
    channelId: string
    channelTitle: string
    description: string
    liveBroadcastContent: string
    publishedAt: Date
    thumbnails: {
        default: Tumbnail, 
        medium: Tumbnail, 
        high: Tumbnail
    }
    title: string
}
