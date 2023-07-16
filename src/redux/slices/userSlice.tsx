import { spotifyApi } from "@/api/api"
import { FetchTypes } from "@/types/EnumsData"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Error from "next/error"

export const fetchUserInfo = createAsyncThunk('/user/info', async() => {
	const { data } = await spotifyApi.fetchUserInfo()

	return data
})

const initialState = {
    accessToken: '',
	userInfo: {} as any, //TODO типы
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
		// playlists
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