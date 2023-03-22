// exemple charge un svg depuis le rep asset => import reactLogo from './assets/react.svg'
// exemple charge un svg depuis le rep public => import viteLogo from '/vite.svg'

import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import Panier from "./pages/Panier";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;