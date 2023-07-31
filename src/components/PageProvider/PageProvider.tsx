import { useEffect } from "react"

import { useAuth } from "@/hooks/useAuth"

import PageContainer from "@/components/ui/PageContainer/PageContainer"


export const PageProvider = ({ children, error }: { children: React.ReactNode, error: Error | null }) => {
    useEffect(() => {
    }, [error])

    return <PageContainer>
        {children}
    </PageContainer>
}