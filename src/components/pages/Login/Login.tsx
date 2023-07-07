'use client'

import { FC, useEffect } from "react"
import { useRouter } from 'next/navigation'
import { useAuth } from "@/hooks/useAuth"


export const Login: FC = () => {
    const { accessStoreToken, setAccessTokenToAll, redirectToSpotifyLogin } = useAuth()
    const router = useRouter()
    
    useEffect(() => {
        if(accessStoreToken) {
            return router.push('/')
        }

        if(location.hash) {
            setAccessTokenToAll()

            return router.push('/')
        }

        else {
            redirectToSpotifyLogin()
        }
    }, [location.hash, accessStoreToken])

    return <div>Login</div>
}

export default Login