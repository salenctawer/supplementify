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
    const redirectUri = useAppSelector(state => state.user.redirectUrl)

    const { accessStorageToken, setStoreToken, accessStoreToken } = useAuth()

    useEffect(() => {
        if (accessStorageToken) {
            setStoreToken(accessStorageToken)
        }
    }, [accessStorageToken])

    const onLoginClick = async () => {
        const data = await dispatch(fetchAuthUrl())
        
        if(!data.payload) {
            return alert('Ошибка авторизации') // редирект на страницу с ошибкой
        }
        const code = 'AQBrK_E1Fqrafv_BJ_31Uu2sUiTJtA8KiIZTBfhrv0Y6rFSBVLaqpzScXa3giN0AasRnpUyjIMNMl3ON06b8OIwfmWfSFOqLPjxHvWS121vrGoXBP3mZVl4A0bJ8yi9Q8VGS8-YfuzsS7jBzcGLJaXzfz2fz_q_5aVDWkns4io0Dfme3e9y2Li59aLBAFeqwbdSWvBE4elsp3nFJ2xjWiojaL0iUIsuUzpHR9-IPjUyNcNbPBK2ZOglwa32goES-p2mU9cc3SHhLGQ'
        const state = 'abc1234'
        const testData = await dispatch(fetchLogin({
            code,
            state
        }))
        console.log(testData)
        // return router.push(data.payload)
    }

    return (
        <section id="intro">
            <Button onClick={onLoginClick} color="primary" variant="contained" disabled={!!accessStoreToken}>
            {
                accessStoreToken ? 'You are already logged in' : 'Login with spotify'
            }
            </Button>
        </section>
    )
}

export default HomeIntro