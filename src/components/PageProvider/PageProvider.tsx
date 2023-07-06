import { useEffect } from "react"

import PageContainer from "@/components/ui/PageContainer/PageContainer"


export const PageProvider = ({ children, error }: { children: React.ReactNode, error: Error | null }) => {
    useEffect(() => {
        if(error) {
            console.log(error)
            throw new Error(error.message)
        }
    }, [error])

    return <PageContainer>
        {children}
    </PageContainer>
}