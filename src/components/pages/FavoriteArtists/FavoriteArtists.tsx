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


export const FavoriteArtists: FC = () => {
    const {loginData} = useAuth()
    const dispatch = useAppDispatch()
    const error = useAppSelector(state => state.statistic.error)
    const favoriteArtistsData = useAppSelector(state => state.statistic.favoriteArtistsData)
    const fetchStatus = useAppSelector(state => state.statistic.status)
    const [params, setParams]= useState({
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
        if(loginData) {
            dispatch(fetchFavoriteArtists({
                loginData, 
                params
            }))
        }
    }, [params, loginData])

    return <PageProvider error={error}>
        <PageTabs handleTabChange={handleTabChange}/>
        <Grid container spacing={2}>
        {
                fetchStatus === FetchTypes.LOADING ? <div>Загрузка</div> : // TODO: сделать скелетон
                favoriteArtistsData.map((artist, index) => (
                    <Grid item xs={4}>
                        <FavoriteArtistItem artist={artist} index={index} key={index}/>
                    </Grid>
                ))
            }
        </Grid>
    </PageProvider>
}

export default FavoriteArtists