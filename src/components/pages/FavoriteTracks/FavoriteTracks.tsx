'use client'

import { FC, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { fetchFavoriteTracks } from "@/redux/slices/statisticSlice"
import { FetchTypes } from "@/redux/slices/statisticSlice"

import ItemsTable from "@/components/ui/ItemsTable/ItemsTable"
import ItemsTableSkeleton from "@/components/ui/ItemsTable/ItemsTableSkeleton"
import FavoriteTrackItem from "@/components/pages/FavoriteTracks/FavoriteTracksItem/FavoriteTracksItem"
import PageTabs from "@/components/ui/PageTabs/PageTabs"
import { PageProvider } from "@/components/PageProvider/PageProvider"

export const FavoriteTracks: FC = () => {
    const dispatch = useAppDispatch()
    const favoriteTracksData = useAppSelector(state => state.statistic.favoriteTracksData)
    const error = useAppSelector(state => state.statistic.error)
    const fetchStatus = useAppSelector(state => state.statistic.status)

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
        <PageProvider error={error}>
            <PageTabs handleTabChange={handleTabChange}/>
            {
                fetchStatus === FetchTypes.LOADING ? <ItemsTableSkeleton /> :
                <ItemsTable>
                    {
                        favoriteTracksData?.items.map((track, index) => (
                            <FavoriteTrackItem trackItem={track} index={index} key={index}/>
                        ))
                    }
                </ItemsTable>
            }
        </PageProvider>
    )
}

export default FavoriteTracks