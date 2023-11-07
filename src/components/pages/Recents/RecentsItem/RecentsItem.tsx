import React, { FC } from 'react';

import { SpotifyRecentlyPlayedItemData } from '@/types/SpotifyData';
import useArtits from '@/hooks/useArtists';
import useTime from '@/hooks/useTime';
import styles from './RecentsItem.module.scss';

import {
  Avatar,
  ListItem,
  TableCell,
  TableRow,
  ListItemText,
  IconButton,
  Box
} from '@mui/material';
import useMedia from '@/styles/useMedia';
import { PauseRounded, PlayArrowRounded } from '@mui/icons-material';
import useAudio from '@/hooks/useAudio';

interface RecentsItemPropsData {
  item: SpotifyRecentlyPlayedItemData;
  index: number;
}

export const RecentsDefaultItem: FC<RecentsItemPropsData> = (props) => {
  const { playing, toggle } = useAudio(props.item.track.preview_url, props.index);

  const { getLastListeningTime } = useTime();
  const { mdSize } = useMedia();

  const artists = useArtits(props.item.track.artists);
  const time = getLastListeningTime(props.item.played_at);

  return mdSize ? (
    <TableRow hover className={styles.card}>
      <TableCell>{props.index + 1}</TableCell>
      <TableCell>
        <Avatar src={props.item.track.album.images[0].url} />
      </TableCell>
      <TableCell>{props.item.track.name}</TableCell>
      <TableCell>{artists}</TableCell>
      <TableCell>{time + ' ago' + '      ' + playing}</TableCell>
      <TableCell>
        <IconButton
          aria-label="play"
          color="primary"
          onClick={() => toggle(props.item.track.preview_url)}>
          {playing ? <PauseRounded color="primary" /> : <PlayArrowRounded color="primary" />}
        </IconButton>
        <audio src={props.item.track.preview_url}></audio>
      </TableCell>
    </TableRow>
  ) : (
    <ListItem sx={{ justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <ListItemText primary={`${artists} - ${props.item.track.name}`} secondary={`${time} ago`} />
        <Avatar
          src={props.item.track.album.images[0].url}
          sx={{ marginLeft: '16px', marginRight: '64px' }}
        />
      </Box>
      <IconButton
        aria-label="play"
        color="primary"
        onClick={() => toggle(props.item.track.preview_url)}>
        {playing ? <PauseRounded color="primary" /> : <PlayArrowRounded color="primary" />}
      </IconButton>
    </ListItem>
  );

  // return (
  //     mdSize ? <RecentsListItem /> : <RecentsRowItem />
  // )
};

// const RecentsListItem = () => {
//     return <ListItem>

//     </ListItem>
// }

// const RecentsRowItem = () => {
//     return <TableRow></TableRow>
// }

export const RecentsItem = React.memo(RecentsDefaultItem);
