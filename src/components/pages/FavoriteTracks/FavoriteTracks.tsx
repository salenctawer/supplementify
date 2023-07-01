'use client'

import { FC, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { fetchFavoriteTracks } from "@/redux/slices/statisticSlice"

import ItemsTable from "@/components/ui/ItemsTable/ItemsTable"
import FavoriteTrackItem from "@/components/pages/FavoriteTracks/FavoriteTracksItem/FavoriteTracksItem"

export const FavoriteTracks: FC = () => {
    const dispatch = useAppDispatch()
    const favoriteTracksData = useAppSelector(state => state.statistic.favoriteTracksData)
    const [params, setParams]= useState({
        limit: 50,
        timeRange: 'short_term'
    })

    useEffect(() => {
        dispatch(fetchFavoriteTracks(params))
    }, [])

    return (
        <ItemsTable>
            {
                favoriteTracksData ? favoriteTracksData.items.map((track, index) => (
                    <FavoriteTrackItem trackItem={track} index={index}/>
                )) : <div>error</div>
            }
        </ItemsTable>
    )
}

export default FavoriteTracks