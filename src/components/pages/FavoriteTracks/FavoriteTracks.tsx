'use client'

import { FC, useEffect, useState } from "react"
import { useAppDispatch } from "@/redux/hooks"
import { fetchFavoriteTracks } from "@/redux/slices/statisticSlice"


export const FavoriteTracks: FC = () => {
    const dispatch = useAppDispatch()
    const [params, setParams]= useState({
        limit: 50,
        timeRange: 'short-term'
    })

    useEffect(() => {
        dispatch(fetchFavoriteTracks(params))
    }, [])

    return <div>favorite tracks</div>
}

export default FavoriteTracks