import { SidebarTabItemData } from "@/types/SidebarData"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    sidebarAuthTabs: [
        {
            name: 'Home',
            routeName: '/',
            icon: 'HomeOutlined',
        },
        {
            name: 'Favorite Tracks',
            routeName: '/favorite-tracks',
            icon: 'AudiotrackOutlined',
        }, 
        {
            name: 'Favorite Artists',
            routeName: '/favorite-artists',
            icon: 'PersonOutlined',
        },
        {
            name: 'Recently Played',
            routeName: '/recents',
            icon: 'HeadphonesOutlined',
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