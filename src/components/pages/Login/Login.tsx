'use client'

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { FC, useEffect } from "react"
import { useRouter } from 'next/navigation'
import { setAccessToken } from "@/redux/slices/userSlice"


export const Login: FC = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const accessToken = useAppSelector(state => state.user.accessToken)
    
    useEffect(() => {
        if(accessToken) { //сделать хук useAuth и вынести всю логику туда
            return router.push('/')
        }

        if(location.hash) {
            const parsedHash = new URLSearchParams(window.location.hash)
            const accessToken = parsedHash.get('#access_token') ?? ''
            localStorage.clear()
            localStorage.setItem('accessToken', accessToken)
            dispatch(setAccessToken(accessToken))

            return router.push('/')
        }

        else {
            const query = new URLSearchParams({
                response_type: String(process.env.NEXT_PUBLIC_RESPONSE_TYPE),
                client_id: String(process.env.NEXT_PUBLIC_CLIENT_ID),
                redirect_uri: process.env.NODE_ENV === 'development' ? String(process.env.NEXT_PUBLIC_REDIRECT_DEV_URI) : String(process.env.NEXT_PUBLIC_REDIRECT_PROD_URI),
                scope: String(process.env.NEXT_PUBLIC_SCOPES)
            })

            router.push("https://accounts.spotify.com/authorize?" + query.toString())
        }
    }, [location.hash, accessToken])

    return <div>Login</div>
}

export default Login