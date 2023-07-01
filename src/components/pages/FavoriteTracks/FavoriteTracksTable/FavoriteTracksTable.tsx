'use client'

import { FC } from "react"

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

import { SpotifyTracksItemData } from "@/types/SpotifyData"

export interface FavoriteTracksTableData {
    favoriteTracks: SpotifyTracksItemData[]
}

export const FavoriteTracksTable: FC<FavoriteTracksTableData> = (props) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Position
                        </TableCell>
                        <TableCell>
                            Cover
                        </TableCell>
                        <TableCell>
                            Title
                        </TableCell>
                        <TableCell>
                            Artist
                        </TableCell>
                        <TableCell>
                            Duration
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.favoriteTracks.map((track, i) => (
                        
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}