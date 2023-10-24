'use client'

import { Card, CardContent, Grid, Typography } from "@mui/material"
import Link from "next/link"
import styles from './HomeAdvantages.module.scss'
import { useInView } from "react-intersection-observer"

export const HomeAdvantages = () => {
    const { ref, inView } = useInView({
        threshold: 0,
    })

    const advantagesCards = [
        {
            title: 'Explore your favorite artists',
            text: 'Consider frequent artist auditions in the last month, the last 6 months, and the entire year',
            buttonText: 'View artists',
            link: '/artists',
            classModifier: 'is-artists'
        },
        {
            title: 'Explore your favorite tracks in detail',
            text: 'You can view your most listened to tracks from the last month, the last 6 months and the whole year. You can also make a playlist of these tracks, which you will immediately have in',
            buttonText: 'View tracks',
            link: '/tracks',
            classModifier: 'is-tracks'

        },
        {
            title: 'Recently played',
            text: 'You can find out exactly to the second what tracks have been played in your headphones recently',
            buttonText: 'View recents',
            link: '/recents',
            classModifier: 'is-recents',
        }
    ]

    const getCardStyle = (modifier: string) => {
        if(modifier === 'is-tracks') {
            return styles.tracksCard
        }
        else if(modifier === 'is-artists') {
            return styles.artistsCard
        }
        
        return styles.recentsCard
    }

    return (
        <section className={`${styles.section} ${(inView ? styles.isVisible : styles.isHidden)}`} ref={ref}>
            <Typography variant="h2" component="h2" className={styles.title}>Supplemetify features</Typography>
            <Grid container spacing={{ md: 3 }}>
            {
                advantagesCards.map((item, idx) => (
                    <Grid item lg={4} key={idx} className={`${styles.itemCard} ${getCardStyle(item.classModifier)}`}>
                        <Card className={styles.cardContainer}> 
                            <CardContent>
                                <Typography className={styles.cardTitle}>
                                    { item.title }
                                </Typography>
                                <Typography className={styles.cardText}>
                                    { item.text }
                                </Typography>
                                <Link href={item.link} className='link'>
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