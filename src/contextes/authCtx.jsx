import React, {useState, createContext, useContext, useMemo, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/apiHandler';
export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = props => {

  const navigate = useNavigate()
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
    const { token } = userData;
    const { logged, role, _id, email,firstname,lastname } = userData;
    saveUserToLocalStorage({token, logged, role, _id, email})

    setIsLoggedIn(true)
    setAuthUser({_id, email, token,firstname,lastname, role, logged})
    if(role === 'client') {
      navigate('/')
    } else if (role === 'admin'){
      navigate('/admin')
    }
  };

  const logout = async () => {
    localStorage.setItem('user', null);
    setAuthUser({});
    setIsLoggedIn(false);
    navigate('/');
  }

  const signup = async (key, userData) => {
    const { token, logged, role, _id, email, firstname, lastname } = userData;
    saveUserToLocalStorage({token, _id, logged, role, email, firstname, lastname})
    setIsLoggedIn(true)
    setAuthUser({_id, firstname, lastname, email, token, role, logged})
    if(role === 'client') {
      navigate('/')
    } else if (role === 'admin'){
      navigate('/admin')
    }
  }

  const saveUserToLocalStorage = (userInfo) => {
    localStorage.setItem('user', JSON.stringify(userInfo));
  };

  const value = useMemo(
    () => ({
      authUser,
      setAuthUser,
      isLoggedIn,
      setIsLoggedIn,
      login,
      logout,
      signup,
    }), [authUser]
    )

    useEffect(() => {
      const getAuthUserInLocalStorage = () => {
        const res = JSON.parse(localStorage.getItem('user'));
        if(res) {
          setAuthUser(res)
        }
      }
      getAuthUserInLocalStorage()
    }, []);

    return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}
