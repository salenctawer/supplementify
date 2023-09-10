import { FC, useMemo } from "react";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import { useInView } from "react-intersection-observer"

import useDuration from "@/hooks/useDuration";
import { SpotifyTracksItemData } from "@/types/SpotifyData";

import styles from './FavoriteTracksItem.module.scss'


export interface FavoriteTracksItem {
    trackItem: SpotifyTracksItemData
    index: number
}

export const FavoriteTrackItem: FC<FavoriteTracksItem> = (props) => {
    const { ref, inView } = useInView({
        threshold: 0,
    })

    const track = props.trackItem
    const trackDuration = useMemo(() => useDuration(props.trackItem.duration_ms), [track])
    const artists = useMemo(() => {
        const namesArray = track.artists.map((item) => item.name)
        return namesArray.join(', ')
    }, [track])

    return (
        <Card 
        sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }} 
         ref={ref} className={`${styles.card} ${(inView ? styles.isVisible : styles.isHidden)}`}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Typography variant="h4" fontWeight="bold">{props.index + 1}. {artists}-{track.name} </Typography>
                <Typography variant="h6">Duration - {trackDuration}</Typography>
                <Typography variant="h6">Release date - {track.album.release_date}</Typography>
            </CardContent>
            <CardMedia
                component="img"
                sx={{ width: 200 }}
                image={track.album.images[0].url}
                alt={track.name}
            />
        </Card>
    )
}

export default FavoriteTrackItem