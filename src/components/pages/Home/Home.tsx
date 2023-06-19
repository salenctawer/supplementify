'use client'

import { FC } from 'react'
import styles from './Home.module.css'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'

const Home: FC = () => {
    const router = useRouter()
    const CLIENT_ID = 'c69ebf590d0b4933b559ed709416fb39'
    const CLIENT_SECRET_ID = '7900247b5f904ee9a4e8822ddfb5bdbf'
    const REDIRECT_URI = 'http://localhost:3000/analytics/'
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
    const RESPONSE_TYPE = 'token'
    const SPACE_DELIMITER = '%20'
    const SCOPES = ["user-read-currently-playing", "user-read-playback-state"]
    const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER)

    const loginLink = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES_URL_PARAM}&show_dialog=true`

    const handleLogin = () => {
        return router.push(loginLink)
    }

    return <main className={styles.main}>
        <Button onClick={handleLogin}>Login with spotify</Button>
    </main>
}

export default Home