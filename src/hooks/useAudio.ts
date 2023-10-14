import React, { useState, useEffect } from "react";

const useAudio = (url: string) => {
    const [audioSrc, setAudioSrc] = useState('')
    const [audio, setAudio] = useState(new Audio(url))
    const [playing, setPlaying] = useState(false)
  
    const toggle = (src: string) => {
        if(audioSrc !== src) {
            console.log('не равно')
            togglePlaying(false)
            setAudioSrc(src)
            setAudio(new Audio(src))
            togglePlaying(true)
        }
        else {
            console.log(playing)
            togglePlaying(!playing)
        }
    }

    const togglePlaying = (isPlaying: boolean) => {
        audio.volume = 0.1
        if(!isPlaying) {
            setPlaying(false)
            return audio.pause()
        }

        setPlaying(true)
        return audio.play()
    }
  
    // useEffect(() => {
    //     audio.volume = 0.1
    //     console.log(playing)
    //     playing ? audio.play() : audio.pause()
    //   },
    //   [playing]
    // )
  
    useEffect(() => {
      audio.addEventListener('ended', () => togglePlaying(false))
      return () => {
        audio.removeEventListener('ended', () => togglePlaying(false))
      };
    }, [])
  
    return {
        playing, 
        toggle,
    }
  };

  export default useAudio