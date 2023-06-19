'use client'

import { FC, useEffect } from "react";
import { fetchPlaylists } from "@/redux/slices/userSlice";
import { useAppSelector } from "@/redux/hooks";

const Analytics: FC = () => {
    const requestStatus = useAppSelector(state => state.user.status)
    useEffect(() => {
        if(window.location.hash) {
            const parsedHash = new URLSearchParams(window.location.hash)
            const accessToken = parsedHash.get('#access_token') ?? ''
            const tokenType = parsedHash.get('token_type') ?? ''
            const expiresIn = parsedHash.get('expires_in') ?? ''

            localStorage.clear()
            localStorage.setItem('accessToken', accessToken)
            localStorage.setItem('tokenType', tokenType)
            localStorage.setItem('expiresIn', expiresIn)
            fetchPlaylists()
        }
    }, [])

    return <div>
        {requestStatus}
        Analytics
    </div>
}

export default Analytics