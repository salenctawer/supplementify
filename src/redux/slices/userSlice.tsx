import { spotifyApi } from "@/api/api"
import { FetchTypes } from "@/types/EnumsData"
import { SpotifyUserData } from "@/types/SpotifyData"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchUserInfo = createAsyncThunk('/user/info', async() => {
	const { data } = await spotifyApi.fetchUserInfo()

	return data
})

export const fetchAuthUser = createAsyncThunk('/user/auth', async() => {
	const { data } = await spotifyApi.fetchAuthUser()

	return data
})

const initialState = {
    accessToken: '',
	userInfo: null as null | SpotifyUserData,
    redirectUrl: '',
	status: 'loading' as FetchTypes,
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setAccessToken: (state, action) => {
			state.accessToken = action.payload
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
        // authUser
        builder.addCase(fetchAuthUser.pending, (state) => {
            state.redirectUrl = ''
            state.status = FetchTypes.LOADING
        })
        builder.addCase(fetchAuthUser.rejected, (state) => {
            state.redirectUrl = ''
            state.status = FetchTypes.REJECTED
        })
        builder.addCase(fetchAuthUser.fulfilled, (state, action) => {
            state.redirectUrl = action.payload
            state.status = FetchTypes.FULFILED
        })
	}
})

export const { actions: userActions} = userSlice

export const allUserActions = {
    ...userActions
}

export default userSlice.reducer