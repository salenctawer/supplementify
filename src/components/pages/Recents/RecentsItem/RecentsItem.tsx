import { FC } from "react"

import { SpotifyRecentlyPlayedItemData } from "@/types/SpotifyData"
import useArtits from "@/hooks/useArtists"
import useTime from "@/hooks/useTime"

import { Avatar, TableCell, TableRow } from "@mui/material"

interface RecentsItemPropsData {
   item: SpotifyRecentlyPlayedItemData
   index: number
}

export const RecentsItem: FC<RecentsItemPropsData> = (props) => {
    const artists = useArtits(props.item.track.artists)
    const { getLastListeningTime } = useTime()
    const time = getLastListeningTime(props.item.played_at)

    return <TableRow>
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
    </TableRow>
}

export default RecentsItem