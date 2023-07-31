'use client'

import { useEffect } from "react"
import { useRouter } from 'next/navigation'
import { useAuth } from "@/hooks/useAuth"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"

import { Button } from "@mui/material"
import { fetchAuthUrl, fetchLogin } from "@/redux/slices/userSlice"

export const HomeIntro = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()

    const { accessToken, loginData, setStoreLoginData } = useAuth()

    useEffect(() => {
        if (accessToken && !loginData) {
            setStoreLoginData()
        }
    }, [])

    const onLoginClick = async () => {
        const data = await dispatch(fetchAuthUrl())

        if (!data.payload) {
            return alert('Ошибка авторизации') // редирект на страницу с ошибкой
        }

        return router.push(data.payload)
    }

    return (
        <section id="intro">
            <Button onClick={onLoginClick} color="primary" variant="contained" disabled={!!loginData}>
                {
                    loginData ? 'You are already logged in' : 'Login with spotify'
                }
            </Button>
        </section>
    )
}

export default HomeIntro