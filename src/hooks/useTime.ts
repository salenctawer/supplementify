import { useCallback } from 'react';

const useTime = () => {
  const getLastListeningTime = useCallback((time: string) => {
    const currentDate = new Date();
    const playedAtDate = new Date(time);

    const lastListeningTimeMs = Math.abs(currentDate.getTime() - playedAtDate.getTime());

    return getDuration(lastListeningTimeMs);
  }, []);

  const getDuration = useCallback((duration: number) => {
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / 1000 / 60) % 60);
    const hours = Math.floor((duration / 1000 / 60 / 60) % 60);

    if (minutes && seconds && hours) {
      return `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes && seconds) {
      return `${minutes}m ${seconds}s`;
    } else if (minutes) {
      return `${minutes}m`;
    } else if (seconds) {
      return `${seconds}s`;
    }
  }, []);

  return {
    getLastListeningTime,
    getDuration
  };
};

export default useTime;
