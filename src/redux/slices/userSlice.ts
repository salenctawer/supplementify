import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { spotifyApi } from '@/api/api'

export const fetchPlaylists = createAsyncThunk('/user/playlists', async(params) => {
    const {data} = await spotifyApi.fetchPlaylists()
    return data
})

const initialState = {
    data: [] as any,
    status: 'loading'
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        
    }
})