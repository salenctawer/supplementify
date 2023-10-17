'use client'

import { useAuth } from "@/hooks/useAuth"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { fetchFavoriteArtists } from "@/redux/slices/statisticSlice"
import { FC, useEffect, useState } from "react"

import { FetchTypes } from "@/types/EnumsData"

import { PageProvider } from "@/components/PageProvider/PageProvider"
import PageTabs from "@/components/ui/PageTabs/PageTabs"
import FavoriteArtistItem from "@/components/pages/FavoriteArtists/FavoriteArtistItem/FavoriteArtistItem"
import { Grid } from "@mui/material"
import FavoriteArtistSkeleton from "@/components/pages/FavoriteArtists/FavoriteArtistSkeleton/FavoriteArtistSkeleton"
import useMedia from "@/styles/useMedia"
import styles from './FavoriteArtists.module.scss'


export const FavoriteArtists: FC = () => {
    const { mdSize } = useMedia()
    const { loginData } = useAuth()
    const dispatch = useAppDispatch()
    const error = useAppSelector(state => state.statistic.error)
    const favoriteArtistsData = useAppSelector(state => state.statistic.favoriteArtistsData)
    const fetchStatus = useAppSelector(state => state.statistic.status)
    const [params, setParams] = useState({
        limit: 50,
        timeRange: 'short_term'
    })

    const handleTabChange = (timeRange: string) => {
        setParams({
            ...params,
            timeRange
        })
    }

    useEffect(() => {
        if (loginData) {
            dispatch(fetchFavoriteArtists({
                loginData,
                params
            }))
        }
    }, [params, loginData])

    return <PageProvider error={error}>
        <PageTabs handleTabChange={handleTabChange} />
        {
            fetchStatus === FetchTypes.LOADING ? <FavoriteArtistSkeleton /> :
                <Grid className={styles.container} container spacing={4}>
                    {
                        favoriteArtistsData.map((artist, index) => (
                            <Grid item xs={12} md={6} lg={4}>
                                <FavoriteArtistItem artist={artist} index={index} key={index} />
                            </Grid>
                        ))
                    }
                </Grid>
        }
    </PageProvider>
}

export default FavoriteArtists