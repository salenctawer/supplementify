import { spotifyApi } from "@/api/api"
import { FetchTypes } from "@/types/EnumsData"
import { SpotifyUserData } from "@/types/SpotifyData"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchUserInfo = createAsyncThunk('/user/info', async() => {
	const { data } = await spotifyApi.fetchUserInfo()

	return data
})

const initialState = {
    accessToken: '',
	userInfo: null as null | SpotifyUserData,
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
	}
})

export const { actions: userActions} = userSlice

export const allUserActions = {
    ...userActions
}

export default userSlice.reducer