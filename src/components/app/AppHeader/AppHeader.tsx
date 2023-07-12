'use client'

import { FC } from "react"

import { Box, AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';


export const AppHeader: FC = () => {

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
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default AppHeader