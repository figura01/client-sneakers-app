import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import { AuthProvider } from './contextes/authCtx';
import { CartProvider } from './contextes/cartCtx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>  
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
