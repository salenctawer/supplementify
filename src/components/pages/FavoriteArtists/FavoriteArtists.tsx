import { useAppDispatch } from "@/redux/hooks"
import { fetchFavoriteTracks } from "@/redux/slices/statisticSlice"
import { FC, useEffect, useState } from "react"


export const FavoriteArtists: FC = () => {
    const dispatch = useAppDispatch()
    const [params, setParams]= useState({
        limit: 50,
        timeRange: 'short-term'
    })

    useEffect(() => {
        dispatch(fetchFavoriteTracks(params))
    }, [])

    return <div>favorite artists</div>
}

export default FavoriteArtists