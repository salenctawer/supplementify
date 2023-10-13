import React, { FC } from "react"

import { SpotifyRecentlyPlayedItemData } from "@/types/SpotifyData"
import useArtits from "@/hooks/useArtists"
import useTime from "@/hooks/useTime"

import { Avatar, ListItem, TableCell, TableRow, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import useMedia from "@/styles/useMedia"

interface RecentsItemPropsData {
   item: SpotifyRecentlyPlayedItemData
   index: number
}

export const RecentsDefaultItem: FC<RecentsItemPropsData> = (props) => {
    const { getLastListeningTime } = useTime()
    const { mdSize } = useMedia()

    const artists = useArtits(props.item.track.artists)
    const time = getLastListeningTime(props.item.played_at)

    return ( mdSize ?<TableRow hover>
        <TableCell>
                {props.index + 1}
            </TableCell>
            <TableCell>
                {/* <Avatar src={props.item.track.album.images[0].url}/> */}
            </TableCell>
            <TableCell>
                {props.item.track.name}
            </TableCell>
            <TableCell>
                {artists}
            </TableCell>
            <TableCell>
                {time + ' ago'}
            </TableCell>
    </TableRow> : <ListItem>
        <ListItemAvatar>
            <Avatar src={props.item.track.album.images[0].url}/>
        </ListItemAvatar>
        <ListItemText primary={`${artists} - ${props.item.track.name}`} secondary={`${time} ago`}>
        </ListItemText>
    </ListItem>
    )

    // return (
    //     mdSize ? <RecentsListItem /> : <RecentsRowItem />
    // )
}

// const RecentsListItem = () => {
//     return <ListItem>
        
//     </ListItem>
// }

// const RecentsRowItem = () => {
//     return <TableRow></TableRow>
// }

export const RecentsItem = React.memo(RecentsDefaultItem)