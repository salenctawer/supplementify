'use client'

import React from 'react'

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, List } from "@mui/material"
import useMedia from '@/styles/useMedia'

// TODO проблема с гидрацией при вставке children в TableBody

export const ItemsTable = ({ children, rows }: { children: React.ReactNode, rows: string[] }) => {
    const { mdSize } = useMedia()
    
    return (
        <TableContainer component={Paper}>
            {
               mdSize ? <Table sx={{overflow: 'hidden'}}>
               <TableHead>
                   <TableRow>
                       {
                           rows.map((item) => (
                               <TableCell key={item}>
                                   {item}
                               </TableCell>
                           ))
                       }
                   </TableRow>
               </TableHead>
               <TableBody>
                   {children}
               </TableBody>
           </Table> : <List>
            { children }
           </List> 
            }
        </TableContainer>
    )
}

export default ItemsTable