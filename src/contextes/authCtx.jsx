import React, {useState, createContext} from 'react';

export const AuthContext = createContext();

export const AuthProvider = props => {
  const [authState, setAuthState] = useState({
    _id: '',
    role: '',
    token: '',
    email: '',
    firstname: '',
    lastname: '',
  })

  return (
    <AuthContext.Provider value={[authState, setAuthState]}>
      {props.children}
    </AuthContext.Provider>
  )
}