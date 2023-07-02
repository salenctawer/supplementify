

export const useDuration = (duration: number) => {
    const seconds = Math.floor((duration / 1000) % 60)
    const minutes = Math.floor((duration / 1000 / 60) % 60);

    if(minutes && seconds) {
        return `${minutes}m ${seconds}s`
    }

    else if(minutes) {
        return `${minutes}m`
    }

    else if(seconds) {
        return `${seconds}s`
    }
}

export default useDuration