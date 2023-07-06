'use client'

import { useRouter } from 'next/navigation'

import { Button } from "@mui/material"
import PageContainer from '@/components/ui/PageContainer/PageContainer'

 
export default function Error({
  error,
  reset,
}: {
  error: Error,
  reset: () => void
}) {
  const router = useRouter()

  const handleHomeClick = () => {
    console.log('123')
    return router.push('/')
  }

  return (
    <div>
    {
        error ? <h2>{error.message}</h2> : <h2>Something went wrong!</h2>
    }
      <Button variant="contained" onClick={() => reset()}>Try again</Button>
      <Button variant="contained" onClick={handleHomeClick}>Home</Button>
    </div>
  )
}