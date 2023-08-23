'use client'

import { useEffect } from "react"
import { useRouter } from 'next/navigation'
import { useAuth } from "@/hooks/useAuth"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"

import { Box, Button, Grid, ImageList, ImageListItem, Typography } from "@mui/material"
import { fetchAuthUrl, fetchLogin } from "@/redux/slices/userSlice"
import Image from "next/image"

import styles from './HomeIntro.module.scss'

export const HomeIntro = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()

    const { accessToken, loginData, setStoreLoginData } = useAuth()

    useEffect(() => {
        if (accessToken && !loginData) {
            setStoreLoginData()
        }
    }, [accessToken, loginData])

    const onLoginClick = async () => {
        const data = await dispatch(fetchAuthUrl())

        if (!data.payload) {
            return alert('Ошибка авторизации') // редирект на страницу с ошибкой
        }

        return router.push(data.payload)
    }

    const imagesList = [
        {
            img: '/juice-wrld-album.png',
            title: 'Juice Wrld - Goodbye & Good Riddance'
        },
        {
            img: '/lil-skies-album.jpg',
            title: 'Lil Skies - Life of a Dark Rose'
        },
        {
            img: '/lil-uzi-album.png',
            title: 'Lil Uzi Vert - Luv Is Rage 2'
        },
    ]

    return (
        <section id="intro" className="sectionContainer">
            <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <Typography variant='h2'>
                    Discover the hidden features of spotify and enjoy your stats
                </Typography>
                <Button sx={{marginBottom: '48px'}} onClick={onLoginClick} color="primary" variant="contained" disabled={!!loginData}>
                    {
                        loginData ? 'You are already logged in' : 'Login with spotify'
                    }
                </Button>
                    <Grid container spacing={2}>
                    {
                        imagesList.map((item, idx) => (
                            <Grid item xs={2} md={4} key={idx}>
                                <Image
                                    className={styles.item}
                                    src={item.img}
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    style={{ width: '100%', height: 'auto' }} 
                                    alt={item.title}
                                />
                            </Grid>
                        ))
                    }
                    </Grid>
                </Box>
        </section>
    )
}

export default HomeIntro