import { FC, useMemo } from "react";

import { TableCell, TableRow, Avatar, Card, CardHeader, CardContent, CardMedia, Box, Typography } from "@mui/material";

import useDuration from "@/hooks/useDuration";
import { SpotifyTracksItemData } from "@/types/SpotifyData";


export interface FavoriteTracksItem {
    trackItem: SpotifyTracksItemData
    index: number
}

export const FavoriteTrackItem: FC<FavoriteTracksItem> = (props) => {
    const track = props.trackItem
    const trackDuration = useMemo(() => useDuration(props.trackItem.duration_ms), [track])
    const artists = useMemo(() => {
        const namesArray = track.artists.map((item) => item.name)
        return namesArray.join(', ')
    }, [track])

    console.log(props)

    return (
        <Card sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                    <Typography sx={{marginBottom: '32px'}} variant="h5" fontWeight="bold">{props.index + 1}. {artists}-{props.trackItem.name} </Typography>
                    <Typography sx={{marginBottom: '32px'}} variant="h6">Duration - {trackDuration}</Typography>
                    <Typography variant="h6">Release date - {props.trackItem.album.release_date}</Typography>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 250 }}
                image={props.trackItem.album.images[0].url}
                alt={props.trackItem.name}
            />
        </Card>
    )
}

export default FavoriteTrackItem