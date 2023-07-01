'use client'

import React from 'react'

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

// TODO проблема с гидрацией при вставке itemsTableChildrens в TableBody

export const ItemsTable = ({ children }: { children: React.ReactNode }) => {
    const itemsTableChildrens = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child);
          }
          return child; 
    })

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
                    {itemsTableChildrens}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ItemsTable