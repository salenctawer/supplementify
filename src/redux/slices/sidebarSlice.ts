import { createSlice } from "@reduxjs/toolkit"
import * as MuiIcons from '@mui/icons-material'

export type Icon = keyof typeof MuiIcons

export interface SidebarTabItemData {
    name: string
    routeName?: string
    icon: Icon,
}

const initialState = {
    sidebarAuthTabs: [
        {
            name: 'Home',
            routeName: '/',
            icon: 'HomeOutlined',
        },
        {
            name: 'Favorite Tracks',
            routeName: '/favorite-tracks/short-term',
            icon: 'AudiotrackOutlined',
        }, 
        {
            name: 'Favorite Artists',
            routeName: '/favorite-artists/short-term',
            icon: 'PersonOutlined',
        },
        {
            name: 'Recently Played',
            routeName: '/recents',
            icon: 'HeadphonesOutlined',
        },
        {
            name: 'Light Mode',
            icon: 'PersonOutlined',
        }, 
        {
            name: 'Logout',
            routeName: '/logout',
            icon: 'LogoutOutlined',
        },
    ] as SidebarTabItemData[], 
    sidebarNonAuthTabs: [
        {
            name: 'Home',
            routeName: '/',
            icon: 'HomeOutlined',
        },
        {
            name: 'Light Mode',
            icon: 'PersonOutlined',
        }, 
        {
            name: 'Login',
            routeName: '/login',
            icon: 'LoginOutlined'
        },
    ] as SidebarTabItemData[]
}

const sidebarSlice = createSlice({
	name: "sidebar",
	initialState,
	reducers: {}
})

export default sidebarSlice.reducer