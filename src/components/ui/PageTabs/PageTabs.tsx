'use client';

import React, { FC, useState } from 'react';
import { Tabs, Tab } from '@mui/material';

export interface PageTabsData {
  handleTabChange: (timeRange: string) => void;
}

export const PageTabs: FC<PageTabsData> = (props) => {
  const [tabValue, setTabValue] = useState('short_term');

  const handleChange = (_e: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
    props.handleTabChange(newValue);
  };

  return (
    <Tabs value={tabValue} onChange={handleChange} centered sx={{ marginBottom: '16px' }}>
      <Tab value="short_term" label="Last month" />
      <Tab value="medium_term" label="Last 6 months" />
      <Tab value="long_term" label="All time" />
    </Tabs>
  );
};

export default PageTabs;
