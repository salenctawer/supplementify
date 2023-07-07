import { useAppSelector, useActionCreators } from "@/redux/hooks"
import { allUserActions } from "@/redux/slices/userSlice"
import { useRouter } from 'next/navigation'

export const useAuth = () => {
    const router = useRouter()
    const authActions = useActionCreators(allUserActions)
    const accessStoreToken = useAppSelector(state => state.user.accessToken) || ''

    const getStorageToken = () => {
        const parsedHash = new URLSearchParams(window.location.hash)
        const accessToken = parsedHash.get('#access_token') || ''

        return accessToken
    }

    const setStoreToken = (token: string) => {
        authActions.setAccessToken(token)
    }
    
    const setAccessTokenToAll = () => {
        const accessToken = getStorageToken()
        localStorage.clear()
        localStorage.setItem('accessToken', accessToken)

        setStoreToken(accessToken)
    }

    const redirectToSpotifyLogin = () => {
        const query = new URLSearchParams({
            response_type: String(process.env.NEXT_PUBLIC_RESPONSE_TYPE),
            client_id: String(process.env.NEXT_PUBLIC_CLIENT_ID),
            redirect_uri: process.env.NODE_ENV === 'development' ? String(process.env.NEXT_PUBLIC_REDIRECT_DEV_URI) : String(process.env.NEXT_PUBLIC_REDIRECT_PROD_URI),
            scope: String(process.env.NEXT_PUBLIC_SCOPES)
        })

        router.push("https://accounts.spotify.com/authorize?" + query.toString())
    }
    
    const logout = () => {
        setStoreToken('')
        localStorage.setItem('accessToken', '')
        router.push('/')
    }

    const isAuthCheck = () => {
        if(!accessStoreToken) {
            const storageToken = getStorageToken()

            if(!storageToken) {
                return router.push('/login')
            }

            else {
                return setStoreToken(storageToken)
            }
        }
    }

    return {
        accessStorageToken: getStorageToken(),
        accessStoreToken,
        redirectToSpotifyLogin,
        setAccessTokenToAll,
        setStoreToken,
        logout,
        isAuthCheck,

    }
}