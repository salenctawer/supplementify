'use client'
 
export default function Error({
  error,
  reset,
}: {
  error: Error,
  reset: () => void
}) {
  return (
    <div>
    {
        error ? <h2>{error.message}</h2> : <h2>Something went wrong!</h2>
    }
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}