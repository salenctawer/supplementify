import React from 'react';

import { Container } from '@mui/material';

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return <Container sx={{ marginBottom: '64px' }}>{children}</Container>;
};

export default PageContainer;
