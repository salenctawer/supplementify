'use client'

import { FC, useEffect } from "react"
import { useRouter } from 'next/navigation'
import { useAuth } from "@/hooks/useAuth"


export const Logout: FC = () => {
    const { logout } = useAuth()
    const router = useRouter()
    
    useEffect(() => {
        logout()
        router.push('/')
    })

    return <div>Logout</div>
}

export default Logout