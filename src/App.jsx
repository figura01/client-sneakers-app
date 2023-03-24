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

// Routes Admin
import HomeAdmin from "./pages/admin/HomeAdmin";
import UserAdmin from './pages/admin/users';
import UserDetail from './pages/admin/users/UserDetail';

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <Routes>
        {/*Route Client */}
        <Route path="/" element={<Homepage />}>
          <Route path="product" element={<Product />} />
          <Route path="shop" element={<Shop />} />
          <Route path="panier" element={<Panier />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        {/*Route Admin */}
        
        <Route path="/admin" element={<HomeAdmin />} >
          <Route path="users" element={<UserAdmin />} />
          <Route path="users/:id" element={<UserDetail />} /> {/*A nested route!*/}
        </Route>
      </Routes>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
