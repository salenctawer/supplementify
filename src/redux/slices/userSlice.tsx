import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { spotifyApi } from "@/api/api"
import { FetchTypes } from "@/types/EnumsData"
import { SpotifyUserData } from "@/types/SpotifyData"
import { LoginData } from "@/types/UserData"

export const fetchUserInfo = createAsyncThunk('/user/info', async(body: LoginData | null) => {
	const { data } = await spotifyApi.fetchUserInfo(body)

	return data
})

export const fetchAuthUrl = createAsyncThunk('/user/authurl', async() => {
	const { data } = await spotifyApi.fetchAuthUrl()

	return data
})

export interface FetchLoginParams {
    code: string
    state: string
}

export const fetchLogin = createAsyncThunk('/user/login', async(params: FetchLoginParams) => {
    const { data } = await spotifyApi.fetchLogin(params.code, params.state)

    return data
})

const initialState = {
	userInfo: null as null | SpotifyUserData,
    redirectUrl: '',
	status: 'loading' as FetchTypes,
    loginData: null as null | LoginData
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setLoginData: (state, action) => {
            if(!action.payload) {
                state.loginData = null
            }
            else if(action.payload.access_token && action.payload.token_type && action.payload.refresh_token && action.payload.expiry) {
                state.loginData = action.payload
            }
            else {
                state.loginData = null
            }
			
		}
	},
	extraReducers: (builder) => {
		// userInfo
        builder.addCase(fetchUserInfo.pending, (state) => {
            state.userInfo = null
            state.status = FetchTypes.LOADING
        })
        builder.addCase(fetchUserInfo.rejected, (state) => {
            state.userInfo = null
            state.status = FetchTypes.REJECTED
        })
        builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
            state.userInfo = action.payload
            state.status = FetchTypes.FULFILED
        })
        // authUrl
        builder.addCase(fetchAuthUrl.pending, (state) => {
            state.redirectUrl = ''
            state.status = FetchTypes.LOADING
        })
        builder.addCase(fetchAuthUrl.rejected, (state) => {
            state.redirectUrl = ''
            state.status = FetchTypes.REJECTED
        })
        builder.addCase(fetchAuthUrl.fulfilled, (state, action) => {
            state.redirectUrl = action.payload
            state.status = FetchTypes.FULFILED
        })
        // login
        builder.addCase(fetchLogin.pending, (state) => {
            state.loginData = null
            state.status = FetchTypes.LOADING
        })
        builder.addCase(fetchLogin.rejected, (state) => {
            state.loginData = null
            state.status = FetchTypes.REJECTED
        })
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            state.loginData = action.payload
            state.status = FetchTypes.FULFILED
        })
	}
})

export const { actions: userActions} = userSlice

export const allUserActions = {
    ...userActions
}

export default userSlice.reducer