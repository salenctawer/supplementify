'use client';
import React from 'react';
import { FC, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';

export const Logout: FC = () => {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  });

  return <div>Logout</div>;
};

export default Logout;
