'use client'

import { FC, useEffect } from "react";

const Analytics: FC = () => {
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
        }
    }, [])

    return <div>
        Analytics
    </div>
}

export default Analytics