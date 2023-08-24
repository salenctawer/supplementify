
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

export interface SpotifyArtistsData {
    external_urls: SpotifyExternalUrlsData
    href: string
    id: string
    name: string
    type: string
    uri: string
}

export interface SpotifyAlbumData {
    album_type: string
    artists: SpotifyArtistsData[]
    available_markets: string[]
    external_urls: SpotifyExternalUrlsData
    href: string
    id: string
    images: SpotifyItemImagesData[]
    name: string
    release_date: string
    release_date_precision: string
    total_tracks: number
    type: string
    uri: string
}

export interface SpotifyTracksItemData {
    album: SpotifyAlbumData
    artists: SpotifyArtistsData[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_ids: {
        isrc: string
    }
    external_urls: SpotifyExternalUrlsData
    href: string
    id: string
    is_local: booleab
    name: string
    popularity: number
    preview_url: string
    track_number: number
    type: string
    uri: string
}

// export interface SpotifyFavoriteTracksData {
//     href: string
//     limit: number
//     next: string
//     offset: number
//     previous: string
//     total: number
//     items: SpotifyTracksItemData[]
// }

export interface SpotifyRecentlyPlayedItemData {
    context: {
        external_urls: SpotifyExternalUrlsData
        href: string
        type: string
        uri: string
        played_at: string
    }
    played_at: string
    track: SpotifyTracksItemData
}

export interface SpotifyRecentlyPlayedData {
    cursos: {
        after: string
        before: string
    }
    href: string
    items: SpotifyRecentlyPlayedItemData[]
    limit: number
    next: string
}

export interface SpotifyUserData {
    country: string
    display_name: string
    explicit_content: {
        filter_enabled: boolean
        filter_locked: boolean
    }
    external_urls: SpotifyExternalUrlsData
    followers: {
        href: string | null
        total: number
    }
    href: string
    id: string
    images: SpotifyItemImagesData[]
    product: string
    type: string
    uri: string
}