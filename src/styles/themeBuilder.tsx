'use client';

import React, { useMemo, useState, useEffect, createContext } from 'react';
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'], display: 'swap' });

const getDesignTokens = (mode: PaletteMode, isMobileDevice: boolean) => ({
  shape: {
    borderRadius: 16
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          background: { default: '#eceff1', paper: '#fafafa' },
          primary: {
            main: 'rgb(30, 215, 96)', //TODO подумать над цветами
            contrastText: '#000'
          },
          secondary: {
            main: '#fff'
          }
        }
      : {
          background: { default: '#272731', paper: '#32323e' },
          primary: {
            main: 'rgb(37, 179, 89)',
            contrastText: '#fff'
          },
          secondary: {
            main: '#fff'
          }
        })
  },
  typography: {
    fontSize: isMobileDevice ? 12 : 14,
    fontFamily: manrope.style.fontFamily
  },
  breakpoints: {
    values: {
      xl: 1850,
      lg: 1200,
      md: 900,
      sm: 600,
      xs: 350
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
          margin: 0
        },
        'input[type=number]': {
          '-moz-appearance': 'textfield' /* Firefox */
        },
        a: {
          color: 'inherit',
          textDecoration: 'none'
        },
        '&::-webkit-scrollbar ': {
          width: '8px',
          height: '7px',
          cursor: 'pointer'
        },
        '&::-webkit-scrollbar-track': {
          '-webkit-border-radius': '4px',
          borderRadius: '4px'
        },
        '&::-webkit-scrollbar-thumb': {
          ' -webkit-border-radius': '4px',
          background: 'rgb(193, 193, 193)',
          borderRadius: '4px',
          width: '5px',
          height: '5px'
        },

        '&::-webkit-scrollbar-thumb:hover': {
          background: 'rgba(193, 193, 193, 0.7)'
        }
      }
    }
  }
});

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function ThemeBuilder({ children }: React.HTMLAttributes<HTMLDivElement>) {
  const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)');
  const isMobileDevice = useMediaQuery('(max-width:600px)');
  const [mode, setMode] = useState<'light' | 'dark'>(prefersLightMode ? 'light' : 'dark');

  const theme = useMemo(
    () => createTheme(getDesignTokens(mode, isMobileDevice)),
    [mode, isMobileDevice]
  );
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    []
  );
  // Мерцание
  useEffect(() => {
    setMode(prefersLightMode ? 'light' : 'dark');
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
