import { FC } from "react"

import { SpotifyRecentlyPlayedItemData } from "@/types/SpotifyData"
import { Avatar, TableCell, TableRow } from "@mui/material"
import useArtits from "@/hooks/useArtists"

interface RecentsItemPropsData {
   item: SpotifyRecentlyPlayedItemData
   index: number
}

export const RecentsItem: FC<RecentsItemPropsData> = (props) => {
    const artists = useArtits(props.item.track.artists)

    return <TableRow>
        <TableCell>
            {props.index + 1}
        </TableCell>
        <TableCell>
            <Avatar src={props.item.track.album.images[0].url}/>
        </TableCell>
        <TableCell>
            {artists}
        </TableCell>
    </TableRow>
}

export default RecentsItem