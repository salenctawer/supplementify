import { useRouter } from 'next/navigation';
import { useAuth } from './useAuth';
import { useEffect } from 'react';

export const useAuthOnly = () => {
  const router = useRouter();
  const { isAuth, accessToken, loginData, setStoreLoginData } = useAuth();

  const redirectToLogin = () => {
    return router.push('/login');
  };

  useEffect(() => {
    if (isAuth) {
      return;
    }

    if (accessToken && !loginData) {
      return setStoreLoginData();
    }

    return redirectToLogin();
  }, [isAuth, accessToken, loginData]);

  return {
    isAuth
  };
};
