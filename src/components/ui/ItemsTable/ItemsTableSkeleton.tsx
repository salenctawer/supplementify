'use client'

import Skeleton from '@mui/material/Skeleton';
import { FC } from 'react';

export const ItemsTableSkeleton: FC = () => {
    return <Skeleton animation="wave" height="500" width="100%" />
}

export default ItemsTableSkeleton