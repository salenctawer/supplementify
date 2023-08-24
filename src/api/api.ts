import { FetchFavoriteTracksParamsData } from '@/redux/slices/statisticSlice'
import { LoginData } from '@/types/UserData'
import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
})

const PLAYLISTS_ENDPOINT = 'v1/me/usertopartists'
const FAVORITE_TRACKS_ENDPOINT = '/usertoptracks'
const RECENTLY_PLAYED_ENDPOINT = '/recentlyplayedtracks'
const USER_INFO_ENDPOINT = '/userinfo'
const AUTH_URL_ENDPOINT = '/authurl'
const USER_LOGIN_ENDPOINT = '/login'

export const spotifyApi = {
    fetchPlaylists() {
        return instance.get(PLAYLISTS_ENDPOINT)
    },
    fetchFavoriteTracks(loginData: LoginData | null, params: FetchFavoriteTracksParamsData) {
        const data = {
            token_type: loginData?.token_type,
            refresh_token: loginData?.refresh_token,
            expiry: loginData?.expiry
        }
        
        return instance.post(FAVORITE_TRACKS_ENDPOINT, data, {
            params: {
                limit: params.limit,
                time_range: params.timeRange,
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
    fetchUserInfo(body: LoginData | null) {
        const data = {
            token_type: body?.token_type,
            refresh_token: body?.refresh_token,
            expiry: body?.expiry
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
    if (window.localStorage.getItem('accessToken')) {
        config.headers.Authorization = 'Bearer ' + window.localStorage.getItem('accessToken');
        config.headers['Content-Type'] = 'multipart/form-data; charset=utf-8'

        console.log(config.headers['Content-Type'])
        return config;
    }

    return config
})
