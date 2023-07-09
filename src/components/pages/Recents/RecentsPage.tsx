'use client'

import { useEffect, useState } from "react"

import { PageProvider } from "@/components/PageProvider/PageProvider"
import ItemsTable from "@/components/ui/ItemsTable/ItemsTable"
import ItemsTableSkeleton from "@/components/ui/ItemsTable/ItemsTableSkeleton"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { FetchTypes, fetchRecentlyPlayed } from "@/redux/slices/statisticSlice"
import RecentsItem from "@/components/pages/Recents/RecentsItem/RecentsItem"

export const RecentsPage = () => {
    const dispatch = useAppDispatch()
    const error = useAppSelector(state => state.statistic.error)
    const fetchStatus = useAppSelector(state => state.statistic.status)
    const recenltyPlayedData = useAppSelector(state => state.statistic.recentlyPlayedData)

    const rows = [
        'Position',
        'Cover',
        'Title',
        'Artist',
        'Last time listening'
    ]

    const [limit, setLimit] = useState(50)

    const handleLimitChange = () => {

    }

    useEffect(() => {
        dispatch(fetchRecentlyPlayed(limit))
    }, [limit])

    return <PageProvider error={error}>
       {
        fetchStatus === FetchTypes.LOADING ? <ItemsTableSkeleton /> :
        <ItemsTable rows={rows}>
            {
                recenltyPlayedData?.items.map((item, idx) => (
                    <RecentsItem item={item} index={idx}/>
                ))
            }
        </ItemsTable>
       }
    </PageProvider>
}


export default RecentsPage