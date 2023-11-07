import React, { FC } from 'react';
import * as MuiIcons from '@mui/icons-material';

export type IconNames = keyof typeof MuiIcons;
export type IconProps = {
  iconName: IconNames;
  styles?: {
    color?: string;
    width?: string;
    height?: string;
  };
};

export const IconComponent: FC<IconProps> = ({ iconName, styles }) => {
  const getComponentStyles = () => {
    if (!styles) {
      return {
        width: '28px',
        height: '28px',
        color: '#fff'
      };
    }

    return {
      width: styles.width ?? '28px',
      height: styles.height ?? '28px',
      color: styles.color ?? '#fff'
    };
  };

  const Icon = MuiIcons[iconName];
  return <Icon sx={getComponentStyles()} />;
};
