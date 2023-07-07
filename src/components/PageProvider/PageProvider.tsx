import { useEffect } from "react"

import { useAuth } from "@/hooks/useAuth"
import { useRouter } from "next/router"

import PageContainer from "@/components/ui/PageContainer/PageContainer"


export const PageProvider = ({ children, error }: { children: React.ReactNode, error: Error | null }) => {
    const { accessStorageToken, accessStoreToken, setStoreToken } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if(!accessStoreToken) {
            if(!accessStorageToken) {
                router.push('/login')
            }

            setStoreToken(accessStorageToken)
        }
    }, [])

    useEffect(() => {
        if(error) {
            throw new Error(error.message)
        }
    }, [error])

    return <PageContainer>
        {children}
    </PageContainer>
}