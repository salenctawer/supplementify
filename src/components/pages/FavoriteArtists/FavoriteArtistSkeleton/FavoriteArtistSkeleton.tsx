'use client'

import Skeleton from '@mui/material/Skeleton';
import { Grid } from "@mui/material"

const FavoriteArtistSkeleton = () => {
    const array = ['1', '2', '3', '4', '5', '6']
    return (
        <Grid container spacing={2}>
            {
                array.map((item) => (
                    <Grid item xs={4} key={item}>
                        <Skeleton 
                            variant="rectangular" 
                            animation="wave" 
                            sx={{width: '100%', maxWidth: '374px', height: '500px', borderRadius: '16px'}}/>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default FavoriteArtistSkeleton