import React, { useEffect } from 'react';

import PageContainer from '@/components/ui/PageContainer/PageContainer';
import { useAuthOnly } from '@/hooks/useAuthOnly';

// TODO: Сделать middleware или hoc для auth only роутинга, подумать над next auth

export const PageProvider = ({
  children,
  error
}: {
  children: React.ReactNode;
  error: Error | null;
}) => {
  const { isAuth } = useAuthOnly();

  useEffect(() => {
    console.log(error);
    if (error) {
      throw new Error(error);
    }
  }, [error]);

  if (isAuth) {
    return <PageContainer>{children}</PageContainer>;
  }
};
