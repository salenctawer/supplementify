'use client'

import { useEffect } from "react"
import { useAuth } from "@/hooks/useAuth"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"

import { Button } from "@mui/material"
import { fetchAuthUser } from "@/redux/slices/userSlice"

export const HomeIntro = () => {
    const dispatch = useAppDispatch()
    const redirectUri = useAppSelector(state => state.user.redirectUrl)

    // const { redirectToSpotifyLogin, accessStorageToken, setStoreToken, accessStoreToken } = useAuth()

    // useEffect(() => {
    //     if (accessStorageToken) {
    //         setStoreToken(accessStorageToken)
    //     }
    // }, [accessStorageToken])

    const onLoginClick = () => {
        dispatch(fetchAuthUser())
    }

    return (
        <section id="intro">
            {/* <Button onClick={redirectToSpotifyLogin} color="primary" variant="contained" disabled={!!accessStoreToken}>
            {
                accessStoreToken ? 'You are already logged in' : 'Login with spotify'
            }
            </Button> */}
            <Button onClick={onLoginClick}>
                Login
            </Button>
        </section>
    )
}

export default HomeIntro