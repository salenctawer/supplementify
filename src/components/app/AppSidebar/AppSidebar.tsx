'use client';

import React, { FC, useMemo } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { SidebarTabItemData } from '@/types/SidebarData';

import { IconComponent } from '@/components/ui/IconComponent/IconComponent';
import { Button, Typography, Box, useTheme } from '@mui/material';

import styles from './AppSidebar.module.scss';
import useMedia from '@/styles/useMedia';

export const AppSidebar: FC = () => {
  const router = useRouter();
  const { xlSize } = useMedia();
  const theme = useTheme();
  const sidebarTabs = useAppSelector((state) => state.sidebar.sidebarAuthTabs);

  const backgroundTheme = useMemo(() => {
    return theme.palette.primary.main;
  }, [theme.palette.primary.main]);

  const onItemClick = (item: SidebarTabItemData) => {
    router.push(item.routeName);
  };

  return (
    <Box
      className={xlSize ? styles.sidebarDesktop : styles.sidebar}
      sx={{ backgroundColor: backgroundTheme }}>
      {sidebarTabs.map((item) => (
        <Button onClick={() => onItemClick(item)} className={styles.item} key={item.name}>
          <IconComponent iconName={item.icon} />
          <Typography className={styles.itemText}>{item.name}</Typography>
        </Button>
      ))}
    </Box>
  );
};

export default AppSidebar;
