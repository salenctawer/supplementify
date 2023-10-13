import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { spotifyApi } from '@/api/api'
import { SpotifyTracksItemData, SpotifyPlaylistsData, SpotifyFavoriteArtistItemData, SpotifyRecentlyPlayedItemData } from "@/types/SpotifyData";
import { FetchTypes } from "@/types/EnumsData";
import { LoginData } from "@/types/UserData";

export interface FetchFavoriteTracksParamsData {
    limit: number
    timeRange: string
}

// export const fetchPlaylists = createAsyncThunk('/user/playlists', async () => {
//     const { data } = await spotifyApi.fetchPlaylists()
//     return data
// })

export interface FetchFavoriteTracksData {
    loginData: LoginData | null
    params: FetchFavoriteTracksParamsData
}

export const fetchFavoriteTracks = createAsyncThunk('/user/favoriteTracks', async (payloadData: FetchFavoriteTracksData) => {
    const { data } = await spotifyApi.fetchFavoriteTracks(payloadData.loginData, payloadData.params)
    return data
})

export interface FetchRecentsData {
    loginData: LoginData | null
    params: {
        limit: number
    }
}

export const fetchRecentlyPlayed = createAsyncThunk('/user/recently', async (payloadData: FetchRecentsData) => {
    const { data } = await spotifyApi.fetchRecentlyPlayed(payloadData.loginData, payloadData.params)
    return data
})

export interface FetchFavoriteArtistsData{
    params: any
    loginData: LoginData | null
}

export const fetchFavoriteArtists = createAsyncThunk('/user/favoriteArtists', async(payloadData: FetchFavoriteArtistsData) => {
    const { data } = await spotifyApi.fetchFavoriteArtists(payloadData.loginData, payloadData.params)
    return data
})

const initialState = {
    playlistsData: null as null | SpotifyPlaylistsData,
    favoriteTracksData: [] as SpotifyTracksItemData[],
    favoriteArtistsData: [] as SpotifyFavoriteArtistItemData[],
    recentlyPlayedData: null as null | SpotifyRecentlyPlayedItemData[],
    status: 'loading' as FetchTypes,
    error: null as null | Error
}

const statisticSlice = createSlice({
    name: 'statistic',
    initialState,
    reducers: {
        nextStep: (state) => {
            const qwe = 1
        }
    },
    extraReducers: (builder) => {
        // playlists
        // builder.addCase(fetchPlaylists.pending, (state) => {
        //     state.playlistsData = null
        //     state.status = FetchTypes.LOADING
        // })
        // builder.addCase(fetchPlaylists.rejected, (state) => {
        //     state.playlistsData = null
        //     state.status = FetchTypes.REJECTED
        // })
        // builder.addCase(fetchPlaylists.fulfilled, (state, action) => {
        //     state.playlistsData = action.payload
        //     state.status = FetchTypes.FULFILED
        // })

        //artists
        builder.addCase(fetchFavoriteArtists.pending, (state) => {
            state.favoriteArtistsData = []
            state.status = FetchTypes.LOADING
            state.error = null
        })
        builder.addCase(fetchFavoriteArtists.rejected, (state, action) => {
            state.favoriteArtistsData = []
            state.status = FetchTypes.REJECTED
            if (action.error) {
                state.error = action.error
            }
        })
        builder.addCase(fetchFavoriteArtists.fulfilled, (state, action) => {
            state.favoriteArtistsData = action.payload
            state.status = FetchTypes.FULFILED
            state.error = null
        })

        /// tracks
        builder.addCase(fetchFavoriteTracks.pending, (state) => {
            state.favoriteTracksData = []
            state.status = FetchTypes.LOADING
            state.error = null
        })
        builder.addCase(fetchFavoriteTracks.rejected, (state, action) => {
            state.favoriteTracksData = []
            state.status = FetchTypes.REJECTED
            if (action.error) {
                state.error = action.error
            }
        })
        builder.addCase(fetchFavoriteTracks.fulfilled, (state, action) => {
            state.favoriteTracksData = action.payload
            state.status = FetchTypes.FULFILED
            state.error = null
        })

        // recently
        builder.addCase(fetchRecentlyPlayed.pending, (state) => {
            state.recentlyPlayedData = null
            state.status = FetchTypes.LOADING
            state.error = null
        })
        builder.addCase(fetchRecentlyPlayed.rejected, (state, action) => {
            state.recentlyPlayedData = null
            state.status = FetchTypes.REJECTED
            if (action.error) {
                state.error = action.error
            }
        })
        builder.addCase(fetchRecentlyPlayed.fulfilled, (state, action) => {
            state.recentlyPlayedData = action.payload
            state.status = FetchTypes.FULFILED
            state.error = null
        })
    }
})

export const { actions: statisticActions } = statisticSlice

export const allStatisticActions = {
    ...statisticActions
}

export default statisticSlice.reducer