import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { spotifyApi } from '@/api/api'
import { SpotifyFavoriteTracksData, SpotifyPlaylistsData } from "@/types/SpotifyData";

export const fetchPlaylists = createAsyncThunk('/user/playlists', async() => {
    const {data} = await spotifyApi.fetchPlaylists()
    return data
})

export interface FetchFavoriteTracksParamsData {
    limit: number
    timeRange: string
}

export const fetchFavoriteTracks = createAsyncThunk('/user/favoriteTracks', async(params: FetchFavoriteTracksParamsData) => {
    const { data } = await spotifyApi.fetchFavoriteTracks(params.limit, params.timeRange)
    return data
})

const initialState = {
    playlistsData: [] as SpotifyPlaylistsData[],
    favoriteTracksData: [] as SpotifyFavoriteTracksData[],
    status: 'loading',
}

const statisticSlice = createSlice({
    name: 'statistic',
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
        builder.addCase(fetchFavoriteTracks.pending, (state) => {
            state.favoriteTracksData = []
            state.status = 'loading'
        })
        builder.addCase(fetchFavoriteTracks.rejected, (state) => {
            state.favoriteTracksData = []
            state.status = 'error'
        })
        builder.addCase(fetchFavoriteTracks.fulfilled, (state, action) => {
            state.favoriteTracksData = action.payload
            state.status = 'loaded'
        })  
    }
})

export default statisticSlice.reducer