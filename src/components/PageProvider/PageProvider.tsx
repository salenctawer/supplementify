import { useEffect } from "react"

import { useRouter } from 'next/navigation'
import { useAppSelector } from "@/redux/hooks"
import { useAuth } from "@/hooks/useAuth"

import PageContainer from "@/components/ui/PageContainer/PageContainer"

// TODO: Сделать middleware или hoc для auth only роутинга, подумать над next auth

export const PageProvider = ({ children, error }: { children: React.ReactNode, error: Error | null }) => {
    const router = useRouter()

    const userInfo = useAppSelector(state => state.user.userInfo)

    useEffect(() => {
        // console.log(userInfo)
        // if(!userInfo) {
        //     router.push('/')
        // }

    }, [error])

    return <PageContainer>
        {children}
    </PageContainer>
}