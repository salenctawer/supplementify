'use client'
import { useRouter, usePathname } from 'next/navigation'

import { Box, Button } from "@mui/material"
 
export default function Error({
  error,
  reset,
}: {
  error: Error,
  reset: () => void
}) {
  const router = useRouter()
  const pathName = usePathname()

  const handleHomeClick = () => {
    if(pathName === '/') {
      return reset()
    }

    return router.push('/')
  }

  return (
    <main className="container centeredContainer">
      <h2>Something went wrong!</h2>
    {
        error ? <h3>Error: {error.message}</h3> : <span></span>
    }
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px' }}>
        <Button sx={{width: '150px', marginRight: '16px'}} variant="contained" onClick={() => reset()}>Try again</Button>
        <Button sx={{width: '150px', marginLeft: '16px'}} variant="contained" onClick={handleHomeClick}>Home</Button>
      </Box>
    </main>
  )
}