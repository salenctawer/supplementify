'use client'

import { FC, useEffect, useState } from "react"
import { useAppDispatch } from "@/redux/hooks"
import { fetchFavoriteTracks } from "@/redux/slices/statisticSlice"

import ItemsTable from "@/components/ui/ItemsTable/ItemsTable"
import FavoriteTrackItem from "@/components/pages/FavoriteTracks/FavoriteTracksItem/FavoriteTracksItem"

export const FavoriteTracks: FC = () => {
    const dispatch = useAppDispatch()
    const [params, setParams]= useState({
        limit: 50,
        timeRange: 'short-term'
    })

    useEffect(() => {
        dispatch(fetchFavoriteTracks(params))
    }, [])

    return <div>
        <ItemsTable>
            <FavoriteTrackItem />
            <FavoriteTrackItem />
            <FavoriteTrackItem />
            <FavoriteTrackItem />
        </ItemsTable>
    </div>
}

export default FavoriteTracks