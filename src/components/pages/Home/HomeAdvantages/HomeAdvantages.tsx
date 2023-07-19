'use client'

import { Box, Card, CardContent, Grid, Typography } from "@mui/material"
import Link from "next/link"
import styles from './HomeAdvantages.module.scss'
import { useInView } from "react-intersection-observer"

export const HomeAdvantages = () => {
    const { ref, inView } = useInView({
        threshold: 0,
    })

    const advantagesCards = [
        {
            title: 'Explore your favorite tracks in detail',
            text: 'You can view your most listened to tracks from the last month, the last 6 months and the whole year. You can also make a playlist of these tracks, which you will immediately have in',
            buttonText: 'View tracks',
            link: '/tracks',
            classModifier: 'is-tracks'

        },
        {
            title: 'Explore your favorite artists',
            text: 'Consider frequent artist auditions in the last month, the last 6 months, and the entire year',
            buttonText: 'View artists',
            link: '/artists',
            classModifier: 'is-artists'
        },
    ]
    return (
        <section className={`${styles.section} ${(inView ? styles.isVisible : styles.isHidden)}`} ref={ref}>
            <Typography variant="h2" component="h2" className={styles.title}>Supplemetify features</Typography>
            <Grid container spacing={{ md: 3 }}>
            {
                advantagesCards.map((item, idx) => (
                    <Grid item md={4} key={idx} className={styles.card}>
                        <Card> 
                            <CardContent>
                                <Typography>
                                    { item.title }
                                </Typography>
                                <Typography>
                                    { item.text }
                                </Typography>
                                <Link href={item.link} className={styles.link}>
                                    { item.buttonText }
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            }
            </Grid>
        </section>
    )
}

export default HomeAdvantages