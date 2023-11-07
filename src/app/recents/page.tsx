import React from 'react';
import { Metadata } from 'next';
import RecentsPage from '@/components/pages/Recents/RecentsPage';

export const metadata: Metadata = {
  title: 'Recently played | Supplemetify',
  description: 'View Spotify statistics of recent plays on your account over a period of time',
  openGraph: {
    title: 'Recently played',
    description: 'View Spotify statistics of recent plays on your account over a period of time'
  }
};

export default function Recents() {
  return (
    <main>
      <h1 className="pageTitle">Recently played</h1>
      <RecentsPage />
    </main>
  );
}
