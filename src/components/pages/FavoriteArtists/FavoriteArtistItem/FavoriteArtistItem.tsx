'use client'

import { FC } from 'react'

import { SpotifyFavoriteArtistItemData } from '@/types/SpotifyData';
import { CardContent, CardMedia, Card, Typography } from '@mui/material';

interface FavoriteArtistItemProps {
    index: number
    artist: SpotifyFavoriteArtistItemData
}

export const FavoriteArtistItem:FC<FavoriteArtistItemProps> = (props) => {
    const { artist } = props

    return (<Card>
        <CardMedia 
            image={artist.images[0].url}
            title={artist.name}
            sx={{height: artist.images[0].height / 2, width: '100%', objectFit: 'cover' }}
        />
        <CardContent>
            <Typography>
                {props.index + 1}. {artist.name}
            </Typography>
            <Typography>
                Genres:
                {
                    artist.genres.map((item) => (
                        <span>{item},</span>
                    ))
                }
            </Typography>
            <Typography>
                Popularity:
                {artist.popularity}
            </Typography>
        </CardContent>
    </Card>)
}   

export default FavoriteArtistItem