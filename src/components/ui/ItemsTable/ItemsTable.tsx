'use client'

import React from 'react'

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

// TODO проблема с гидрацией при вставке children в TableBody

export const ItemsTable = ({ children }: { children: React.ReactNode }) => {
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
                    {children}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ItemsTable