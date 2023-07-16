'use client'

import { FC, useEffect } from "react"

import { Box, AppBar, Toolbar, IconButton, Typography, Button, Avatar } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchUserInfo } from "@/redux/slices/userSlice";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from 'next/navigation'



export const AppHeader: FC = () => {
    const dispatch = useAppDispatch()
    const userInfo = useAppSelector(state => state.user.userInfo)
    const { redirectToSpotifyLogin, accessStorageToken, accessStoreToken } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if(accessStorageToken && accessStoreToken) {
            dispatch(fetchUserInfo())
        }
    }, [accessStorageToken, accessStoreToken])

    const onLogoutClick = () => {
        router.push('/logout')
    }

    return (
        <Box sx={{ flexGrow: 1, marginBottom: 4 }}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Supplementify
                </Typography>
                {
                    userInfo ?
                   <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={userInfo.images[0].url}/>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        { userInfo.display_name }
                        <Button color="inherit" onClick={onLogoutClick}>Logout</Button>
                    </Box>
                   </Box>
                    : <Button color="inherit" onClick={() => redirectToSpotifyLogin()}>Login</Button>
                }
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default AppHeader