'use client'

import React, { FC, useEffect, useMemo, useState } from "react"

import { Box, AppBar, Toolbar, Typography, Button, Avatar, useTheme, SwipeableDrawer, List, ListItem } from "@mui/material"
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchUserInfo, fetchAuthUrl } from "@/redux/slices/userSlice";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from 'next/navigation'

import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { ColorModeContext } from "@/styles/themeBuilder"
import { ModeTypes } from "@/types/EnumsData";

import styles from './AppHeader.module.scss'
import useMedia from "@/styles/useMedia";
import { IconComponent } from "@/components/ui/IconComponent/IconComponent";


export const AppHeader: FC = () => {
    const theme = useTheme()
    const { toggleColorMode } = React.useContext(ColorModeContext)
    const dispatch = useAppDispatch()
    const userInfo = useAppSelector(state => state.user.userInfo)
    const { isAuth, loginData, accessToken, setStoreLoginData } = useAuth()
    const router = useRouter()
    const [scrollTop, setScrollTop] = useState(0);
    const { mdSize } = useMedia()
    const [isOpenDrawer, setIsOpenDrawer] = useState(false)

    useEffect(() => {
        if (isAuth) {
            dispatch(fetchUserInfo(loginData))
        }
    }, [isAuth])

    useEffect(() => {
        if (accessToken && !loginData) {
            setStoreLoginData()
        }
    }, [accessToken, loginData])

    const isDarkMode = useMemo(() => {
        return theme.palette.mode === ModeTypes.DARK
    }, [theme.palette.mode])

    useEffect(() => {
        const handleScroll = () => {
          setScrollTop(window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    const onLogoutClick = () => {
        router.push('/logout')
    }

    const toggleMode = () => {
        toggleColorMode()
    }

    const onLoginClick = async () => {
        const data = await dispatch(fetchAuthUrl())

        if (!data.payload) {
            return alert('Ошибка авторизации') // редирект на страницу с ошибкой
        }

        return router.push(data.payload)
    }

    const toggleDrawer = (state: boolean) => {
        setIsOpenDrawer(state)
    }



    return (
    <Box className={`${scrollTop > 64 ? styles.headerFixed : styles.header}`} >
            <AppBar position="static" sx={{ borderRadius: theme.shape }}>
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                    {
                        mdSize ? <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    Supplementify
                                </Typography>
                                :
                            <SidebarDrawer toggleDrawer={toggleDrawer} isOpen={isOpenDrawer}/>
                    }
                    <Box sx={{display: 'flex'}}>
                        <DarkModeSwitch
                            style={{ margin: 'auto 16px auto 0' }}
                            checked={isDarkMode}
                            onChange={toggleMode}
                            size={24}
                        />
                        {
                            userInfo ?
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar src={userInfo.images[0].url} />
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        {userInfo.display_name}
                                        <Button color="inherit" onClick={onLogoutClick}>Logout</Button>
                                    </Box>
                                </Box>
                                : <Button color="inherit" onClick={onLoginClick}>Login</Button>
                        }
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

interface SidebarDrawerProps {
    toggleDrawer: (state: boolean) => void
    isOpen: boolean
}

const SidebarDrawer: FC<SidebarDrawerProps> = (props) => {
    const sidebarTabs = useAppSelector(state => state.sidebar.sidebarAuthTabs)
    const {toggleDrawer, isOpen} = props

    return (
        <div>   
            <Button onClick={() => toggleDrawer(true)}>
                <IconComponent iconName="MenuOutlined"/>
            </Button>
            <SwipeableDrawer
                anchor="left"
                open={isOpen}
                onClose={() => toggleDrawer(false)}
                onOpen={() => toggleDrawer(true)}
            >
                <Box
                    role="presentation"
                    onClick={() => toggleDrawer(false)}
                    onKeyDown={() => toggleDrawer(false)}
                >
                    <List>
                        {
                            sidebarTabs.map((item) => (
                                <ListItem key={item.name}>
                                    {item.name}
                                </ListItem>
                            ))
                        }
                    </List>
                </Box>
            </SwipeableDrawer>
        </div>
    )
}


export default AppHeader