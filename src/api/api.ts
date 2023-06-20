import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.spotify.com/',
})

const PLAYLISTS_ENDPOINT = 'v1/me/playlists'
const FAVORITE_TRACKS_ENDPOINT = 'v1/me/top/tracks'

export const spotifyApi = {
    fetchPlaylists() {
        return instance.get(PLAYLISTS_ENDPOINT)
    },
    fetchFavoriteTracks(limit: number, timeRange: string) {
        return instance.get(FAVORITE_TRACKS_ENDPOINT, {
            params: {
                limit,
                time_range: timeRange
            }
        })
    }
}

instance.interceptors.request.use((config: any) => { //типизировать
    config.headers.Authorization = 'Bearer ' + window.localStorage.getItem('accessToken');
    return config;
})