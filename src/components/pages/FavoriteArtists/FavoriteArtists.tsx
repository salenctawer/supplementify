'use client'

import { useAuth } from "@/hooks/useAuth"
import { useAppDispatch } from "@/redux/hooks"
import { fetchFavoriteArtists } from "@/redux/slices/statisticSlice"
import { FC, useEffect, useState } from "react"


export const FavoriteArtists: FC = () => {
    const {loginData} = useAuth()
    const dispatch = useAppDispatch()
    const [params, setParams]= useState({
        limit: 50,
        timeRange: 'short-term'
    })

    useEffect(() => {
        if(loginData) {
            dispatch(fetchFavoriteArtists({
                loginData, 
                params
            }))
        }
    }, [params, loginData])

    return <div>favorite artists</div>
}

export default FavoriteArtists