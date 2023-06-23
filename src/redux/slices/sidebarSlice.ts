import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    sidebarAuthTabs: [
        {
            name: 'Home',
            routeName: '/',
            needAuth: false,
        },
        {
            name: 'Favorite Tracks',
            routeName: '/favorite-tracks/short-term',
            needAuth: true,
        }, 
        {
            name: 'Favorite Artists',
            routeName: '/favorite-artists/short-term',
            needAuth: true,
        },
        {
            name: 'Recently Played',
            routeName: '/recents',
            needAuth: true,
        },
        {
            name: 'Light Mode',
            needAuth: false
        }, 
        {
            name: 'Logout',
            routeName: '/logout',
            needAuth: true,
        },
    ], 
    sidebarNonAuthTabs: [
        {
            name: 'Home',
            routeName: '/',
            needAuth: false,
        },
        {
            name: 'Light Mode',
            needAuth: false
        }, 
        {
            name: 'Login',
            routeName: '/login',
            needAuth: false,
        },
    ]
}

const sidebarSlice = createSlice({
	name: "sidebar",
	initialState,
	reducers: {}
})

export default sidebarSlice.reducer