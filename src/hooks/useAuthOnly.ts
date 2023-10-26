import { useRouter } from "next/navigation"
import { useAuth } from "./useAuth"
import { useEffect } from "react"


export const useAuthOnly = () => {
    const router = useRouter()
    const { isAuth } = useAuth()

    const redirectToLogin = () => {
        return router.push('/login')
    }

    useEffect(() => {
        if(isAuth) {
            return
        }

        redirectToLogin()
    }, [])

    return {
        isAuth,
    }
}