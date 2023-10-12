'use client'

import { FC } from 'react'

import { SpotifyFavoriteArtistItemData } from '@/types/SpotifyData';
import { CardContent, CardMedia, Card, Typography, Box } from '@mui/material';

import styles from './FavoriteArtistItem.module.scss'

interface FavoriteArtistItemProps {
    index: number
    artist: SpotifyFavoriteArtistItemData
}

export const FavoriteArtistItem:FC<FavoriteArtistItemProps> = (props) => {
    const { artist } = props

    return (<Card sx={{ height: '100%', maxHeight: '100%', display: 'flex', flexDirection: 'column' }} className={styles.card}>
        <CardMedia
            className={styles.image} 
            image={artist.images[0].url}
            title={artist.name}
            sx={{height: artist.images[0].height / 2, width: '100%', objectFit: 'cover' }}
        />
        <CardContent>
            <Typography sx={{marginBottom: '16px', fontWeight: 'bold', fontSize: '20px'}}>
                {props.index + 1}. {artist.name}
            </Typography>
            <Box sx={{marginBottom: '16px'}}>
                <Typography sx={{fontWeight: 'bold', fontSize: '18px'}} component="span">Genres:&nbsp;</Typography>
                <Box sx={{display: 'inline'}}>
                    {
                        artist.genres.map((item, idx) => (
                            idx === artist.genres.length - 1 ? <span>{item}</span> : <span>{item}, </span>
                        ))
                    }
                </Box>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Typography sx={{fontWeight: 'bold', fontSize: '18px'}}>Popularity:&nbsp;</Typography>
                {artist.popularity}
            </Box>
        </CardContent>
    </Card>)
}   

export default FavoriteArtistItem