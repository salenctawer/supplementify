import { Container } from "@mui/material";


export const PageContainer = ({ children }: { children: React.ReactNode }) => {
    return <Container>
        {children}
    </Container>
}

export default PageContainer