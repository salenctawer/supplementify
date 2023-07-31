'use client'

import { FC, useMemo } from "react"
import { Box, Button, Grid, Typography } from "@mui/material"
import { useAuth } from "@/hooks/useAuth"
import { useRouter } from "next/navigation"
import s from './AppFooter.module.scss'

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
    },
}

export const AppFooter: FC = () => {
    const { isAuth } = useAuth()
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
                    itemText: 'Top Tracks',
                    itemLink: '/favorit-tracks',
                    isLink: false,
                },
                {
                    itemText: 'Top Artists',
                    itemLink: '/favorit-artists',
                    isLink: false,
                },  
                {
                    itemText: 'Recently played',
                    itemLink: '/recents',
                    isLink: false,
                }
            ]
        }, 
        {
            columnHeader: 'Socials',
            items: [
                {
                    itemText: 'Instagram',
                    itemLink: 'https://instagram.com/vlonesalenc',
                    isLink: true,
                },
                {
                    itemText: 'Twitter',
                    itemLink: 'https://twitter.com/salencqua',
                    isLink: true,
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
                                <Typography className={s.columnHeader}>
                                    {footerItem.columnHeader}
                                </Typography>
                                <Box sx={styles.itemsContainer}>
                                    {
                                        footerItem.items.map((item) => (
                                            item.isLink ? 
                                            <a target="_blank" href={item.itemLink} key={item.itemText} className={`${s.footerItem} link`}>
                                                {item.itemText}
                                            </a> :
                                            <Button onClick={() => onNavigationClick(item.itemLink)} key={item.itemText} className={s.footerItem}>
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