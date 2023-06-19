import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.spotify.com'
})

const PLAYLISTS_ENDPOINT = 'v1/me/playlists'

export const spotifyApi = {
    fetchPlaylists() {
        return instance.get(PLAYLISTS_ENDPOINT)
    }
}