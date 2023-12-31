'use client';

import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchFavoriteTracks } from '@/redux/slices/statisticSlice';
import { useAuth } from '@/hooks/useAuth';
import { FetchTypes } from '@/types/EnumsData';

import ItemsTableSkeleton from '@/components/ui/ItemsTable/ItemsTableSkeleton';
import FavoriteTrackItem from '@/components/pages/FavoriteTracks/FavoriteTracksItem/FavoriteTracksItem';
import PageTabs from '@/components/ui/PageTabs/PageTabs';
import { PageProvider } from '@/components/PageProvider/PageProvider';
import { Box } from '@mui/material';

export const FavoriteTracks: FC = () => {
  const dispatch = useAppDispatch();
  const { loginData } = useAuth();
  const favoriteTracksData = useAppSelector((state) => state.statistic.favoriteTracksData);
  const error = useAppSelector((state) => state.statistic.error);
  const fetchStatus = useAppSelector((state) => state.statistic.status);

  const [params, setParams] = useState({
    limit: 50,
    timeRange: 'short_term'
  });

  useEffect(() => {
    if (loginData) {
      dispatch(
        fetchFavoriteTracks({
          loginData,
          params
        })
      );
    }
  }, [params, loginData]);

  const handleTabChange = (timeRange: string) => {
    setParams({
      ...params,
      timeRange
    });
  };

  return (
    <PageProvider error={error}>
      <PageTabs handleTabChange={handleTabChange} />
      {fetchStatus === FetchTypes.LOADING ? (
        <ItemsTableSkeleton />
      ) : (
        <Box className="gridContainer">
          {favoriteTracksData.map((track, index) => (
            <FavoriteTrackItem trackItem={track} index={index} key={index} />
          ))}
        </Box>
      )}
    </PageProvider>
  );
};

export default FavoriteTracks;
