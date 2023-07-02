import { FC, useMemo } from "react";

import { TableCell, TableRow, Avatar } from "@mui/material";

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

    return (
        <TableRow>
            <TableCell>
                {props.index + 1}
            </TableCell>
            <TableCell>
                <Avatar src={props.trackItem.album.images[0].url}/>
            </TableCell>
            <TableCell>
                {props.trackItem.name}
            </TableCell>
            <TableCell>
                {artists}
            </TableCell>
            <TableCell>
                {trackDuration}
            </TableCell>
        </TableRow>
    )
}

export default FavoriteTrackItem