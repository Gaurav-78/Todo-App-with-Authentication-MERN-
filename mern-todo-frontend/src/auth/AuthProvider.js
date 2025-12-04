import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const TOKEN_KEY = 'mern_todo_token';
const USER_KEY = 'mern_todo_user';

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem(USER_KEY) || 'null'));

  useEffect(() => {
    if (token) localStorage.setItem(TOKEN_KEY, token);
    else localStorage.removeItem(TOKEN_KEY);
  }, [token]);

  useEffect(() => {
    if (user) localStorage.setItem(USER_KEY, JSON.stringify(user));
    else localStorage.removeItem(USER_KEY);
  }, [user]);

  const login = (tokenValue, userValue) => {
    setToken(tokenValue);
    setUser(userValue);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
