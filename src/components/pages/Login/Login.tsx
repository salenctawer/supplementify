'use client'

import { FC, useEffect } from "react"
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuth } from "@/hooks/useAuth"
import { useAppDispatch } from "@/redux/hooks"
import { fetchLogin } from "@/redux/slices/userSlice"

// TODO: Проверить авторизацию + отрефакторить при наодобности код

export const Login: FC = () => {
    const { isAuth } = useAuth()
    const router = useRouter()
    const searchParams = useSearchParams()
    const dispatch = useAppDispatch()

    const getLoginData = async(code: string, state: string) => {
        const data = await dispatch(fetchLogin({
            code,
            state
        }))

        if(data.payload) {
            localStorage.setItem('accessToken', data.payload.access_token)
            localStorage.setItem('refreshToken', data.payload.refresh_token)
            localStorage.setItem('expiry', data.payload.expiry)
            localStorage.setItem('tokenType', data.payload.token_type)
            router.push('/')
        }
    }
    
    useEffect(() => {
        const code = searchParams.get('code') ?? ''
        const state = searchParams.get('state') ?? ''

        if(isAuth) {
            return router.push('/')
        }

        else {
            getLoginData(code, state)
        }
    }, [])

    return <main className="container centeredContainer">
        <h1>Wait a moment, authorization is in progress</h1>
    </main>
}

export default Login