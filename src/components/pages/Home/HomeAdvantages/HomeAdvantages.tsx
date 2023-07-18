'use client'

import { Box, Card, CardContent, Typography } from "@mui/material"
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
        <section className={styles.section} ref={ref}>
            {
                advantagesCards.map((item) => (
                    <Card className={`${styles.card} ${(inView ? styles.isVisible : styles.isHidden)}`}> 
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
                ))
            }
        </section>
    )
}

export default HomeAdvantages