'use client'

import { Box } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { FC } from 'react';

export const ItemsTableSkeleton: FC = () => {
    return (
        <Box>
            <Skeleton animation="wave" height="50px" width="100%" />
            <Skeleton animation="wave" height="50px" width="100%" />
            <Skeleton animation="wave" height="50px" width="100%" />
        </Box>
    )
}

export default ItemsTableSkeleton