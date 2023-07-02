import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { spotifyApi } from '@/api/api'
import { SpotifyFavoriteTracksData, SpotifyPlaylistsData } from "@/types/SpotifyData";

export enum FetchTypes {
    fulfilled = 'loaded',
    LOADING = 'loading',
    REJECTED = 'error'
}

export interface FetchFavoriteTracksParamsData {
    limit: number
    timeRange: string
}

export const fetchPlaylists = createAsyncThunk('/user/playlists', async() => {
    const {data} = await spotifyApi.fetchPlaylists()
    return data
})


export const fetchFavoriteTracks = createAsyncThunk('/user/favoriteTracks', async(params: FetchFavoriteTracksParamsData) => {
    const { data } = await spotifyApi.fetchFavoriteTracks(params.limit, params.timeRange)
    return data
})

const initialState = {
    playlistsData: null as null | SpotifyPlaylistsData,
    favoriteTracksData: null as null | SpotifyFavoriteTracksData,
    status: 'loading' as FetchTypes,
}

const statisticSlice = createSlice({
    name: 'statistic',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPlaylists.pending, (state) => {
            state.playlistsData = null
            state.status = FetchTypes.LOADING
        })
        builder.addCase(fetchPlaylists.rejected, (state) => {
            state.playlistsData = null
            state.status = FetchTypes.REJECTED
        })
        builder.addCase(fetchPlaylists.fulfilled, (state, action) => {
            state.playlistsData = action.payload
            state.status = FetchTypes.fulfilled
        })
        builder.addCase(fetchFavoriteTracks.pending, (state) => {
            state.favoriteTracksData = null
            state.status = FetchTypes.LOADING
        })
        builder.addCase(fetchFavoriteTracks.rejected, (state) => {
            state.favoriteTracksData = null
            state.status = FetchTypes.REJECTED
        })
        builder.addCase(fetchFavoriteTracks.fulfilled, (state, action) => {
            state.favoriteTracksData = action.payload
            state.status = FetchTypes.fulfilled
        })  
    }
})

export default statisticSlice.reducer