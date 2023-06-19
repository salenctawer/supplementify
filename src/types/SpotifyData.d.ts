
export interface SpotifyPlaylistsItemImagesData {
    url: string
    height: number
    width: number
}

export interface SpotifyPlaylistsItemData {
    collaborative: boolean
    description: string
    external_urls: {
        spotify: string
    }
    href: string
    id: string
    images: SpotifyPlaylistsItemImagesData[]
    name: string
    owner: {
        externals_urls: {
            spotify: string
        },
        followers: {
            href: string
            total: number
        }
        href: string
        id: string
        type: string
        uri: string
        display_name: string
    }
    public: boolean
    snapshot_id: string
    tracks: {
        href: string
        total: number
    }
    type: string
    uri: string
}

export interface SpotifyPlaylistsData {
    href: string
    limit: number
    next: string
    offset: number
    previous: string
    total: number
    items: SpotifyPlaylistsData[]
}