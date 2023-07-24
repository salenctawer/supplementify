'use client'

import { useEffect } from "react"
import { useAuth } from "@/hooks/useAuth"

import { Button } from "@mui/material"

export const HomeIntro = () => {

    const { redirectToSpotifyLogin, accessStorageToken, setStoreToken, accessStoreToken } = useAuth()

    useEffect(() => {
        if (accessStorageToken) {
            setStoreToken(accessStorageToken)
        }
    }, [accessStorageToken])

    return (
        <section id="intro">
            <Button onClick={redirectToSpotifyLogin} color="primary" variant="contained" disabled={!!accessStoreToken}>
            {
                accessStoreToken ? 'You are already logged in' : 'Login with spotify'
            }
            </Button>
        </section>
    )
}

export default HomeIntro