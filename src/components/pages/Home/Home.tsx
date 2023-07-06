'use client'

import { FC } from 'react'
import { useRouter } from 'next/navigation'

import styles from './Home.module.css'
import { Button } from '@mui/material'

const Home: FC = () => {
    const router = useRouter()

    return <main className={styles.main}>
        <Button color="primary" variant="contained">Login with spotify</Button>
    </main>
}

export default Home