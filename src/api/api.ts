import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.spotify.com/',
})

const PLAYLISTS_ENDPOINT = 'v1/me/playlists'
const FAVORITE_TRACKS_ENDPOINT = 'v1/me/top/tracks'
const RECENTLY_PLAYED_ENDPOINT = 'v1/me/player/recently-played'

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
    },
    fetchRecentlyPlayed(limit: number) {
        return instance.get(RECENTLY_PLAYED_ENDPOINT, {
            params: {
                limit
            }
        })
    }
}

instance.interceptors.request.use((config: any) => { //TODO: типизировать
    config.headers.Authorization = 'Bearer ' + window.localStorage.getItem('accessToken');
    return config;
})

instance.interceptors.response.use((response: any) => {
    return response
}, async function(error) { // по другому рефрешить токен, пока это временная затычка
    if(error.response.data.error.message === 'The access token expired') {
        const queryString = new URLSearchParams({
            response_type: String(process.env.NEXT_PUBLIC_RESPONSE_TYPE),
            client_id: String(process.env.NEXT_PUBLIC_CLIENT_ID),
            redirect_uri: process.env.NODE_ENV === 'development' ? String(process.env.NEXT_PUBLIC_REDIRECT_DEV_URI) : String(process.env.NEXT_PUBLIC_REDIRECT_PROD_URI),
            scope: String(process.env.NEXT_PUBLIC_SCOPES)
        }).toString()

       return location.href = `https://accounts.spotify.com/authorize?${queryString}`
    }
})