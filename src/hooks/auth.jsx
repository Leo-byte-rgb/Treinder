import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';
import { getItem, removeItem, setItem } from '../utils/localstorage';

export const AuthContext = createContext({}
);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export const AuthProvider= ({ children }) => {
  const [data, setData] = useState(() => {
    const token = getItem('token');
    const user = getItem('user');
    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return {
        token,
        user: JSON.parse(user),
      };
    }
    return {};
  });

  const signIn = useCallback(
    async ({ email, password }) => {
      const response = await api.post('sessions', {
        email,
        password,
      });
      const { token, refreshToken, user } = response.data;

      setItem('token', token);
      setItem('refreshToken', refreshToken);
      setItem('user', JSON.stringify(user));

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ token, user });
    },
    [],
  );

  const signOut = useCallback(() => {
    api.defaults.headers.authorization = ``;
    removeItem('token');
    removeItem('refreshToken');
    removeItem('user');
    setData({});
  }, []);

  const updateUser = useCallback(
    (user) => {
      setItem('user', JSON.stringify(user));
      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
  );
  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
