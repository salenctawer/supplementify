import { useState, useEffect } from 'react';
import { useActionCreators, useAppSelector } from '@/redux/hooks';
import { allPlayerActions } from '@/redux/slices/playerSlice';

const useAudio = (url: string, index: number) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const playerActions = useActionCreators(allPlayerActions);
  const previewSrc = useAppSelector((state) => state.player.recentlyPlayedPreview);

  const toggle = async (src: string) => {
    togglePlaying(!playing);
  };

  const togglePlaying = (isPlaying: boolean) => {
    if (audio) {
      audio.volume = 0.1;
    }
    if (!isPlaying) {
      audio?.pause();
      setPlaying(false);
    } else {
      audio?.play();
      setPlaying(true);
    }
  };

  useEffect(() => {
    const allAudios = document.getElementsByTagName('audio');
    setAudio(allAudios[index]);

    document.addEventListener(
      'play',
      (e) => {
        for (let i = 0, len = allAudios.length; i < len; i++) {
          if (allAudios[i] != e.target) {
            allAudios[i].pause();
          }
        }
      },
      true
    );
    //   audio.addEventListener('ended', () => togglePlaying(false))
    //   return () => {
    //     audio.removeEventListener('ended', () => togglePlaying(false))
    //   };
  }, []);

  useEffect(() => {
    if (previewSrc && previewSrc !== url) {
      setPlaying(false);
    }
  }, [playing]);

  return {
    playing,
    toggle
  };
};

export default useAudio;
