// exemple charge un svg depuis le rep asset => import reactLogo from './assets/react.svg'
// exemple charge un svg depuis le rep public => import viteLogo from '/vite.svg'

import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import Profil from "./pages/Profil";
import Panier from "./pages/Panier";
import Login from "./pages/Login";
import RetourProduit from "./components/RetourProduit";
import CGU from "./components/CGU";
import CGV from "./components/CGV";
import Contact from "./components/Contact";
import MentionsLegales from "./components/MentionsLegales";


// Routes Admin
import HomeAdmin from "./pages/admin/HomeAdmin";
import UserAdmin from './pages/admin/users';
import UserDetail from './pages/admin/users/UserDetail';
import CreateUser from './pages/admin/users/CreateUser';

import CategorieProductAdmin from './pages/admin/categorie-products';
import CreateCategorieProduct from './pages/admin/categorie-products/CreateCategorieProduct';

import ProductAdmin from './pages/admin/products';
import CreateProduct from './pages/admin/products/CreateProduct';

// Layouts
import AdminLayout from "./components/layouts/AdminLayout";
import ClientLayout from "./components/layouts/ClientLayout";



const App = () => {
  return (
    <>


      <Routes>
        {/*Route Client */}
        <Route path="/" element={<ClientLayout />} >
          <Route index element={<Homepage />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="shop" element={<Shop />} />
          <Route path="panier" element={<Panier />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="profile" element={<Profil />} />
          <Route path="retourProduit" element={<RetourProduit />} />
          <Route path="cgu" element={<CGU />} />
          <Route path="cgv" element={<CGV />} />
          <Route path="contact" element={<Contact />} />
          <Route path="mentionsLegales" element={<MentionsLegales />} />

        </Route>


        {/*Route Admin */}

        <Route path="/admin" element={<AdminLayout />} >
          <Route path="users" element={<UserAdmin />} />
          <Route path="users/add" element={<CreateUser />} /> {/*A nested route!*/}
          <Route path="users/:id" element={<UserDetail />} /> {/*A nested route!*/}

          <Route path="categorie-products" element={<CategorieProductAdmin />} />
          <Route path="categorie-products/add" element={<CreateCategorieProduct />} />

          <Route path="products" element={<ProductAdmin />} />CreateProductAdmin
          <Route path="products/add" element={<CreateProduct />} />
        </Route>
      </Routes>


    </>
  );
};

export default App;
