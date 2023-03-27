import React, {useState, createContext, useContext, useMemo} from 'react';

import api from '../api/apiHandler';
export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = props => {
  const [authUser, setAuthUser] = useState({
    _id: '',
    role: '',
    token: '',
    email: '',
    firstname: '',
    lastname: '',
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = async (key, userData) => {
    console.log('log in authCtx');
    console.log('key: ', key, 'userData: ', userData);
    console.log('userData: ', userData)
    saveUserToSessionStorage(userData.token)
    const { token, logged } = userData;
    const {_id, firstname, lastname, email, role } = userData.user;
    setIsLoggedIn(true)
    setAuthUser({_id, firstname, lastname, email, token, role, logged})

    // navigate("/dashboard/profile", { replace: true });
  };

  const logout = async () => {
    console.log('logout: ')
    sessionStorage.setItem('user', null);
    setAuthUser({});
  }

  const saveUserToSessionStorage = (userInfo) => {
    sessionStorage.setItem('user', JSON.stringify(userInfo));
  };

  const value = useMemo(
    () => ({
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
    login,
    logout,
    }), [authUser]
  )

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}