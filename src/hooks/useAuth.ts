import { useMemo } from 'react';
import { useAppSelector, useActionCreators } from '@/redux/hooks';
import { allUserActions } from '@/redux/slices/userSlice';
import { useRouter } from 'next/navigation';

export const useAuth = () => {
  const router = useRouter();
  const authActions = useActionCreators(allUserActions);
  const loginData = useAppSelector((state) => state.user.loginData);
  const accessToken = window.localStorage.getItem('accessToken');
  const refreshToken = window.localStorage.getItem('refreshToken');
  const tokenType = window.localStorage.getItem('tokenType');
  const expiry = window.localStorage.getItem('expiry');

  const setStoreLoginData = () => {
    authActions.setLoginData({
      access_token: accessToken,
      token_type: tokenType,
      refresh_token: refreshToken,
      expiry
    });
  };

  const logout = () => {
    authActions.setLoginData(null);
    console.log(localStorage);
    localStorage.setItem('accessToken', '');
    router.push('/');
  };

  const isAuth = useMemo(() => {
    return loginData && accessToken;
  }, [loginData, accessToken]);

  return {
    loginData,
    accessToken,
    isAuth,
    logout,
    setStoreLoginData
  };
};
