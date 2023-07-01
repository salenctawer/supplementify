import { FC } from "react";

import { TableCell, TableRow, Avatar } from "@mui/material";

import { SpotifyTracksItemData } from "@/types/SpotifyData";

export interface FavoriteTracksItem {
    trackItem: SpotifyTracksItemData
    index: number
}

export const FavoriteTrackItem: FC<FavoriteTracksItem> = (props) => {
    console.log(props.trackItem)
    return (
        <TableRow>
            <TableCell>
                {props.index}
            </TableCell>
            <TableCell>
                <Avatar src={props.trackItem.album.images[0].url}/>
            </TableCell>
            <TableCell>
                {props.trackItem.name}
            </TableCell>
        </TableRow>
    )
}

export default FavoriteTrackItem