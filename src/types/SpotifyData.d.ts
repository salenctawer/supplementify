
export interface SpotifyItemImagesData {
    url: string
    height: number
    width: number
}

export interface SpotifyExternalUrlsData {
    spotify: string
}

export interface SpotifyFollowersData {
    href: string
    total: number
}

export interface SpotifyPlaylistsItemData {
    collaborative: boolean
    description: string
    external_urls: SpotifyExternalUrlsData
    href: string
    id: string
    images: SpotifyItemImagesData[]
    name: string
    owner: {
        externals_urls: SpotifyExternalUrlsData
        followers: SpotifyFollowersData
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
    items: SpotifyPlaylistsItemData[]
}

export interface SpotifyTracksItemData {
    external_urls: SpotifyExternalUrlsData
    followers: SpotifyFollowersData
    genres: string[]
    href: string
    id: string
    images: SpotifyItemImagesData[]
    name: string
    popularity: number
    type: string
    uri: string
}

export interface SpotifyFavoriteTracksData {
    href: string
    limit: number
    next: string
    offset: number
    previous: string
    total: number
    items: SpotifyTracksItemData[]
}