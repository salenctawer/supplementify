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
import { useAuth } from "@/hooks/useAuth"

export const RecentsPage = () => {
    const { loginData } = useAuth()
    const dispatch = useAppDispatch()
    const error = useAppSelector(state => state.statistic.error)
    const fetchStatus = useAppSelector(state => state.statistic.status)
    const recenltyPlayedData = useAppSelector(state => state.statistic.recentlyPlayedData)

    const rows = [
        'Position',
        'Title',
        'Artist',
        'Last time listening',
        'Preview'
    ]

    const [params, setParams]= useState({
        limit: 20,
    })

    const handleLimitChange = () => {
        setParams({
            limit: 50
        })
        dispatch(fetchRecentlyPlayed({
            loginData,
            params
        }))
    }

    useEffect(() => {
        if(loginData) {
            dispatch(fetchRecentlyPlayed({
                loginData,
                params
            }))
        }
    }, [params, loginData])

    return <PageProvider error={error}>
       {
        fetchStatus === FetchTypes.LOADING ? <ItemsTableSkeleton /> :
        <ItemsTable rows={rows}>
            {
                recenltyPlayedData?.map((item, idx) => (
                    <RecentsItem item={item} index={idx} key={idx}/>
                ))
            }
        </ItemsTable>
       }
       {
        params.limit === 20 ? <Button onClick={handleLimitChange} variant="contained" className={styles.button}>Load more</Button> : <div></div>
       }
    </PageProvider>
}


export default RecentsPage