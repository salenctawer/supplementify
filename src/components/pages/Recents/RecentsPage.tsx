'use client'

import { useEffect, useState } from "react"

import { PageProvider } from "@/components/PageProvider/PageProvider"
import ItemsTable from "@/components/ui/ItemsTable/ItemsTable"
import ItemsTableSkeleton from "@/components/ui/ItemsTable/ItemsTableSkeleton"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { fetchRecentlyPlayed } from "@/redux/slices/statisticSlice"
import { RecentsItem } from "@/components/pages/Recents/RecentsItem/RecentsItem"
import { FetchTypes } from "@/types/EnumsData"
import { Button } from "@mui/material"
import styles from './RecentsPage.module.scss'

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

    const [limit, setLimit] = useState(20)

    const handleLimitChange = () => {
        setLimit(50)
        dispatch(fetchRecentlyPlayed(limit))
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
       {
        limit === 20 ? <Button onClick={handleLimitChange} variant="contained" className={styles.button}>Load more</Button> : <div></div>
       }
    </PageProvider>
}


export default RecentsPage