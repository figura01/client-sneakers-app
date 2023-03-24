import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";
import Container from "@mui/material/Container";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import reactLogo from "../assets/logoBlanc.svg";
import "../styles/Navbar.css";

const Navbar = () => {
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
