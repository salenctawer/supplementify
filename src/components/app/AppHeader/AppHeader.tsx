'use client'

import { FC, useEffect } from "react"

import { Box, AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchUserInfo } from "@/redux/slices/userSlice";



export const AppHeader: FC = () => {
    const dispatch = useAppDispatch()
    const userInfo = useAppSelector(state => state.user.userInfo)

    useEffect(() => {
        dispatch(fetchUserInfo())
    }, [])

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
                   <div></div>
                    : <Button color="inherit">Login</Button>
                }
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default AppHeader