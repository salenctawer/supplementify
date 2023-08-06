import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
})

const PLAYLISTS_ENDPOINT = 'v1/me/playlists'
const FAVORITE_TRACKS_ENDPOINT = 'v1/me/top/tracks'
const RECENTLY_PLAYED_ENDPOINT = 'v1/me/player/recently-played'
const USER_INFO_ENDPOINT = '/userinfo'
const AUTH_URL_ENDPOINT = '/authurl'
const USER_LOGIN_ENDPOINT = '/login'

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
    },
    fetchUserInfo() {
        const data = {
            refresh_token: localStorage.getItem('refreshToken'),
            token_type: localStorage.getItem('tokenType'),
            expiry: localStorage.getItem('expiry')
        }

        return instance.post(USER_INFO_ENDPOINT, data)
    },
    fetchAuthUrl() {
        return instance.get(AUTH_URL_ENDPOINT)
    },
    fetchLogin(code: string, state: string) {
        return instance.get(USER_LOGIN_ENDPOINT, {
            params: {
                code,
                state,
            }
        })
    }
}

instance.interceptors.request.use((config: any) => { //TODO: типизировать
    if(window.localStorage.getItem('accessToken')) {
        config.headers.Authorization = 'Bearer ' + window.localStorage.getItem('accessToken');
        config.headers['Content-Type'] = 'multipart/form-data; charset=utf-8'
        return config;
    }

    return config
})
