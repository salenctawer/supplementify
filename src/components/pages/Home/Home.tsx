'use client'

import { FC } from 'react'
import styles from './Home.module.css'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'

const Home: FC = () => {
    const router = useRouter()

    const handleLogin = () => {
        return router.push(loginLink)
    }

    return <main className={styles.main}>
        <Button onClick={handleLogin}>Login with spotify</Button>
    </main>
}

export default Home