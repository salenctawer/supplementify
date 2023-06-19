import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { spotifyApi } from '@/api/api'

export const fetchPlaylists = createAsyncThunk('/user/playlists', async() => {
    const {data} = await spotifyApi.fetchPlaylists()
    return data
})

const initialState = {
    playlistsData: [] as any, //типизировать
    status: 'loading'
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPlaylists.pending, (state) => {
            state.playlistsData = []
            state.status = 'loading'
        })
        builder.addCase(fetchPlaylists.rejected, (state) => {
            state.playlistsData = []
            state.status = 'error'
        })
        builder.addCase(fetchPlaylists.fulfilled, (state, action) => {
            state.playlistsData = action.payload
            state.status = 'loaded'
        }) 
    }
})

export default userSlice.reducer