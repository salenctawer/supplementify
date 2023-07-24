'use client'

import { FC, useMemo } from "react"
import { Box, Button, Grid, Link, Typography } from "@mui/material"
import { useAuth } from "@/hooks/useAuth"
import { useRouter } from "next/navigation"

const styles = {
    root: {
        bgcolor: 'background.paper',
    },
    content: {
        padding: '40px 96px',
        margin: '0 auto',
    }, 
    itemsContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
    }
}

export const AppFooter: FC = () => {
    const {accessStorageToken, accessStoreToken} = useAuth()
    const router = useRouter()

    const homeIntro = document.getElementById('intro')

    const scrollToIntro = () => {
        homeIntro?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
    }

    const onNavigationClick = (link: string) => {
        if(isAuth) {
           return router.push(link)
        }

        return scrollToIntro()
    }

    const isAuth = useMemo(() => {
        return accessStorageToken && accessStoreToken
    }, [accessStorageToken, accessStoreToken])

    const footerItems = [
        {
            columnHeader: 'Contacts',
            items: [
                {
                    itemText: 'E-mail',
                    itemLink: 'mailto:salenctawer@gmail.com',
                    isLink: true,
                },
                {
                    itemText: 'Telegram',
                    itemLink: 'https://t.me/salenctawer',
                    isLink: true,
                },
            ],
        },
        {
            columnHeader: 'Navigation',
            items: [
                {
                    itemText: 'Tracks',
                    itemLink: '/favorit-tracks',
                    isLink: false,
                },
                {
                    itemText: 'Artists',
                    itemLink: '/favorit-artists',
                    isLink: false,
                },  
            ]
        }
    ]

    return <footer>
        <Box sx={styles.root}>
            <Box sx={styles.content}>
                <Grid container spacing={2}>
                    {
                        footerItems.map((footerItem, footerItemIdx) => (
                            <Grid item key={footerItemIdx} md={4}>
                                <Typography>
                                    {footerItem.columnHeader}
                                </Typography>
                                <p>fsdfsdf</p>
                                <Box sx={styles.itemsContainer}>
                                    {
                                        footerItem.items.map((item) => (
                                            item.isLink ? 
                                            <Link target="_blank" href={item.itemLink} key={item.itemText} className="link">
                                                {item.itemText}
                                            </Link> :
                                            <Button onClick={() => onNavigationClick(item.itemLink)} key={item.itemText}>
                                                {item.itemText}
                                            </Button>
                                        ))
                                    }
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid> 
            </Box>
        </Box>
    </footer>
}

export default AppFooter