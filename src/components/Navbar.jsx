import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";
import Container from "@mui/material/Container";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import reactLogo from "../assets/logoBlanc.svg";
import { useAuth } from '../contextes/authCtx';

import "../styles/Navbar.css";

const Navbar = () => {
  const authCtx = useAuth();
  console.log(authCtx)
  return (
    <nav>
      <Container>
        <div className="navbar">
          <img src={reactLogo} alt="logo-brand" width={55} height={65} />
          <div className="links">
            <div className="subnav">
              <div className="subnavbtn">
                <Link to={`shop`} className="nav-link">
                  Eshop
                </Link>
                <SubMenu />
              </div>
            </div>
            <Link to={`#`} className="nav-link">
              Blog
            </Link>
          </div>
          <div className="nav-icons">
            <SearchOutlinedIcon />
            <ShoppingBasketOutlinedIcon />
            {authCtx.isLoggedIn ?
              (<button onClick={(e) => {e.preventDefault(); authCtx.logout() }}>Logout</button>)
              :(<p>Login</p>)
            }
            <Link to={`login`}>
              <PersonOutlineOutlinedIcon />
            </Link>
            
          </div>
        </div>
      </Container>
    </nav>
  );
};


export default Navbar;
