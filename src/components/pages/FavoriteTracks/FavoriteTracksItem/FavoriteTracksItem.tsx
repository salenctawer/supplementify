import { FC, useMemo } from "react";

import { Avatar, Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

import { useInView } from "react-intersection-observer"

import useDuration from "@/hooks/useDuration";
import { SpotifyTracksItemData } from "@/types/SpotifyData";

import styles from './FavoriteTracksItem.module.scss'
import useMedia from "@/styles/useMedia";


export interface FavoriteTracksItem {
    trackItem: SpotifyTracksItemData
    index: number
}

export const FavoriteTrackItem: FC<FavoriteTracksItem> = (props) => {
    const { ref, inView } = useInView({
        threshold: 0,
    })

    const { mdSize } = useMedia()

    const track = props.trackItem
    const trackDuration = useMemo(() => useDuration(props.trackItem.duration_ms), [track])
    const artists = useMemo(() => {
        const namesArray = track.artists.map((item) => item.name)
        return namesArray.join(', ')
    }, [track])

    return (
        <Box>
            {
                mdSize ? 
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
                </Card> : 
                <Card sx={{marginBottom: '16px'}} ref={ref} className={`${styles.card} ${(inView ? styles.isVisible : styles.isHidden)}`}>
                    <CardContent sx={{display: 'flex', alignItems: 'center'}}>
                        <Box sx={{display: 'flex', alignItems: 'center', marginRight: '64px'}}>
                            <Typography sx={{marginRight: '16px'}}>{props.index + 1}. {artists}-{track.name}</Typography>
                            <Avatar src={track.album.images[0].url} />
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', marginLeft: 'auto', marginRight: '0'}}>
                            <Typography sx={{marginRight: '32px'}}>{trackDuration}</Typography>
                            <Typography>{track.album.release_date}</Typography>
                        </Box>
                    </CardContent>
                </Card>

            }
        </Box>
    )
}

export default FavoriteTrackItem