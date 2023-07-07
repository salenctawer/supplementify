'use client'

import { PageProvider } from "@/components/PageProvider/PageProvider"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { fetchRecentlyPlayed } from "@/redux/slices/statisticSlice"
import { useEffect, useState } from "react"

export const RecentsPage = () => {
    const dispatch = useAppDispatch()
    const error = useAppSelector(state => state.statistic.error)
    const [limit, setLimit] = useState(50)

    useEffect(() => {
        dispatch(fetchRecentlyPlayed(limit))
    }, [limit])

    return <PageProvider error={error}>
        <div>recents</div>
    </PageProvider>
}


export default RecentsPage