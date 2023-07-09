'use client'

import React from 'react'

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

// TODO проблема с гидрацией при вставке children в TableBody

export const ItemsTable = ({ children, rows }: { children: React.ReactNode, rows: string[] }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {
                            rows.map((item) => (
                                <TableCell>
                                    {item}
                                </TableCell>
                            ))
                        }
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