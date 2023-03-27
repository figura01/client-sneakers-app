import React, { useState, useRef } from 'react';
import { Box } from "@mui/system";
import { Container } from "@mui/system";
import api from '../api/apiHandler';
const Login = () => {

  const handlerSubmit = async (e) => {
    e.preventDefault();

    if(inputEmailRef.current.value && inputPasswordRef.current.value) {
      try {
        const result = await api.login('http://localhost:8000/auth/login', {email: inputEmailRef.current.value, password: inputPasswordRef.current.value})
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
    <Container>
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
    </Container>
    
  );
};

export default Login;
