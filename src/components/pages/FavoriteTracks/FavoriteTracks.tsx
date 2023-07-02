'use client'

import { FC, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { fetchFavoriteTracks } from "@/redux/slices/statisticSlice"

import ItemsTable from "@/components/ui/ItemsTable/ItemsTable"
import FavoriteTrackItem from "@/components/pages/FavoriteTracks/FavoriteTracksItem/FavoriteTracksItem"
import PageContainer from "@/components/ui/PageContainer/PageContainer"
import PageTabs from "@/components/ui/PageTabs/PageTabs"

export const FavoriteTracks: FC = () => {
    const dispatch = useAppDispatch()
    const favoriteTracksData = useAppSelector(state => state.statistic.favoriteTracksData)
    const [params, setParams]= useState({
        limit: 50,
        timeRange: 'short_term'
    })

    useEffect(() => {
        dispatch(fetchFavoriteTracks(params))
    }, [params])

    const handleTabChange = (timeRange: string) => {
        setParams({
            ...params,
            timeRange
        })
    }

    return (
        <PageContainer>
            <PageTabs handleTabChange={handleTabChange}/>
            <ItemsTable>
            {
                favoriteTracksData ? favoriteTracksData.items.map((track, index) => (
                    <FavoriteTrackItem trackItem={track} index={index} key={index}/>
                )) : <div>error</div>
            }
        </ItemsTable>
        </PageContainer>
    )
}

export default FavoriteTracks