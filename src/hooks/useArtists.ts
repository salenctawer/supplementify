import { SpotifyArtistsData } from '@/types/SpotifyData';

const useArtits = (artists: SpotifyArtistsData[]) => {
  const namesArray = artists.map((item) => item.name);
  return namesArray.join(', ');
};

export default useArtits;
