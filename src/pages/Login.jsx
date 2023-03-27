import React, { useState, useRef, useContext } from 'react';
import { useAuth } from '../contextes/authCtx';
import { useSeessionStorage } from '../hooks/useSesseionStorage';
import { Box } from "@mui/system";
import api from '../api/apiHandler';


const Login = () => {
  const authCtx = useAuth();
  // console.log('authCtx: ', authCtx)
  const { 
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn
  } = useAuth();


  const handlerSubmit = async (e) => {
    e.preventDefault();

    if(inputEmailRef.current.value && inputPasswordRef.current.value) {
      console.log('test to loggIn');
      try {
        const result = await api.login('http://localhost:8000/auth/login', 
          {
            email: inputEmailRef.current.value,
            password: inputPasswordRef.current.value
          }
        )
        console.log('result', result)

        if(result.status === 200 && result.logged) {
          console.log('try to use authCtx:')

          authCtx.login('user', {...result})
          authCtx.logout()
        }
      
      } catch (err) {
        console.log('err: ', err)
      }
      
    }

  }

  const handlerChange = () => {
    console.log(inputEmailRef.current.value);
  }

  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();

  return (
    <Box>
      <h1>Se connecter</h1>
      <form onSubmit={(e) => handlerSubmit(e)} onChange={(e) => handlerChange(e)} method="post" action="http://localhost:8000/auth/login">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email*"
          required
          ref={inputEmailRef}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Mot de passe*"
          required
          ref={inputPasswordRef}
        />
        <input type="submit" value="Se connecter" className="main-btn" />
      </form>
    </Box>
  );
};

export default Login;
