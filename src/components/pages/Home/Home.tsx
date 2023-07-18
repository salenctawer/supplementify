'use client'

import { FC, useEffect } from 'react'

import styles from './Home.module.css'
import { Button } from '@mui/material'
import { useAuth } from '@/hooks/useAuth'

import HomeAdvantages from '@/components/pages/Home/HomeAdvantages/HomeAdvantages'

const Home: FC = () => {
    const { redirectToSpotifyLogin, accessStorageToken, setStoreToken, accessStoreToken } = useAuth()

    useEffect(() => {
        if(accessStorageToken) {
            setStoreToken(accessStorageToken)
        }
    }, [accessStorageToken])

    return <main className={styles.main}>
        <Button onClick={redirectToSpotifyLogin} color="primary" variant="contained" disabled={!!accessStoreToken}>
            {
                accessStoreToken ? 'You are already logged in' : 'Login with spotify'
            }
        </Button>
        <HomeAdvantages />
    </main>
}

export default Home