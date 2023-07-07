import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { spotifyApi } from '@/api/api'
import { SpotifyFavoriteTracksData, SpotifyPlaylistsData } from "@/types/SpotifyData";

export enum FetchTypes {
    FULFILED = 'loaded',
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

export const fetchRecentlyPlayed = createAsyncThunk('/user/recently', async(limit: number) => {
    const { data } = await spotifyApi.fetchRecentlyPlayed(limit)
    return data
})

const initialState = {
    playlistsData: null as null | SpotifyPlaylistsData,
    favoriteTracksData: null as null | SpotifyFavoriteTracksData,
    recentlyPlayedData: null as null | any,
    status: 'loading' as FetchTypes,
    error: null as null | Error
}

const statisticSlice = createSlice({
    name: 'statistic',
    initialState,
    reducers: {
        nextStep:(state) => {
            const qwe = 1
        }
    },
    extraReducers: (builder) => {
        // playlists
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
            state.status = FetchTypes.FULFILED
        })
        /// tracks
        builder.addCase(fetchFavoriteTracks.pending, (state) => {
            state.favoriteTracksData = null
            state.status = FetchTypes.LOADING
        })
        builder.addCase(fetchFavoriteTracks.rejected, (state, action) => {
            state.favoriteTracksData = null
            state.status = FetchTypes.REJECTED
            if(action.error) {
                state.error = action.error
            }
        })
        builder.addCase(fetchFavoriteTracks.fulfilled, (state, action) => {
            state.favoriteTracksData = action.payload
            state.status = FetchTypes.FULFILED
        })
        // recently
        builder.addCase(fetchRecentlyPlayed.pending, (state) => {
            state.recentlyPlayedData = null
            state.status = FetchTypes.LOADING
        })
        builder.addCase(fetchRecentlyPlayed.rejected, (state, action) => {
            state.recentlyPlayedData = null
            state.status = FetchTypes.REJECTED
            if(action.error) {
                state.error = action.error
            }
        })
        builder.addCase(fetchRecentlyPlayed.fulfilled, (state, action) => {
            state.recentlyPlayedData = action.payload
            state.status = FetchTypes.FULFILED
        })
    }
})

export const { actions: statisticActions} = statisticSlice

export const allStatisticActions = {
    ...statisticActions
}

export default statisticSlice.reducer