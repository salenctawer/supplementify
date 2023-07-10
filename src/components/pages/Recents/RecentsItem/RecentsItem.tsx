import React, { FC } from "react"

import { SpotifyRecentlyPlayedItemData } from "@/types/SpotifyData"
import useArtits from "@/hooks/useArtists"
import useTime from "@/hooks/useTime"

import { Avatar, TableCell, TableRow } from "@mui/material"
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

    return <div>
        {
            mdSize ? <TableRow hover>
            <TableCell>
                {props.index + 1}
            </TableCell>
            <TableCell>
                <Avatar src={props.item.track.album.images[0].url}/>
            </TableCell>
            <TableCell>
                {props.item.track.name}
            </TableCell>
            <TableCell>
                {artists}
            </TableCell>
            <TableCell>
                {time}
            </TableCell>
        </TableRow> : <div>sdfsdfsdf</div>
        }
    </div>
}

export const RecentsItem = React.memo(RecentsDefaultItem)