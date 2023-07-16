'use client'

import { FC, useEffect } from "react"

import { Box, AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';


export const AppHeader: FC = () => {

    useEffect(() => {

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
                <div>

                    <Button color="inherit">Login</Button>
                </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default AppHeader