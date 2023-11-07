'use client';

import React, { FC, useEffect, useMemo, useState } from 'react';

import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  useTheme,
  SwipeableDrawer,
  List
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchUserInfo, fetchAuthUrl } from '@/redux/slices/userSlice';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { ColorModeContext } from '@/styles/themeBuilder';
import { ModeTypes } from '@/types/EnumsData';

import styles from './AppHeader.module.scss';
import useMedia from '@/styles/useMedia';
import { IconComponent } from '@/components/ui/IconComponent/IconComponent';
import { SidebarTabItemData } from '@/types/SidebarData';

export const AppHeader: FC = () => {
  const theme = useTheme();
  const { toggleColorMode } = React.useContext(ColorModeContext);
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const { isAuth, loginData, accessToken, setStoreLoginData } = useAuth();
  const router = useRouter();
  const [scrollTop, setScrollTop] = useState(0);
  const { mdSize } = useMedia();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchUserInfo(loginData));
    }
  }, [isAuth]);

  useEffect(() => {
    if (accessToken && !loginData) {
      setStoreLoginData();
    }
  }, [accessToken, loginData]);

  const isDarkMode = useMemo(() => {
    return theme.palette.mode === ModeTypes.DARK;
  }, [theme.palette.mode]);

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
    router.push('/logout');
  };

  const toggleMode = () => {
    toggleColorMode();
  };

  const onLoginClick = async () => {
    const data = await dispatch(fetchAuthUrl());

    if (!data.payload) {
      return alert('Ошибка авторизации'); // редирект на страницу с ошибкой
    }

    return router.push(data.payload);
  };

  const toggleDrawer = (state: boolean) => {
    setIsOpenDrawer(state);
  };

  const onItemClick = (item: SidebarTabItemData) => {
    router.push(item.routeName);
  };

  return (
    <Box className={`${scrollTop > 64 ? styles.headerFixed : styles.header}`}>
      <AppBar position="static" sx={{ borderRadius: theme.shape }}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: '8px',
            paddingBottom: '8px'
          }}>
          {mdSize ? (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff' }}>
              Supplementify
            </Typography>
          ) : (
            <SidebarDrawer
              isOpen={isOpenDrawer}
              onOpen={() => toggleDrawer(true)}
              onClose={() => toggleDrawer(false)}
              onItemClick={onItemClick}
            />
          )}
          <Box sx={{ display: 'flex' }}>
            <DarkModeSwitch
              style={{ margin: 'auto 16px auto 0' }}
              checked={isDarkMode}
              onChange={toggleMode}
              size={24}
            />
            {userInfo ? (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src={userInfo.images[0].url} sx={{ width: '52px', height: '52px' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography sx={{ color: '#fff', fontSize: '18px' }}>
                    {userInfo.display_name}
                  </Typography>
                  <Button color="secondary" onClick={onLogoutClick} sx={{ fontSize: '14px' }}>
                    Logout
                  </Button>
                </Box>
              </Box>
            ) : (
              <Box>
                <Button color="secondary" onClick={onLoginClick}>
                  Login
                </Button>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

interface SidebarDrawerProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onItemClick: (item: SidebarTabItemData) => void;
}

const SidebarDrawer: FC<SidebarDrawerProps> = (props) => {
  const sidebarTabs = useAppSelector((state) => state.sidebar.sidebarAuthTabs);
  const theme = useTheme();
  const { onOpen, onClose, isOpen, onItemClick } = props;

  const drawerBackground = theme.palette.primary.main;

  const iconStyles = {
    color: theme.palette.secondary.main,
    width: '24px',
    height: '24px'
  };

  return (
    <div>
      <Button onClick={onOpen}>
        <IconComponent iconName="MenuOutlined" />
      </Button>
      <SwipeableDrawer
        anchor="left"
        open={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        PaperProps={{
          sx: {
            backgroundColor: drawerBackground
          }
        }}>
        <Box role="presentation" onClick={onClose} onKeyDown={onClose}>
          <List>
            {sidebarTabs.map((item) => (
              <Box sx={{ padding: '8px 16px' }} key={item.name}>
                <Button onClick={() => onItemClick(item)} className={styles.item} key={item.name}>
                  <IconComponent iconName={item.icon} styles={iconStyles} />
                  <Typography sx={{ marginLeft: '16px', color: 'secondary.main' }}>
                    {item.name}
                  </Typography>
                </Button>
              </Box>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </div>
  );
};

export default AppHeader;
