'use client'

import { FC, useEffect } from "react";
import { fetchPlaylists } from "@/redux/slices/statisticSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from 'next/navigation'

const Analytics: FC = () => {
    const router = useRouter()
    const requestStatus = useAppSelector(state => state.statistic.status)
    const userPlaylists = useAppSelector(state => state.statistic.playlistsData)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(!localStorage.getItem('accessToken')) {
            return router.push('/')
        }

        if(window.location.hash) {
            const parsedHash = new URLSearchParams(window.location.hash)
            const accessToken = parsedHash.get('#access_token') ?? ''
            const tokenType = parsedHash.get('token_type') ?? ''
            const expiresIn = parsedHash.get('expires_in') ?? ''

            localStorage.clear()
            localStorage.setItem('accessToken', accessToken)
            localStorage.setItem('tokenType', tokenType)
            localStorage.setItem('expiresIn', expiresIn)
            console.log(fetchPlaylists)
            dispatch(fetchPlaylists())
        }
    }, [])

    return <div>
        {requestStatus}
        Analytics
    </div>
}

export default Analytics